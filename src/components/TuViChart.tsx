import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CalendarDays, Clock3, User, AlertCircle, X } from 'lucide-react';
import { computeTuViChart } from '../utils/tuvi';
import { getLocalDateString } from '../utils/date';
import { TuViChartResult, Palace, StarInstance } from '../data/tuvi/types';
import { BRIGHTNESS_NAMES, TRANSFORMATION_NAMES } from '../data/tuvi/constants';

// Canh giờ → giờ đại diện (để hourChi đúng)
const HOURS = [
  { label: 'Tý (23h–1h)', value: 0 }, { label: 'Sửu (1h–3h)', value: 2 },
  { label: 'Dần (3h–5h)', value: 4 }, { label: 'Mão (5h–7h)', value: 6 },
  { label: 'Thìn (7h–9h)', value: 8 }, { label: 'Tỵ (9h–11h)', value: 10 },
  { label: 'Ngọ (11h–13h)', value: 12 }, { label: 'Mùi (13h–15h)', value: 14 },
  { label: 'Thân (15h–17h)', value: 16 }, { label: 'Dậu (17h–19h)', value: 18 },
  { label: 'Tuất (19h–21h)', value: 20 }, { label: 'Hợi (21h–23h)', value: 22 },
];

// Vị trí ô trong lưới 4×4 theo địa chi (bố cục tử vi truyền thống)
const GRID_POS: Record<number, { r: number; c: number }> = {
  5: { r: 1, c: 1 }, 6: { r: 1, c: 2 }, 7: { r: 1, c: 3 }, 8: { r: 1, c: 4 }, // Tỵ Ngọ Mùi Thân
  4: { r: 2, c: 1 }, 9: { r: 2, c: 4 },                                       // Thìn / Dậu
  3: { r: 3, c: 1 }, 10: { r: 3, c: 4 },                                      // Mão / Tuất
  2: { r: 4, c: 1 }, 1: { r: 4, c: 2 }, 0: { r: 4, c: 3 }, 11: { r: 4, c: 4 },// Dần Sửu Tý Hợi
};

function starColor(st: StarInstance): string {
  if (st.kind === 'chinh_tinh') return 'text-brand-gold font-bold';
  if (st.kind === 'phu_cat') return 'text-amber-200/90';
  if (st.kind === 'phu_sat') return 'text-red-400/90';
  if (st.kind === 'dao_hoa') return 'text-pink-300/90';
  return 'text-on-surface-variant';
}

function StarChip({ st }: { st: StarInstance }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${starColor(st)} leading-tight`}>
      {st.name}
      {st.brightness && <span className="text-[8px] opacity-70">{st.brightness}</span>}
      {st.transformation && (
        <span className="text-[7px] bg-brand-cyan/15 text-brand-cyan px-1 rounded ml-0.5">
          {TRANSFORMATION_NAMES[st.transformation].replace('Hóa ', 'H.')}
        </span>
      )}
    </span>
  );
}

function PalaceCell({ palace, onClick }: { palace: Palace; onClick: () => void }) {
  const pos = GRID_POS[palace.branchIndex];
  return (
    <button
      onClick={onClick}
      style={{ gridRow: pos.r, gridColumn: pos.c }}
      className="relative text-left border border-brand-gold/15 hover:border-brand-gold/50 bg-brand-purple/5 hover:bg-brand-gold/5 transition-colors p-1.5 md:p-2 overflow-hidden flex flex-col min-h-[92px] md:min-h-[120px] cursor-pointer group"
    >
      {/* stars */}
      <div className="flex-1 flex flex-wrap gap-x-1.5 gap-y-0.5 content-start text-[9px] md:text-[10px] font-sans">
        {palace.stars.map((st, i) => <StarChip key={i} st={st} />)}
      </div>
      {/* footer: palace name + branch + score */}
      <div className="flex items-end justify-between mt-1 pt-1 border-t border-brand-gold/10">
        <div className="leading-none">
          <div className="font-serif text-[10px] md:text-xs text-white font-bold flex items-center gap-1">
            {palace.name}
            {palace.isBody && <span className="text-[7px] text-brand-cyan border border-brand-cyan/30 px-0.5 rounded">Thân</span>}
          </div>
          <div className="font-mono text-[7px] md:text-[8px] text-on-surface-variant/70">
            {palace.canName} {palace.branchName} · {palace.majorPeriod.fromAge}-{palace.majorPeriod.toAge}t
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[8px] md:text-[9px] text-brand-gold leading-none">{'★'.repeat(palace.score.stars5)}</div>
          <div className="font-mono text-[7px] text-on-surface-variant/60">{palace.score.score100}đ</div>
        </div>
      </div>
      {(palace.hasTuan || palace.hasTriet) && (
        <span className="absolute top-1 right-1 text-[6px] md:text-[7px] font-mono text-purple-300/70 border border-purple-300/20 px-0.5 rounded">
          {[palace.hasTuan ? 'Tuần' : '', palace.hasTriet ? 'Triệt' : ''].filter(Boolean).join('·')}
        </span>
      )}
    </button>
  );
}

export default function TuViChart() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [hour, setHour] = useState(12);
  const [gender, setGender] = useState<'nam' | 'nu'>('nam');
  const [chart, setChart] = useState<TuViChartResult | null>(null);
  const [selected, setSelected] = useState<Palace | null>(null);
  const [error, setError] = useState('');

  const byBranch = useMemo(() => {
    if (!chart) return {};
    const m: Record<number, Palace> = {};
    for (const p of chart.palaces) m[p.branchIndex] = p;
    return m;
  }, [chart]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSelected(null);
    const [y, m, d] = birthDate.split('-').map(Number);
    if (!y || !m || !d || y < 1800 || y > 2199) {
      setError('Ngày sinh chưa hợp lệ (hỗ trợ năm 1800–2199).');
      return;
    }
    try {
      setChart(computeTuViChart({ day: d, month: m, year: y, hour, gender }));
    } catch (err) {
      console.error(err);
      setError('Không thể lập lá số với dữ liệu này.');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-8" id="tuvi-chart">
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
          Tử Vi Đẩu Số
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-gold font-bold">Lá Số Tử Vi</h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
          Từ giờ khắc chào đời, các sao an bài vào 12 cung số mệnh. Nhập ngày–giờ sinh để lập lá số
          và nghe tàng thư luận đoán từng cung, kèm điểm phù hợp.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6 shadow-xl relative overflow-hidden max-w-3xl mx-auto">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> Ngày sinh (dương lịch)
            </label>
            <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} required
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors [color-scheme:dark]" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <Clock3 className="w-3.5 h-3.5" /> Giờ sinh (canh giờ)
            </label>
            <select value={hour} onChange={e => setHour(Number(e.target.value))}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors">
              {HOURS.map(h => <option key={h.value} value={h.value} className="bg-brand-void">{h.label}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Giới tính
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['nam', 'nu'] as const).map(g => (
                <button key={g} type="button" onClick={() => setGender(g)}
                  className={`py-3 rounded-xl border text-sm font-sans transition-all cursor-pointer ${gender === g ? 'border-brand-gold text-brand-gold bg-brand-gold/10 font-bold' : 'border-white/10 text-gray-400 hover:text-white'}`}>
                  {g === 'nam' ? 'Nam' : 'Nữ'}
                </button>
              ))}
            </div>
          </div>
        </div>
        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-sans flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" /><span>{error}</span>
          </div>
        )}
        <button type="submit"
          className="w-full py-4 rounded-xl font-mono text-xs tracking-[0.2em] font-semibold text-brand-gold hover:text-brand-cyan border border-brand-gold/20 hover:border-brand-cyan bg-brand-gold/5 hover:bg-brand-cyan/5 transition-all outline-none duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer uppercase">
          <Sparkles className="w-4 h-4" /> Lập Lá Số Tử Vi
        </button>
      </form>

      {/* Chart */}
      <AnimatePresence>
        {chart && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
            {chart.warnings.map((w, i) => (
              <div key={i} className="max-w-3xl mx-auto p-2.5 rounded-lg bg-brand-gold/5 border border-brand-gold/15 text-[11px] text-brand-gold/80 font-sans flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /><span>{w}</span>
              </div>
            ))}

            <div className="overflow-x-auto no-scrollbar">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 min-w-[520px] md:min-w-0 aspect-square max-w-3xl mx-auto rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-void/40">
                {chart.palaces.map(p => (
                  <PalaceCell key={p.index} palace={byBranch[p.branchIndex]} onClick={() => setSelected(p)} />
                ))}
                {/* Trung tâm */}
                <div style={{ gridRow: '2 / 4', gridColumn: '2 / 4' }} className="border border-brand-gold/20 bg-gradient-to-br from-brand-purple/20 to-brand-void/60 flex flex-col items-center justify-center text-center p-3 gap-1">
                  <span className="font-serif text-brand-gold font-bold text-sm md:text-lg">Thiên Bàn</span>
                  <div className="font-mono text-[9px] md:text-[11px] text-on-background space-y-0.5">
                    <div>DL: {chart.input.day}/{chart.input.month}/{chart.input.year} · {gender === 'nam' ? 'Nam' : 'Nữ'}</div>
                    <div>ÂL: {chart.lunar.day}/{chart.lunar.month}{chart.lunar.leap ? ' (nhuận)' : ''} · {chart.yearCanChi}</div>
                    <div className="text-on-surface-variant">Tháng {chart.monthCanChi} · Ngày {chart.dayCanChi} · Giờ {chart.hourCanChi}</div>
                    <div className="text-brand-cyan pt-1">Mệnh {chart.palaces[0].branchName} · {chart.cuc.name}</div>
                    <div className="text-on-surface-variant/70">{chart.isYang ? 'Đại hạn đi thuận' : 'Đại hạn đi nghịch'}</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center font-mono text-[10px] text-on-surface-variant/60">Chạm vào một cung để xem luận đoán chi tiết.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel luận đoán */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)} className="absolute inset-0 bg-brand-void/80 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, y: 15, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-brand-void border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(233,195,73,0.15)] z-10 flex flex-col max-h-[88vh]">
              <div className="p-5 border-b border-brand-gold/10 flex justify-between items-start bg-brand-purple/5">
                <div>
                  <span className="font-mono text-[10px] text-brand-cyan uppercase block">
                    Cung {selected.canName} {selected.branchName}{selected.isBody ? ' · Thân cư' : ''} · Đại hạn {selected.majorPeriod.fromAge}–{selected.majorPeriod.toAge} tuổi
                  </span>
                  <h4 className="font-serif text-xl text-brand-gold font-bold flex items-center gap-2">
                    Cung {selected.name}
                    <span className="text-sm text-brand-gold/80">{'★'.repeat(selected.score.stars5)}</span>
                    <span className="font-mono text-xs text-on-surface-variant">{selected.score.score100}/100 · {selected.score.label}</span>
                  </h4>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 text-on-surface-variant hover:text-white bg-brand-purple/40 rounded-full transition-colors outline-none shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {/* Danh sách sao */}
                <div className="flex flex-wrap gap-2">
                  {selected.stars.length === 0 && <span className="text-xs text-on-surface-variant font-sans italic">Vô chính diệu (cung không có sao chính tinh)</span>}
                  {selected.stars.map((st, i) => (
                    <span key={i} className={`text-[11px] font-sans px-2 py-1 rounded-lg border ${st.kind === 'chinh_tinh' ? 'border-brand-gold/40 bg-brand-gold/10' : 'border-white/10 bg-brand-purple/10'} ${starColor(st)}`}>
                      {st.name}
                      {st.brightness && <span className="opacity-70"> · {BRIGHTNESS_NAMES[st.brightness]}</span>}
                      {st.transformation && <span className="text-brand-cyan"> · {TRANSFORMATION_NAMES[st.transformation]}</span>}
                    </span>
                  ))}
                </div>
                {/* Luận đoán */}
                <div className="space-y-3 text-sm text-on-background font-sans leading-relaxed">
                  {selected.interpretations.map((line, i) => (
                    <p key={i} className={i === selected.interpretations.length - 1 ? 'pt-2 border-t border-brand-gold/10 text-brand-gold/90 font-semibold' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
