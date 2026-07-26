import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CalendarDays, Clock3, User, AlertCircle, X, Eye, EyeOff, Info } from 'lucide-react';
import { computeTuViChart } from '../utils/tuvi';
import { TuViChartResult, Palace, StarInstance } from '../data/tuvi/types';
import { BRIGHTNESS_NAMES, TRANSFORMATION_NAMES, ELEMENT_COLOR, ELEMENT_VI } from '../data/tuvi/constants';
import { buildOverallReading } from '../data/tuvi/analysis';
import { ALL_STAR_MEANINGS as STAR_MEANINGS } from '../data/tuvi/starMeaningsAll';

// Canh giờ → giờ đại diện
const HOURS = [
  { label: 'Tý (23h–1h)', value: 0 }, { label: 'Sửu (1h–3h)', value: 2 },
  { label: 'Dần (3h–5h)', value: 4 }, { label: 'Mão (5h–7h)', value: 6 },
  { label: 'Thìn (7h–9h)', value: 8 }, { label: 'Tỵ (9h–11h)', value: 10 },
  { label: 'Ngọ (11h–13h)', value: 12 }, { label: 'Mùi (13h–15h)', value: 14 },
  { label: 'Thân (15h–17h)', value: 16 }, { label: 'Dậu (17h–19h)', value: 18 },
  { label: 'Tuất (19h–21h)', value: 20 }, { label: 'Hợi (21h–23h)', value: 22 },
];

/** Vị trí ô trong lưới 4×4 theo địa chi — bố cục địa bàn cố định của lá số tử vi */
const GRID_POS: Record<number, { r: number; c: number }> = {
  5: { r: 1, c: 1 }, 6: { r: 1, c: 2 }, 7: { r: 1, c: 3 }, 8: { r: 1, c: 4 }, // Tỵ Ngọ Mùi Thân
  4: { r: 2, c: 1 }, 9: { r: 2, c: 4 },                                       // Thìn / Dậu
  3: { r: 3, c: 1 }, 10: { r: 3, c: 4 },                                      // Mão / Tuất
  2: { r: 4, c: 1 }, 1: { r: 4, c: 2 }, 0: { r: 4, c: 3 }, 11: { r: 4, c: 4 },// Dần Sửu Tý Hợi
};

const mod12 = (x: number) => ((x % 12) + 12) % 12;

type Relation = 'self' | 'trine' | 'opposite' | undefined;

/** Chính tinh tô theo ngũ hành (quy ước cổ); phụ tinh tô theo cát–hung để dễ quét mắt */
function starColor(st: StarInstance): string {
  if (st.kind === 'chinh_tinh') return `${st.element ? ELEMENT_COLOR[st.element] : 'text-brand-gold'} font-bold`;
  if (st.kind === 'dao_hoa') return 'text-pink-300/90';
  if (st.kind === 'phu_tinh') return st.nature === 'hung' ? 'text-red-400/90' : 'text-amber-200/90';
  // vòng sao lưu niên
  if (st.nature === 'hung') return 'text-red-300/50';
  if (st.nature === 'cat') return 'text-emerald-300/60';
  return 'text-slate-400/50';
}

function hoaBadge(t: NonNullable<StarInstance['transformation']>): string {
  return t === 'ky'
    ? 'bg-red-500/25 text-red-200 border-red-400/40'
    : 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40';
}

/** Render **in đậm** thành <strong> bằng JSX — không dùng innerHTML để tránh mọi rủi ro chèn mã */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <strong key={i} className="text-brand-gold/95">{part}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

function StarChip({ st, small }: { st: StarInstance; small?: boolean }) {
  return (
    <span className={`inline-flex items-baseline gap-0.5 leading-tight ${starColor(st)} ${small ? 'text-[7px] md:text-[8px]' : ''}`}>
      {st.name}
      {st.brightness && <span className="text-[7px] md:text-[8px] opacity-60">{st.brightness}</span>}
      {st.transformation && (
        <span className={`text-[6px] md:text-[7px] px-0.5 rounded border ${hoaBadge(st.transformation)}`}>
          {TRANSFORMATION_NAMES[st.transformation].replace('Hóa ', '')}
        </span>
      )}
    </span>
  );
}

function PalaceCell({
  palace, chart, relation, showRings, onClick,
}: {
  palace: Palace; chart: TuViChartResult; relation: Relation; showRings: boolean; onClick: () => void;
}) {
  const pos = GRID_POS[palace.branchIndex];
  const chinh = palace.stars.filter(s => s.kind === 'chinh_tinh');
  const phuCat = palace.stars.filter(s => (s.kind === 'phu_tinh' && s.nature === 'cat') || s.kind === 'dao_hoa');
  const phuSat = palace.stars.filter(s => s.kind === 'phu_tinh' && s.nature === 'hung');
  const truongSinh = palace.stars.find(s => s.kind === 'vong_truong_sinh');
  const rings = palace.stars.filter(s => s.kind === 'vong_thai_tue' || s.kind === 'vong_bac_si');
  const isCurrentMajor = chart.currentAge >= palace.majorPeriod.fromAge && chart.currentAge <= palace.majorPeriod.toAge;
  const isCurrentMinor = palace.minorAges.includes(chart.currentAge);

  const ringClass =
    relation === 'self' ? 'ring-2 ring-brand-gold z-20'
    : relation === 'opposite' ? 'ring-1 ring-red-400/60 z-10'
    : relation === 'trine' ? 'ring-1 ring-brand-cyan/60 z-10'
    : '';

  return (
    <button
      onClick={onClick}
      style={{ gridRow: pos.r, gridColumn: pos.c }}
      className={`relative text-left border border-brand-gold/15 hover:border-brand-gold/60 bg-brand-purple/5 hover:bg-brand-gold/[0.06] transition-colors p-1.5 md:p-2 pt-4 overflow-hidden flex flex-col cursor-pointer ${ringClass}`}
    >
      {/* Dải Tuần / Triệt chạy dọc mép trên — cổ lệ vẽ kẹp giữa hai cung */}
      {palace.hasTuan && <span className="absolute top-0 left-0 w-full h-[3px] bg-violet-400/70" />}
      {palace.hasTriet && <span className={`absolute ${palace.hasTuan ? 'top-[3px]' : 'top-0'} left-0 w-full h-[3px] bg-red-500/70`} />}

      {/* Góc trên-trái: nhãn Tuần/Triệt · Góc trên-phải: đại hạn */}
      <div className="absolute top-1 left-1.5 flex gap-1">
        {palace.hasTuan && <span className="text-[6px] md:text-[7px] font-mono text-violet-300">TUẦN</span>}
        {palace.hasTriet && <span className="text-[6px] md:text-[7px] font-mono text-red-300">TRIỆT</span>}
      </div>
      <span className={`absolute top-1 right-1.5 text-[7px] md:text-[8px] font-mono ${isCurrentMajor ? 'text-brand-gold font-bold' : 'text-on-surface-variant/60'}`}>
        {palace.majorPeriod.fromAge}–{palace.majorPeriod.toAge}
      </span>

      {/* Thân sao */}
      <div className="flex-1 flex flex-col gap-0.5 mt-1.5 min-h-0">
        {/* Chính tinh */}
        {chinh.length > 0 ? (
          <div className="flex flex-col gap-0 text-[10px] md:text-[12.5px] font-serif">
            {chinh.map((st, i) => <StarChip key={i} st={st} />)}
          </div>
        ) : (
          <span className="text-[9px] md:text-[10px] text-on-surface-variant/40 italic font-sans">vô chính diệu</span>
        )}

        {/* Phụ tinh: cát bên trái, sát bên phải */}
        {(phuCat.length > 0 || phuSat.length > 0) && (
          <div className="grid grid-cols-2 gap-x-1 mt-0.5 text-[8px] md:text-[9px] font-sans leading-snug">
            <div className="flex flex-col">
              {phuCat.map((st, i) => <StarChip key={i} st={st} />)}
            </div>
            <div className="flex flex-col items-end text-right">
              {phuSat.map((st, i) => <StarChip key={i} st={st} />)}
            </div>
          </div>
        )}

        {/* Vòng Thái Tuế / Bác Sĩ (bật/tắt được) */}
        {showRings && rings.length > 0 && (
          <div className="flex flex-wrap gap-x-1 mt-0.5">
            {rings.map((st, i) => <StarChip key={i} st={st} small />)}
          </div>
        )}
      </div>

      {/* Mép dưới: tên cung · can chi · Trường Sinh · tiểu hạn · điểm */}
      <div className="mt-1 pt-1 border-t border-brand-gold/10 space-y-0.5">
        {truongSinh && (
          <div className="text-[7px] md:text-[8px] font-mono text-slate-400/70">{truongSinh.name}</div>
        )}
        <div className="flex items-end justify-between gap-1">
          <div className="leading-none min-w-0">
            <div className="font-serif text-[10px] md:text-xs text-white font-bold flex items-center gap-1 truncate">
              {palace.name}
              {palace.isBody && <span className="text-[6px] md:text-[7px] text-brand-cyan border border-brand-cyan/40 px-0.5 rounded shrink-0">THÂN</span>}
            </div>
            <div className="font-mono text-[7px] md:text-[8px] text-on-surface-variant/70">
              {palace.canName} {palace.branchName}
              {isCurrentMinor && <span className="text-brand-gold"> · TH {chart.currentAge}t</span>}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[8px] md:text-[9px] text-brand-gold leading-none">{'★'.repeat(palace.score.stars5)}</div>
            <div className="font-mono text-[7px] text-on-surface-variant/60">{palace.score.score100}đ</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function TuViChart() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [hour, setHour] = useState(12);
  const [gender, setGender] = useState<'nam' | 'nu'>('nam');
  const [personName, setPersonName] = useState('');
  const [chart, setChart] = useState<TuViChartResult | null>(null);
  const [selected, setSelected] = useState<Palace | null>(null);
  const [highlight, setHighlight] = useState<Palace | null>(null);
  const [showRings, setShowRings] = useState(true);
  const [error, setError] = useState('');

  const reading = useMemo(() => (chart ? buildOverallReading(chart) : null), [chart]);

  /** Quan hệ tam phương tứ chính với cung đang chọn */
  const relationOf = (p: Palace): Relation => {
    if (!highlight) return undefined;
    if (p.branchIndex === highlight.branchIndex) return 'self';
    if (p.branchIndex === mod12(highlight.branchIndex + 6)) return 'opposite';
    if ([mod12(highlight.branchIndex + 4), mod12(highlight.branchIndex + 8)].includes(p.branchIndex)) return 'trine';
    return undefined;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setSelected(null); setHighlight(null);
    const [y, m, d] = birthDate.split('-').map(Number);
    if (!y || !m || !d || y < 1800 || y > 2199) {
      setError('Ngày sinh chưa hợp lệ (hỗ trợ năm 1800–2199).');
      return;
    }
    try {
      setChart(computeTuViChart({ day: d, month: m, year: y, hour, gender, name: personName.trim() || undefined }));
    } catch (err) {
      console.error(err);
      setError('Không thể lập lá số với dữ liệu này.');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 md:px-8 py-6 space-y-8" id="tuvi-chart">
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">Tử Vi Đẩu Số</span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-gold font-bold">Lá Số Tử Vi</h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
          An sao đầy đủ 14 chính tinh, Lục Cát – Lục Sát, Tứ Hóa, vòng Trường Sinh – Thái Tuế – Bác Sĩ,
          Tuần Triệt, Đại hạn &amp; Tiểu hạn — kèm tổng luận theo lối "tiên tổng quan, hậu chi tiết".
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6 shadow-xl relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Họ tên
            </label>
            <input type="text" value={personName} onChange={e => setPersonName(e.target.value)} placeholder="Không bắt buộc" maxLength={40}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-600" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> Ngày sinh (DL)
            </label>
            <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} required
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors [color-scheme:dark]" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <Clock3 className="w-3.5 h-3.5" /> Giờ sinh
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

      <AnimatePresence>
        {chart && reading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
            {chart.warnings.map((w, i) => (
              <div key={i} className="max-w-3xl mx-auto p-2.5 rounded-lg bg-brand-gold/5 border border-brand-gold/15 text-[11px] text-brand-gold/80 font-sans flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /><span>{w}</span>
              </div>
            ))}

            {/* Thanh công cụ */}
            <div className="flex flex-wrap items-center justify-between gap-3 max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-2.5 text-[9px] md:text-[10px] font-mono text-on-surface-variant">
                <span className="text-brand-gold">★ điểm cung</span>
                <span>·</span>
                <span className="text-amber-200">cát tinh</span>
                <span className="text-red-400">sát tinh</span>
                <span className="text-pink-300">đào hoa</span>
                <span>·</span>
                <span className="text-violet-300">Tuần</span>
                <span className="text-red-300">Triệt</span>
              </div>
              <button onClick={() => setShowRings(v => !v)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-gold/25 text-[10px] font-mono text-brand-gold hover:bg-brand-gold/10 transition-colors cursor-pointer">
                {showRings ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {showRings ? 'Ẩn vòng sao lưu niên' : 'Hiện vòng sao lưu niên'}
              </button>
            </div>

            {/* Lá số */}
            <div className="overflow-x-auto no-scrollbar -mx-3 px-3">
              <div className="grid grid-cols-4 gap-[3px] min-w-[680px] md:min-w-0 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-brand-gold/25 bg-brand-void/50"
                style={{ gridTemplateRows: 'repeat(4, minmax(132px, auto))' }}>
                {chart.palaces.map(p => (
                  <PalaceCell key={p.index} palace={p} chart={chart} relation={relationOf(p)} showRings={showRings}
                    onClick={() => { setSelected(p); setHighlight(p); }} />
                ))}

                {/* Thiên bàn 2×2 */}
                <div style={{ gridRow: '2 / 4', gridColumn: '2 / 4' }}
                  className="border border-brand-gold/25 bg-gradient-to-br from-brand-purple/25 to-brand-void/70 p-3 md:p-4 flex flex-col justify-center gap-1.5 text-[9px] md:text-[11px] font-mono">
                  <div className="text-center mb-0.5">
                    <div className="font-serif text-brand-gold font-bold text-sm md:text-lg">
                      {chart.input.name || 'Thiên Bàn'}
                    </div>
                    <div className="text-brand-cyan text-[9px] md:text-[10px]">{chart.amDuongLabel} · {chart.isYang ? 'hạn thuận' : 'hạn nghịch'}</div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-0.5 text-on-background">
                    <div><span className="text-on-surface-variant">DL:</span> {chart.input.day}/{chart.input.month}/{chart.input.year} · giờ {chart.hourBranchName}</div>
                    <div><span className="text-on-surface-variant">ÂL:</span> {chart.lunar.day}/{chart.lunar.month}{chart.lunar.leap ? ' (nhuận)' : ''}/{chart.lunar.year}</div>
                    <div className="text-on-surface-variant/80">{chart.yearCanChi} · {chart.monthCanChi} · {chart.dayCanChi} · {chart.hourCanChi}</div>
                  </div>
                  <div className="border-t border-brand-gold/15 pt-1.5 grid grid-cols-1 gap-y-0.5">
                    <div><span className="text-on-surface-variant">Bản mệnh:</span> <span className="text-brand-gold">{chart.banMenh.name}</span> ({ELEMENT_VI[chart.banMenh.element]})</div>
                    <div><span className="text-on-surface-variant">Cục:</span> <span className="text-brand-gold">{chart.cuc.name}</span></div>
                    <div className="text-[8px] md:text-[9.5px] text-brand-cyan/90">{chart.menhCuc.label}</div>
                    <div><span className="text-on-surface-variant">Mệnh chủ:</span> {chart.menhChu} · <span className="text-on-surface-variant">Thân chủ:</span> {chart.thanChu}</div>
                    <div className="text-[8px] md:text-[9.5px] text-on-surface-variant/70">
                      Âm dương {chart.thuanLy ? 'thuận lý' : 'nghịch lý'} · {chart.currentAge} tuổi âm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center font-mono text-[10px] text-on-surface-variant/60 flex items-center justify-center gap-1.5">
              <Info className="w-3 h-3" />
              Chạm một cung để xem luận đoán chi tiết &amp; sáng tam phương tứ chính
              {highlight && (
                <button onClick={() => setHighlight(null)} className="ml-1 underline hover:text-brand-gold cursor-pointer">bỏ chọn</button>
              )}
            </p>

            {/* ── TỔNG LUẬN ── */}
            <div className="max-w-3xl mx-auto space-y-4 pt-4">
              <div className="text-center space-y-1.5">
                <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">Tổng Luận Lá Số</span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-gold font-bold">{reading.headline}</h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant">{reading.subhead}</p>
              </div>

              {reading.sections.map(sec => (
                <div key={sec.key} className="glass-card rounded-2xl border border-brand-gold/15 p-5 md:p-6 space-y-3 shadow-lg">
                  <h4 className="font-serif text-lg md:text-xl text-brand-gold font-semibold flex items-center gap-2">
                    <span className="text-xl leading-none">{sec.icon}</span>{sec.title}
                  </h4>
                  {sec.tags && sec.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {sec.tags.map((t, i) => (
                        <span key={i} className={`text-[11px] font-sans px-2.5 py-1 rounded-full border ${
                          t.type === 'hung' ? 'border-red-400/30 bg-red-500/10 text-red-300'
                          : t.type === 'cat' ? 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold'
                          : 'border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan'
                        }`}>{t.label}</span>
                      ))}
                    </div>
                  )}
                  <div className="space-y-2.5 text-sm text-on-background font-sans leading-relaxed">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i} className="whitespace-pre-line"><RichText text={p} /></p>
                    ))}
                  </div>

                  {/* Chi tiết cách cục ngay dưới mục Cách Cục */}
                  {sec.key === 'cachcuc' && reading.cachCuc.length > 0 && (
                    <div className="space-y-3 pt-1">
                      {reading.cachCuc.map(cc => (
                        <div key={cc.id} className={`rounded-xl border p-4 space-y-1.5 ${
                          cc.type === 'cat' ? 'border-brand-gold/25 bg-brand-gold/[0.04]' : 'border-red-400/25 bg-red-500/[0.04]'
                        }`}>
                          <div className="flex items-baseline justify-between gap-2 flex-wrap">
                            <h5 className={`font-serif text-base font-bold ${cc.type === 'cat' ? 'text-brand-gold' : 'text-red-300'}`}>
                              {cc.type === 'cat' ? '⚜️' : '⚠️'} {cc.name}
                            </h5>
                            <span className="font-mono text-[10px] text-on-surface-variant">hiện ở {cc.where}</span>
                          </div>
                          <p className="text-[11px] font-mono text-on-surface-variant/80">{cc.condition}</p>
                          <p className="text-sm text-on-background leading-relaxed">{cc.meaning}</p>
                          {cc.broken && (
                            <p className="text-sm text-amber-300/90 leading-relaxed border-l-2 border-amber-400/40 pl-2.5">
                              <strong>Điều kiện phá cách:</strong> {cc.broken}
                            </p>
                          )}
                          <p className="text-sm text-brand-cyan/90 italic">✦ {cc.advice}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <p className="text-center font-mono text-[10px] text-on-surface-variant/50 pt-1">
                Tàng thư luận đoán mang tính chiêm nghiệm &amp; tham khảo — lá số vẽ xu hướng, nét bút sau cùng là ở bạn.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel chi tiết cung */}
      <AnimatePresence>
        {selected && chart && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)} className="absolute inset-0 bg-brand-void/85 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, y: 15, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-brand-void border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(233,195,73,0.15)] z-10 flex flex-col max-h-[88vh]">
              <div className="p-5 border-b border-brand-gold/10 flex justify-between items-start bg-brand-purple/5">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-brand-cyan uppercase block">
                    Cung {selected.canName} {selected.branchName}
                    {selected.isBody ? ' · Thân cư' : ''} · Đại hạn {selected.majorPeriod.fromAge}–{selected.majorPeriod.toAge} tuổi
                  </span>
                  <h4 className="font-serif text-xl text-brand-gold font-bold flex items-center gap-2 flex-wrap">
                    Cung {selected.name}
                    <span className="text-sm text-brand-gold/80">{'★'.repeat(selected.score.stars5)}</span>
                    <span className="font-mono text-xs text-on-surface-variant">{selected.score.score100}/100 · {selected.score.label}</span>
                  </h4>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 text-on-surface-variant hover:text-white bg-brand-purple/40 rounded-full transition-colors outline-none shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4 custom-scrollbar">
                {/* Danh sách sao đầy đủ, có tooltip nghĩa */}
                <div className="flex flex-wrap gap-1.5">
                  {selected.stars.map((st, i) => {
                    const m = STAR_MEANINGS[st.id];
                    return (
                      <span key={i} title={m?.essence || ''}
                        className={`text-[11px] font-sans px-2 py-1 rounded-lg border ${
                          st.kind === 'chinh_tinh' ? 'border-brand-gold/40 bg-brand-gold/10' : 'border-white/10 bg-brand-purple/10'
                        } ${starColor(st)}`}>
                        {st.name}
                        {st.brightness && <span className="opacity-70"> · {BRIGHTNESS_NAMES[st.brightness]}</span>}
                        {st.transformation && <span className="text-brand-cyan"> · {TRANSFORMATION_NAMES[st.transformation]}</span>}
                      </span>
                    );
                  })}
                </div>

                {/* Luận đoán 5 tầng */}
                <div className="space-y-3 text-sm text-on-background font-sans leading-relaxed">
                  {selected.interpretations.map((line, i) => {
                    const isLast = i === selected.interpretations.length - 1;
                    return (
                      <p key={i} className={isLast ? 'pt-2 mt-1 border-t border-brand-gold/10 text-brand-gold/90 font-semibold' : ''}>
                        {line}
                      </p>
                    );
                  })}
                </div>

                {/* Tiểu hạn của cung */}
                {selected.minorAges.length > 0 && (
                  <div className="pt-2 border-t border-brand-gold/10">
                    <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">Tiểu hạn rơi vào cung này ở các tuổi</span>
                    <p className="font-mono text-[11px] text-brand-cyan/90 mt-1">
                      {selected.minorAges.filter(a => a <= 96).join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
