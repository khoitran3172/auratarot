import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Hash, User, CalendarDays, ChevronDown, AlertCircle } from 'lucide-react';
import { computeNumerology, NumerologyResult } from '../utils/numerology';
import { getLocalDateString } from '../utils/date';
import {
  lifePathReadings, expressionReadings, soulUrgeReadings, personalityReadings,
  birthdayReadings, maturityReadings,
  personalYearReadings, pinnacleReadings, challengeReadings, karmicDebtReadings,
  personalMonthIntro, personalDayIntro,
  missingNumberReadings, repeatedNumberReadings, arrowReadings,
  NumberReading, NumerologyNumber,
} from '../data/numerology';

const CORE_KINDS: { key: keyof Pick<NumerologyResult, 'lifePath' | 'expression' | 'soulUrge' | 'personality' | 'birthday' | 'maturity'>; label: string; sub: string; readings: Record<NumerologyNumber, NumberReading> }[] = [
  { key: 'lifePath', label: 'Đường Đời', sub: 'Life Path', readings: lifePathReadings },
  { key: 'expression', label: 'Sứ Mệnh', sub: 'Expression', readings: expressionReadings },
  { key: 'soulUrge', label: 'Linh Hồn', sub: 'Soul Urge', readings: soulUrgeReadings },
  { key: 'personality', label: 'Nhân Cách', sub: 'Personality', readings: personalityReadings },
  { key: 'birthday', label: 'Ngày Sinh', sub: 'Birthday', readings: birthdayReadings },
  { key: 'maturity', label: 'Trưởng Thành', sub: 'Maturity', readings: maturityReadings },
];

// Lo Shu square layout (rows top→bottom)
const LOSHU_LAYOUT = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];

const isMaster = (n: number) => n === 11 || n === 22 || n === 33;

// Collapsible interpretation card (same pattern as NatalChart)
function ReadingCard({ heading, sub, children }: { heading: string; sub?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl border border-brand-gold/15 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left cursor-pointer hover:bg-brand-gold/5 transition-colors"
      >
        <div>
          <h4 className="font-serif text-sm md:text-base text-brand-gold font-bold">{heading}</h4>
          {sub && <span className="font-mono text-[10px] text-on-surface-variant tracking-wider">{sub}</span>}
        </div>
        <ChevronDown className={`w-4 h-4 text-brand-gold shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 md:px-5 pb-5 space-y-3 text-sm text-on-background font-sans leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Numerology() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [result, setResult] = useState<NumerologyResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const [y, m, d] = birthDate.split('-').map(Number);
    if (!fullName.trim() || fullName.trim().length < 2) {
      setError('Hãy nhập họ tên khai sinh đầy đủ của bạn.');
      return;
    }
    if (!y || !m || !d || y < 1800 || y > 2100) {
      setError('Ngày sinh chưa hợp lệ.');
      return;
    }
    const [ty, tm, td] = getLocalDateString().split('-').map(Number);
    try {
      setResult(computeNumerology(fullName, { day: d, month: m, year: y }, { day: td, month: tm, year: ty }));
    } catch (err) {
      console.error(err);
      setError('Không thể tính toán với dữ liệu này.');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-10" id="numerology">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
          Mật Mã Những Con Số
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-gold font-bold">
          Thần Số Học
        </h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
          Theo Pythagoras, vạn vật đều rung động theo những con số. Họ tên và ngày sinh của bạn
          cất giữ một bộ mật mã — hãy để tàng thư giải mã từng lớp một.
        </p>
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6 shadow-xl relative overflow-hidden max-w-3xl mx-auto">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> Họ tên khai sinh
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="vd: Nguyễn Văn An (có dấu hay không đều được)"
              maxLength={100}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" /> Ngày sinh
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors [color-scheme:dark]"
            />
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-sans flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-mono text-xs tracking-[0.2em] font-semibold text-brand-gold hover:text-brand-cyan border border-brand-gold/20 hover:border-brand-cyan bg-brand-gold/5 hover:bg-brand-cyan/5 transition-all outline-none duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer uppercase"
        >
          <Sparkles className="w-4 h-4" />
          Giải Mã Thần Số
        </button>
      </form>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Core number cards */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-brand-gold font-bold text-center">Bộ Chỉ Số Cốt Lõi</h3>
              <p className="font-mono text-[10px] text-on-surface-variant text-center tracking-wider uppercase">
                Tên chuẩn hóa: {result.normalizedName}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CORE_KINDS.map(kind => {
                  const core = result[kind.key];
                  return (
                    <div key={kind.key} className={`glass-card rounded-2xl p-5 text-center space-y-1 border ${kind.key === 'lifePath' ? 'border-brand-gold/50 shadow-[0_0_25px_rgba(233,195,73,0.15)]' : 'border-brand-gold/15'}`}>
                      <span className="font-mono text-[9px] text-on-surface-variant tracking-widest uppercase block">
                        Số {kind.label}
                      </span>
                      <span className={`font-serif font-extrabold block leading-none py-1 ${isMaster(core.value) ? 'text-brand-cyan text-5xl drop-shadow-[0_0_12px_rgba(94,234,212,0.4)]' : 'text-brand-gold text-5xl drop-shadow-[0_0_12px_rgba(233,195,73,0.3)]'}`}>
                        {core.value}
                      </span>
                      <span className="font-mono text-[9px] text-on-surface-variant/70 block">{kind.sub}</span>
                      {isMaster(core.value) && (
                        <span className="inline-block font-mono text-[8px] text-brand-cyan border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5 rounded-full tracking-wider">SỐ MASTER</span>
                      )}
                      {core.karmicDebt && (
                        <span className="inline-block font-mono text-[8px] text-red-400 border border-red-400/30 bg-red-400/10 px-2 py-0.5 rounded-full tracking-wider">NỢ NGHIỆP {core.karmicDebt}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core readings */}
            <div className="space-y-4">
              {CORE_KINDS.map(kind => {
                const core = result[kind.key];
                const reading = kind.readings[core.value];
                if (!reading) return null;
                return (
                  <ReadingCard
                    key={kind.key}
                    heading={`${core.value} · ${reading.title}`}
                    sub={`SỐ ${kind.label.toUpperCase()} (${kind.sub.toUpperCase()})`}
                  >
                    <p>{reading.description}</p>
                    <p><span className="text-brand-gold font-semibold">Điểm sáng:</span> {reading.strengths}</p>
                    <p><span className="text-red-400/90 font-semibold">Vùng tối:</span> {reading.challenges}</p>
                    {core.karmicDebt && (
                      <div className="border-t border-red-400/15 pt-3 space-y-1">
                        <p className="font-mono text-[10px] text-red-400/90 tracking-wider uppercase">{karmicDebtReadings[core.karmicDebt].title}</p>
                        <p>{karmicDebtReadings[core.karmicDebt].description}</p>
                        <p className="text-red-300/80 italic">{karmicDebtReadings[core.karmicDebt].advice}</p>
                      </div>
                    )}
                    <p className="text-brand-cyan/90 italic">✦ {reading.advice}</p>
                  </ReadingCard>
                );
              })}
            </div>

            {/* Lo Shu grid */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6">
              <h3 className="font-serif text-2xl text-brand-gold font-bold text-center">Biểu Đồ Ngày Sinh (Lo Shu)</h3>

              <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto">
                {LOSHU_LAYOUT.flat().map(digit => {
                  const count = result.loShu.counts[digit];
                  return (
                    <div key={digit} className={`aspect-square rounded-xl border flex flex-col items-center justify-center ${count > 0 ? 'border-brand-gold/40 bg-brand-gold/5' : 'border-white/10 bg-brand-void/40'}`}>
                      {count > 0 ? (
                        <span className="font-serif text-xl md:text-2xl text-brand-gold font-bold tracking-wider">
                          {String(digit).repeat(Math.min(count, 4))}
                        </span>
                      ) : (
                        <span className="font-serif text-lg text-white/15">{digit}</span>
                      )}
                      <span className="font-mono text-[8px] text-on-surface-variant/50 mt-0.5">{count > 0 ? `×${count}` : 'thiếu'}</span>
                    </div>
                  );
                })}
              </div>

              {/* Arrows */}
              {(result.loShu.fullArrows.length > 0 || result.loShu.emptyArrows.length > 0) && (
                <div className="space-y-3 text-sm font-sans leading-relaxed">
                  {result.loShu.fullArrows.map(id => (
                    <p key={id}>
                      <span className="text-brand-gold font-semibold">➤ {arrowReadings[id].name} ({arrowReadings[id].digits.join('-')}):</span>{' '}
                      {arrowReadings[id].full}
                    </p>
                  ))}
                  {result.loShu.emptyArrows.map(id => (
                    <p key={id}>
                      <span className="text-red-400/90 font-semibold">➤ Khuyết {arrowReadings[id].name} ({arrowReadings[id].digits.join('-')}):</span>{' '}
                      {arrowReadings[id].empty}
                    </p>
                  ))}
                </div>
              )}

              {/* Missing & repeated numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.loShu.missing.length > 0 && (
                  <ReadingCard heading={`Những con số thiếu vắng (${result.loShu.missing.join(', ')})`} sub="BÀI HỌC CẦN BÙ ĐẮP">
                    {result.loShu.missing.map(d => (
                      <div key={d} className="space-y-1">
                        <p className="font-mono text-[10px] text-red-400/90 tracking-wider uppercase">{missingNumberReadings[d as 1].title}</p>
                        <p>{missingNumberReadings[d as 1].description} <span className="text-brand-cyan/90 italic">{missingNumberReadings[d as 1].advice}</span></p>
                      </div>
                    ))}
                  </ReadingCard>
                )}
                {result.loShu.repeated.length > 0 && (
                  <ReadingCard heading={`Những con số khuếch đại (${result.loShu.repeated.join(', ')})`} sub="NĂNG LƯỢNG DƯ DẢ">
                    {result.loShu.repeated.map(d => (
                      <div key={d} className="space-y-1">
                        <p className="font-mono text-[10px] text-brand-gold tracking-wider uppercase">{repeatedNumberReadings[d as 1].title} (×{result.loShu.counts[d]})</p>
                        <p>{repeatedNumberReadings[d as 1].description} <span className="text-brand-cyan/90 italic">{repeatedNumberReadings[d as 1].advice}</span></p>
                      </div>
                    ))}
                  </ReadingCard>
                )}
              </div>
            </div>

            {/* Cycles */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6">
              <h3 className="font-serif text-2xl text-brand-gold font-bold text-center">Chu Kỳ Thời Gian</h3>

              {/* Personal year/month/day */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto text-center">
                {[
                  { label: 'Năm cá nhân', value: result.personalYear },
                  { label: 'Tháng cá nhân', value: result.personalMonth },
                  { label: 'Ngày cá nhân', value: result.personalDay },
                ].map(item => (
                  <div key={item.label} className="p-4 rounded-2xl bg-brand-purple/10 border border-brand-gold/15">
                    <span className="font-mono text-[9px] text-on-surface-variant tracking-widest uppercase block">{item.label}</span>
                    <span className="font-serif text-4xl text-brand-gold font-extrabold block py-1">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-sm font-sans leading-relaxed space-y-3 text-on-background">
                <p>
                  <span className="text-brand-gold font-semibold">{personalYearReadings[result.personalYear as 1].title}:</span>{' '}
                  {personalYearReadings[result.personalYear as 1].description}{' '}
                  <span className="text-brand-cyan/90 italic">✦ {personalYearReadings[result.personalYear as 1].advice}</span>
                </p>
                <p className="text-on-surface-variant text-xs">
                  {personalMonthIntro} Tháng này của bạn mang rung động số <span className="text-brand-gold font-semibold">{result.personalMonth}</span> — {personalYearReadings[result.personalMonth as 1].title}.{' '}
                  {personalDayIntro} Hôm nay là ngày số <span className="text-brand-gold font-semibold">{result.personalDay}</span> — {personalYearReadings[result.personalDay as 1].title}.
                </p>
              </div>

              {/* Pinnacles & challenges timeline */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-brand-gold tracking-widest uppercase font-bold">4 Giai Đoạn Cuộc Đời — Đỉnh Cao &amp; Thách Thức</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {result.pinnacles.map((p, i) => {
                    const ch = result.challenges[i];
                    const pinnacle = pinnacleReadings[p.value as 1];
                    const challenge = challengeReadings[ch.value as 0];
                    return (
                      <div key={i} className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-gold/10 space-y-2">
                        <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase block">
                          Giai đoạn {i + 1} · {p.fromAge}{p.toAge ? `–${p.toAge}` : '+'} tuổi
                        </span>
                        <div className="text-sm font-sans space-y-1.5 leading-relaxed">
                          <p><span className="text-brand-gold font-semibold">Đỉnh cao {p.value}:</span> {pinnacle ? pinnacle.description : ''}</p>
                          <p className="text-on-surface-variant"><span className="text-red-400/90 font-semibold">Thách thức {ch.value}:</span> {challenge ? challenge.description : ''}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
