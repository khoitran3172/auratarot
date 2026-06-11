import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Orbit, MapPin, CalendarDays, Clock3, ChevronDown, AlertCircle } from 'lucide-react';
import { computeNatalChart, NatalChart as NatalChartData, ChartAspect } from '../utils/astrology';
import {
  planets, signs, houses, planetInSign, planetInHouse,
  ascendantReadings, aspectInfos, planetAspectEnergy, birthPlaces,
  northNodeInSign, northNodeInHouse, mcInSign,
  elementReadings, modalityReadings, retrogradeReadings,
  signRuler, chartRulerReadings, stelliumTemplate,
  PlanetId, SignId, HouseNumber, ElementName, ModalityName,
} from '../data/astrology';

const SIGN_ORDER: SignId[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

const TZ_OPTIONS = [
  { value: 7, label: 'GMT+7 (Việt Nam)' },
  { value: 8, label: 'GMT+8 (Singapore, Bắc Kinh)' },
  { value: 9, label: 'GMT+9 (Tokyo, Seoul)' },
  { value: 5.5, label: 'GMT+5:30 (Ấn Độ)' },
  { value: 4, label: 'GMT+4 (Dubai)' },
  { value: 3, label: 'GMT+3 (Moscow)' },
  { value: 1, label: 'GMT+1 (Paris, Berlin)' },
  { value: 0, label: 'GMT+0 (London)' },
  { value: -5, label: 'GMT-5 (New York)' },
  { value: -8, label: 'GMT-8 (Los Angeles)' },
  { value: 10, label: 'GMT+10 (Sydney)' },
];

const formatDegree = (deg: number): string => {
  const d = Math.floor(deg);
  const m = Math.round((deg - d) * 60);
  return `${d}°${String(m).padStart(2, '0')}'`;
};

// Compose an aspect interpretation from static building blocks
const aspectInterpretation = (a: ChartAspect): string => {
  const info = aspectInfos[a.type];
  const ea = planetAspectEnergy[a.planetA];
  const eb = planetAspectEnergy[a.planetB];
  let bridge: string;
  if (info.nature === 'hài hòa') {
    bridge = `Trong bản đồ sao của bạn, góc chiếu này mở ra dòng chảy thuận lợi giữa ${ea} và ${eb} — hai nguồn năng lượng nâng đỡ nhau một cách tự nhiên.`;
  } else if (info.nature === 'thách thức') {
    bridge = `Trong bản đồ sao của bạn, góc chiếu này tạo nên sức căng giữa ${ea} và ${eb} — một bài học đòi hỏi bạn chủ động dung hòa hai nguồn năng lượng này.`;
  } else {
    bridge = `Trong bản đồ sao của bạn, góc chiếu này hợp nhất ${ea} cùng ${eb} thành một khối năng lượng đậm đặc, in dấu rõ rệt lên cá tính của bạn.`;
  }
  return `${info.meaning} ${bridge}`;
};

// SVG chart wheel
function ChartWheel({ chart }: { chart: NatalChartData }) {
  const size = 360;
  const c = size / 2;
  const rOuter = 172;
  const rSignInner = 140;
  const rPlanet = 112;
  const rAspect = 86;

  // ASC fixed at the left (180° screen). Without birth time, 0° Aries sits at the left.
  const rotationBase = chart.ascendant ? chart.ascendant.longitude : 0;
  const toXY = (lon: number, r: number): [number, number] => {
    const theta = ((180 + lon - rotationBase) * Math.PI) / 180;
    return [c + r * Math.cos(theta), c - r * Math.sin(theta)];
  };

  const aspectColor = (type: ChartAspect['type']): string => {
    const nature = aspectInfos[type].nature;
    if (nature === 'hài hòa') return 'rgba(94, 234, 212, 0.55)';
    if (nature === 'thách thức') return 'rgba(248, 113, 113, 0.55)';
    return 'rgba(233, 195, 73, 0.55)';
  };

  // Spread planets that share nearly the same longitude so glyphs don't overlap
  const sorted = [...chart.positions].sort((a, b) => a.longitude - b.longitude);
  const displayLon = new Map<PlanetId, number>();
  let prev = -999;
  for (const p of sorted) {
    let lon = p.longitude;
    if (lon - prev < 7) lon = prev + 7;
    displayLon.set(p.planet, lon);
    prev = lon;
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[420px] mx-auto select-none">
      {/* Rings */}
      <circle cx={c} cy={c} r={rOuter} fill="rgba(26,16,55,0.45)" stroke="rgba(233,195,73,0.4)" strokeWidth="1" />
      <circle cx={c} cy={c} r={rSignInner} fill="none" stroke="rgba(233,195,73,0.25)" strokeWidth="1" />
      <circle cx={c} cy={c} r={rAspect} fill="rgba(9,9,29,0.6)" stroke="rgba(233,195,73,0.15)" strokeWidth="1" />

      {/* Sign sectors & glyphs */}
      {SIGN_ORDER.map((signId, i) => {
        const startLon = i * 30;
        const [x1, y1] = toXY(startLon, rSignInner);
        const [x2, y2] = toXY(startLon, rOuter);
        const [gx, gy] = toXY(startLon + 15, (rSignInner + rOuter) / 2);
        return (
          <g key={signId}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(233,195,73,0.25)" strokeWidth="1" />
            <text x={gx} y={gy} textAnchor="middle" dominantBaseline="central" fontSize="15" fill="#c5a059">
              {signs[signId].glyph}
            </text>
          </g>
        );
      })}

      {/* House numbers (whole-sign: houses follow sign sectors from the ASC sign) */}
      {chart.ascendant && Array.from({ length: 12 }).map((_, i) => {
        const ascSignStart = Math.floor(chart.ascendant!.longitude / 30) * 30;
        const [hx, hy] = toXY(ascSignStart + i * 30 + 15, rAspect + 16);
        return (
          <text key={i} x={hx} y={hy} textAnchor="middle" dominantBaseline="central" fontSize="8.5" fill="rgba(255,255,255,0.4)" fontFamily="monospace">
            {i + 1}
          </text>
        );
      })}

      {/* Aspect lines */}
      {chart.aspects.map((a, idx) => {
        const pa = chart.positions.find(p => p.planet === a.planetA)!;
        const pb = chart.positions.find(p => p.planet === a.planetB)!;
        const [x1, y1] = toXY(pa.longitude, rAspect);
        const [x2, y2] = toXY(pb.longitude, rAspect);
        return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke={aspectColor(a.type)} strokeWidth="1" />;
      })}

      {/* Planets */}
      {chart.positions.map((p) => {
        const lonD = displayLon.get(p.planet)!;
        const [dx, dy] = toXY(p.longitude, rAspect);
        const [px, py] = toXY(lonD, rPlanet);
        const [tx, ty] = toXY(lonD, rPlanet + 14);
        return (
          <g key={p.planet}>
            <circle cx={dx} cy={dy} r="2" fill="#e9c349" />
            <text x={px} y={py} textAnchor="middle" dominantBaseline="central" fontSize="14" fill="#fff">
              {planets[p.planet].glyph}
            </text>
            <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" fontSize="7" fill="rgba(233,195,73,0.8)" fontFamily="monospace">
              {Math.floor(p.degreeInSign)}°
            </text>
          </g>
        );
      })}

      {/* North Node */}
      {(() => {
        const [nx, ny] = toXY(chart.northNode.longitude, rPlanet);
        return (
          <text x={nx} y={ny} textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#a78bfa">☊</text>
        );
      })()}

      {/* Ascendant marker */}
      {chart.ascendant && (() => {
        const [x1, y1] = toXY(chart.ascendant.longitude, rAspect);
        const [x2, y2] = toXY(chart.ascendant.longitude, rOuter);
        const [lx, ly] = toXY(chart.ascendant.longitude, rOuter + 12);
        return (
          <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5eead4" strokeWidth="1.5" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#5eead4" fontFamily="monospace">ASC</text>
          </g>
        );
      })()}

      {/* Midheaven marker */}
      {chart.midheaven && (() => {
        const [x1, y1] = toXY(chart.midheaven.longitude, rAspect);
        const [x2, y2] = toXY(chart.midheaven.longitude, rOuter);
        const [lx, ly] = toXY(chart.midheaven.longitude, rOuter + 12);
        return (
          <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e9c349" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#e9c349" fontFamily="monospace">MC</text>
          </g>
        );
      })()}
    </svg>
  );
}

// Horizontal distribution bar used by the element/modality balance blocks
function BalanceBar({ label, count, total, accent }: { label: string; count: number; total: number; accent: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] text-on-surface-variant w-20 shrink-0 uppercase tracking-wider">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
        <div className={`h-full rounded-full ${accent}`} style={{ width: `${(count / total) * 100}%` }} />
      </div>
      <span className="font-mono text-[10px] text-on-background w-6 text-right">{count}</span>
    </div>
  );
}

// Collapsible interpretation card
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

export default function NatalChart() {
  const [birthDate, setBirthDate] = useState('2000-01-01');
  const [birthTime, setBirthTime] = useState('12:00');
  const [timeKnown, setTimeKnown] = useState(true);
  const [placeName, setPlaceName] = useState(birthPlaces[0].name);
  const [tzOffset, setTzOffset] = useState(7);
  const [chart, setChart] = useState<NatalChartData | null>(null);
  const [error, setError] = useState('');

  const place = useMemo(() => birthPlaces.find(p => p.name === placeName) || birthPlaces[0], [placeName]);

  // Deep chart analysis: element/modality balance, stelliums, chart ruler, retrogrades
  const analysis = useMemo(() => {
    if (!chart) return null;

    const elementCounts: Record<ElementName, number> = { 'Lửa': 0, 'Đất': 0, 'Khí': 0, 'Nước': 0 };
    const modalityCounts: Record<ModalityName, number> = { 'Tiên phong': 0, 'Kiên định': 0, 'Linh hoạt': 0 };
    const bySign = new Map<SignId, PlanetId[]>();
    for (const p of chart.positions) {
      elementCounts[signs[p.sign].element]++;
      modalityCounts[signs[p.sign].modality]++;
      bySign.set(p.sign, [...(bySign.get(p.sign) || []), p.planet]);
    }

    const maxElement = Math.max(...Object.values(elementCounts));
    const dominantElements = (Object.keys(elementCounts) as ElementName[]).filter(e => elementCounts[e] === maxElement);
    const lackingElements = (Object.keys(elementCounts) as ElementName[]).filter(e => elementCounts[e] === 0);
    const maxModality = Math.max(...Object.values(modalityCounts));
    const dominantModalities = (Object.keys(modalityCounts) as ModalityName[]).filter(m => modalityCounts[m] === maxModality);

    const stelliums = [...bySign.entries()].filter(([, ps]) => ps.length >= 3);

    const rulerId = chart.ascendant ? signRuler[chart.ascendant.sign] : null;
    const rulerPos = rulerId ? chart.positions.find(p => p.planet === rulerId)! : null;

    const retros = chart.positions.filter(p => p.retrograde);

    return { elementCounts, modalityCounts, dominantElements, lackingElements, dominantModalities, maxElement, maxModality, stelliums, rulerId, rulerPos, retros };
  }, [chart]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const [y, m, d] = birthDate.split('-').map(Number);
    const [hh, mm] = (birthTime || '12:00').split(':').map(Number);
    if (!y || !m || !d || y < 1800 || y > 2100) {
      setError('Ngày sinh chưa hợp lệ. Hãy kiểm tra lại.');
      return;
    }
    try {
      const result = computeNatalChart(
        { year: y, month: m, day: d, hour: hh || 0, minute: mm || 0 },
        tzOffset,
        { lat: place.lat, lon: place.lon },
        timeKnown
      );
      setChart(result);
    } catch (err) {
      console.error(err);
      setError('Không thể tính toán bản đồ sao với dữ liệu này.');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-10" id="natal-chart">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
          Tinh Bàn Khai Sinh
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-gold font-bold">
          Bản Đồ Sao Cung Hoàng Đạo
        </h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
          Khoảnh khắc bạn chào đời, cả bầu trời dừng lại thành một tấm bản đồ. Nhập thông tin để vẽ lại
          vị trí 10 thiên thể và lắng nghe luận giải từ tàng thư chiêm tinh.
        </p>
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6 shadow-xl relative overflow-hidden max-w-3xl mx-auto">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <Clock3 className="w-3.5 h-3.5" /> Giờ sinh
            </label>
            <input
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              disabled={!timeKnown}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors disabled:opacity-40 [color-scheme:dark]"
            />
            <label className="flex items-center gap-2 text-[11px] text-on-surface-variant font-sans cursor-pointer">
              <input
                type="checkbox"
                checked={!timeKnown}
                onChange={(e) => setTimeKnown(!e.target.checked)}
                className="accent-[#c5a059]"
              />
              Tôi không rõ giờ sinh (sẽ bỏ qua Cung Mọc &amp; 12 Nhà)
            </label>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Nơi sinh
            </label>
            <select
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors"
            >
              {birthPlaces.map(p => (
                <option key={p.name} value={p.name} className="bg-brand-void">{p.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold flex items-center gap-1.5">
              <Orbit className="w-3.5 h-3.5" /> Múi giờ nơi sinh
            </label>
            <select
              value={tzOffset}
              onChange={(e) => setTzOffset(Number(e.target.value))}
              className="w-full px-4 py-3 bg-brand-void/60 border border-white/10 rounded-xl font-sans text-sm text-gray-200 outline-none focus:border-brand-gold/50 transition-colors"
            >
              {TZ_OPTIONS.map(tz => (
                <option key={tz.value} value={tz.value} className="bg-brand-void">{tz.label}</option>
              ))}
            </select>
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
          Vẽ Bản Đồ Sao &amp; Luận Giải
        </button>
      </form>

      {/* Result */}
      <AnimatePresence>
        {chart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Wheel + positions table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15">
              <ChartWheel chart={chart} />

              <div className="space-y-1.5">
                <h3 className="font-mono text-xs text-brand-gold tracking-widest uppercase font-bold mb-3">
                  Vị trí thiên thể lúc chào đời
                </h3>
                {chart.ascendant && (
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/15 text-sm">
                    <span className="font-sans text-brand-cyan font-semibold">⬆ Cung Mọc (ASC)</span>
                    <span className="font-mono text-xs text-on-background">
                      {signs[chart.ascendant.sign].glyph} {signs[chart.ascendant.sign].name} {formatDegree(chart.ascendant.degreeInSign)}
                    </span>
                  </div>
                )}
                {chart.midheaven && (
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-gold/5 border border-brand-gold/20 text-sm">
                    <span className="font-sans text-brand-gold font-semibold">★ Thiên Đỉnh (MC)</span>
                    <span className="font-mono text-xs text-on-background">
                      {signs[chart.midheaven.sign].glyph} {signs[chart.midheaven.sign].name} {formatDegree(chart.midheaven.degreeInSign)}
                    </span>
                  </div>
                )}
                {chart.positions.map(p => (
                  <div key={p.planet} className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-purple/5 border border-brand-gold/10 text-sm">
                    <span className="font-sans text-on-background">
                      <span className="text-brand-gold mr-2">{planets[p.planet].glyph}</span>
                      {planets[p.planet].name}
                      {p.retrograde && <span className="ml-2 font-mono text-[10px] text-red-400/90">℞ nghịch hành</span>}
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant">
                      {signs[p.sign].glyph} {signs[p.sign].name} {formatDegree(p.degreeInSign)}
                      {p.house ? ` · Nhà ${p.house}` : ''}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-brand-violet/5 border border-purple-400/20 text-sm">
                  <span className="font-sans text-purple-300 font-semibold">☊ Bắc Giao Điểm</span>
                  <span className="font-mono text-xs text-on-background">
                    {signs[chart.northNode.sign].glyph} {signs[chart.northNode.sign].name} {formatDegree(chart.northNode.degreeInSign)}
                    {chart.northNode.house ? ` · Nhà ${chart.northNode.house}` : ''}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-on-surface-variant/60 pt-2 leading-relaxed">
                  {chart.ascendant
                    ? 'Hệ nhà: Whole Sign (Nguyên Cung) — mỗi nhà trùng một cung hoàng đạo tính từ Cung Mọc.'
                    : 'Không có giờ sinh nên Cung Mọc và 12 Nhà không được tính. Vị trí hành tinh dựa trên 12h trưa.'}
                </p>
              </div>
            </div>

            {/* Deep chart overview */}
            {analysis && (
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-7">
                <h3 className="font-serif text-2xl text-brand-gold font-bold text-center">
                  Tổng Quan Tinh Bàn
                </h3>

                {/* Big three */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  {[
                    { label: 'Mặt Trời — Bản ngã', sign: chart.positions.find(p => p.planet === 'sun')!.sign },
                    { label: 'Mặt Trăng — Nội tâm', sign: chart.positions.find(p => p.planet === 'moon')!.sign },
                    chart.ascendant ? { label: 'Cung Mọc — Diện mạo', sign: chart.ascendant.sign } : null,
                  ].filter(Boolean).map((item: any) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-brand-purple/10 border border-brand-gold/15 space-y-1">
                      <span className="font-mono text-[9px] text-on-surface-variant tracking-widest uppercase block">{item.label}</span>
                      <span className="font-serif text-lg text-brand-gold font-bold block">
                        {signs[item.sign as SignId].glyph} {signs[item.sign as SignId].name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Element & modality balance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-brand-gold tracking-widest uppercase font-bold">Cân bằng Nguyên Tố</h4>
                    <BalanceBar label="🔥 Lửa" count={analysis.elementCounts['Lửa']} total={10} accent="bg-red-400/80" />
                    <BalanceBar label="🌍 Đất" count={analysis.elementCounts['Đất']} total={10} accent="bg-amber-600/80" />
                    <BalanceBar label="💨 Khí" count={analysis.elementCounts['Khí']} total={10} accent="bg-cyan-400/80" />
                    <BalanceBar label="🌊 Nước" count={analysis.elementCounts['Nước']} total={10} accent="bg-blue-400/80" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-brand-gold tracking-widest uppercase font-bold">Cân bằng Thể Thức</h4>
                    <BalanceBar label="Tiên phong" count={analysis.modalityCounts['Tiên phong']} total={10} accent="bg-brand-gold/80" />
                    <BalanceBar label="Kiên định" count={analysis.modalityCounts['Kiên định']} total={10} accent="bg-emerald-400/80" />
                    <BalanceBar label="Linh hoạt" count={analysis.modalityCounts['Linh hoạt']} total={10} accent="bg-violet-400/80" />
                  </div>
                </div>

                <div className="space-y-3 text-sm font-sans leading-relaxed text-on-background">
                  {analysis.dominantElements.map(e => (
                    <p key={e}><span className="text-brand-gold font-semibold">Nguyên tố {e} chiếm ưu thế ({analysis.elementCounts[e]}/10):</span> {elementReadings[e].dominant}</p>
                  ))}
                  {analysis.lackingElements.map(e => (
                    <p key={e}><span className="text-red-400/90 font-semibold">Thiếu vắng nguyên tố {e}:</span> {elementReadings[e].lacking}</p>
                  ))}
                  {analysis.dominantModalities.map(m => (
                    <p key={m}><span className="text-brand-cyan font-semibold">Thể thức {m} dẫn dắt ({analysis.modalityCounts[m]}/10):</span> {modalityReadings[m].dominant}</p>
                  ))}
                </div>

                {/* Chart ruler */}
                {analysis.rulerId && analysis.rulerPos && (
                  <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 text-sm font-sans leading-relaxed space-y-1">
                    <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-bold block">
                      Chủ Tinh Bản Đồ: {planets[analysis.rulerId].glyph} {planets[analysis.rulerId].name}
                    </span>
                    <p className="text-on-background">
                      Cung Mọc {signs[chart.ascendant!.sign].name} được dẫn dắt bởi {planets[analysis.rulerId].name} — hiện tọa tại {signs[analysis.rulerPos.sign].name}{analysis.rulerPos.house ? `, Nhà ${analysis.rulerPos.house}` : ''}. {chartRulerReadings[analysis.rulerId]}
                    </p>
                  </div>
                )}

                {/* Stelliums */}
                {analysis.stelliums.map(([signId, planetIds]) => (
                  <div key={signId} className="p-4 rounded-2xl bg-brand-violet/5 border border-purple-400/20 text-sm font-sans leading-relaxed space-y-1">
                    <span className="font-mono text-[10px] text-purple-300 tracking-widest uppercase font-bold block">
                      ✨ Stellium tại {signs[signId].name} ({planetIds.map(p => planets[p].name).join(', ')})
                    </span>
                    <p className="text-on-background">{stelliumTemplate} Với bạn, vùng hội tụ ấy mang trọn màu sắc {signs[signId].name}: {signs[signId].traits}</p>
                  </div>
                ))}

                {/* Retrogrades */}
                {analysis.retros.length > 0 && (
                  <div className="space-y-2 text-sm font-sans leading-relaxed">
                    <h4 className="font-mono text-xs text-red-400/90 tracking-widest uppercase font-bold">℞ Hành tinh nghịch hành lúc chào đời ({analysis.retros.length})</h4>
                    {analysis.retros.map(p => (
                      <p key={p.planet} className="text-on-background">
                        <span className="text-brand-gold font-semibold">{planets[p.planet].glyph} {planets[p.planet].name} ℞:</span>{' '}
                        {retrogradeReadings[p.planet as keyof typeof retrogradeReadings]}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Interpretations */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-brand-gold font-bold text-center">
                Luận Giải Tinh Bàn
              </h3>

              {/* Ascendant */}
              {chart.ascendant && (
                <ReadingCard
                  heading={ascendantReadings[chart.ascendant.sign].title}
                  sub="DIỆN MẠO & CÁCH BẠN BƯỚC VÀO THẾ GIỚI"
                >
                  <p>{ascendantReadings[chart.ascendant.sign].description}</p>
                  <p className="text-brand-cyan/90 italic">✦ {ascendantReadings[chart.ascendant.sign].advice}</p>
                </ReadingCard>
              )}

              {/* Midheaven */}
              {chart.midheaven && (
                <ReadingCard
                  heading={`★ ${mcInSign[chart.midheaven.sign].title}`}
                  sub="THIÊN ĐỈNH — SỰ NGHIỆP & DI SẢN CÔNG KHAI"
                >
                  <p>{mcInSign[chart.midheaven.sign].description}</p>
                  <p className="text-brand-cyan/90 italic">✦ {mcInSign[chart.midheaven.sign].advice}</p>
                </ReadingCard>
              )}

              {/* North Node */}
              <ReadingCard
                heading={`☊ ${northNodeInSign[chart.northNode.sign].title}`}
                sub="BẮC GIAO ĐIỂM — HƯỚNG TIẾN HÓA CỦA LINH HỒN"
              >
                <p>{northNodeInSign[chart.northNode.sign].description}</p>
                {chart.northNode.house && (
                  <div className="border-t border-brand-gold/10 pt-3 space-y-2">
                    <p className="font-mono text-[10px] text-brand-cyan tracking-wider uppercase">
                      {northNodeInHouse[chart.northNode.house].title}
                    </p>
                    <p>{northNodeInHouse[chart.northNode.house].description}</p>
                  </div>
                )}
                <p className="text-brand-cyan/90 italic">
                  ✦ {northNodeInSign[chart.northNode.sign].advice}
                  {chart.northNode.house ? ` ${northNodeInHouse[chart.northNode.house].advice}` : ''}
                </p>
              </ReadingCard>

              {/* Planets */}
              {chart.positions.map(p => {
                const inSign = planetInSign[p.planet][p.sign];
                const inHouse = p.house ? planetInHouse[p.planet][p.house as HouseNumber] : null;
                return (
                  <ReadingCard
                    key={p.planet}
                    heading={`${planets[p.planet].glyph} ${inSign.title}`}
                    sub={`${planets[p.planet].themes.toUpperCase()}${p.house ? ` · NHÀ ${p.house} — ${houses[p.house as HouseNumber].name.toUpperCase()}` : ''}`}
                  >
                    <p>{inSign.description}</p>
                    <p><span className="text-brand-gold font-semibold">Điểm sáng:</span> {inSign.strengths}</p>
                    <p><span className="text-red-400/90 font-semibold">Vùng tối:</span> {inSign.challenges}</p>
                    {p.retrograde && (
                      <p><span className="text-red-400/90 font-semibold">℞ Nghịch hành:</span> {retrogradeReadings[p.planet as keyof typeof retrogradeReadings]}</p>
                    )}
                    {inHouse && (
                      <div className="border-t border-brand-gold/10 pt-3 space-y-2">
                        <p className="font-mono text-[10px] text-brand-cyan tracking-wider uppercase">{inHouse.title}</p>
                        <p>{inHouse.description}</p>
                      </div>
                    )}
                    <p className="text-brand-cyan/90 italic">✦ {inSign.advice}{inHouse ? ` ${inHouse.advice}` : ''}</p>
                  </ReadingCard>
                );
              })}

              {/* Aspects */}
              {chart.aspects.length > 0 && (
                <ReadingCard
                  heading={`Các Góc Chiếu Định Mệnh (${chart.aspects.length})`}
                  sub="ĐỐI THOẠI GIỮA CÁC THIÊN THỂ"
                >
                  <div className="space-y-4">
                    {chart.aspects.map((a, i) => (
                      <div key={i} className="space-y-1 border-b border-white/5 pb-3 last:border-0">
                        <p className="font-semibold text-on-background">
                          <span className="text-brand-gold">{planets[a.planetA].glyph} {planets[a.planetA].name}</span>
                          <span className="text-on-surface-variant font-mono text-xs mx-2">
                            {aspectInfos[a.type].name} (lệch {a.orb.toFixed(1)}°)
                          </span>
                          <span className="text-brand-gold">{planets[a.planetB].glyph} {planets[a.planetB].name}</span>
                        </p>
                        <p className="text-on-surface-variant">{aspectInterpretation(a)}</p>
                      </div>
                    ))}
                  </div>
                </ReadingCard>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
