import {
  convertSolar2Lunar, solarToJd, hourToChiIndex, mod, CAN, CHI,
  yearCanChi, monthCanChi, dayCanChi, hourCanChi,
} from './lunar';
import {
  PALACE_NAMES, CHI_NAMES, CHINH_TINH, PHU_TINH, BRIGHTNESS_TABLE, STAR_POLARITY,
  BRIGHTNESS_MAGNITUDE, CAT_PHU_TINH, SAT_TINH, TU_HOA, LOC_TON_POS, KHOI_VIET_POS,
  HOA_LINH_START, DAO_HOA_POS, TRIET_POS, NAP_AM_ELEMENT, ELEMENT_TO_CUC, CUC_NAMES,
  tamHopGroup,
} from '../data/tuvi/constants';
import { buildInterpretations } from '../data/tuvi/interpretations';
import {
  Palace, StarInstance, TuViInput, TuViChartResult, Brightness, Transformation, ElementName,
} from '../data/tuvi/types';

// Chính tinh chòm Tử Vi (offset nghịch) và chòm Thiên Phủ (offset thuận)
const TUVI_GROUP: [string, number][] = [
  ['TuVi', 0], ['ThienCo', -1], ['ThaiDuong', -3], ['VuKhuc', -4], ['ThienDong', -5], ['LiemTrinh', -8],
];
const THIENPHU_GROUP: [string, number][] = [
  ['ThienPhu', 0], ['ThaiAm', 1], ['ThamLang', 2], ['CuMon', 3], ['ThienTuong', 4],
  ['ThienLuong', 5], ['ThatSat', 6], ['PhaQuan', 10],
];

// Sexagenary index (0..59) từ can & chi
function sexagenary(canIndex: number, chiIndex: number): number {
  for (let s = 0; s < 60; s++) {
    if (s % 10 === canIndex && s % 12 === chiIndex) return s;
  }
  return 0;
}

// Điểm đóng góp của một chính tinh theo độ sáng + cực tính
function starContribution(starId: string, brightness: Brightness): number {
  const N = STAR_POLARITY[starId] ?? 0;
  const m = BRIGHTNESS_MAGNITUDE[brightness];
  const baseMax = 4 + N;
  const baseMin = -5 + 2.75 * (N + 1);
  return baseMin + m * (baseMax - baseMin);
}

function scoreLabel(score100: number): string {
  if (score100 >= 80) return 'Rất tốt';
  if (score100 >= 60) return 'Tốt';
  if (score100 >= 45) return 'Trung bình';
  if (score100 >= 25) return 'Kém';
  return 'Xấu';
}

export function computeTuViChart(input: TuViInput): TuViChartResult {
  const warnings: string[] = [];
  if (input.year < 1800 || input.year > 2199) {
    warnings.push('Năm sinh ngoài khoảng 1800–2199, độ chính xác lịch âm có thể giảm.');
  }

  const lunar = convertSolar2Lunar(input.day, input.month, input.year);
  if (lunar.leap) {
    warnings.push('Bạn sinh vào tháng nhuận — lá số tính theo số tháng gốc (tháng ' + lunar.month + ').');
  }
  const jd = solarToJd(input.day, input.month, input.year);
  const hourChi = hourToChiIndex(input.hour);

  const yCC = yearCanChi(lunar.year);
  const mCC = monthCanChi(lunar.month, lunar.year);
  const dCC = dayCanChi(jd);
  const hCC = hourCanChi(input.hour, jd);

  // An Mệnh & Thân
  const menh = mod(lunar.month + 1 - hourChi, 12);
  const than = mod(lunar.month + 1 + hourChi, 12);

  // Cục (qua Ngũ Hổ Độn + nạp âm)
  const canDan = mod(yCC.canIndex * 2 + 2, 10);
  const canMenh = mod(canDan + mod(menh - 2, 12), 10);
  const s = sexagenary(canMenh, menh);
  const element: ElementName = NAP_AM_ELEMENT[Math.floor(s / 2)];
  const cucNumber = ELEMENT_TO_CUC[element];

  // An Tử Vi
  const b = Math.ceil(lunar.day / cucNumber);
  const a = b * cucNumber - lunar.day;
  const base = mod(2 + (b - 1), 12);
  const tuviPos = a === 0 ? base : (a % 2 === 0 ? mod(base + a, 12) : mod(base - a, 12));
  const phuPos = mod(4 - tuviPos, 12);

  // Map: chi index → danh sách sao
  const starsAt: Record<number, StarInstance[]> = {};
  for (let i = 0; i < 12; i++) starsAt[i] = [];
  const addStar = (pos: number, star: StarInstance) => { starsAt[pos].push(star); };

  // 14 chính tinh
  for (const [id, off] of TUVI_GROUP) {
    const pos = mod(tuviPos + off, 12);
    addStar(pos, { id, name: CHINH_TINH[id], kind: 'chinh_tinh', brightness: BRIGHTNESS_TABLE[id][pos] });
  }
  for (const [id, off] of THIENPHU_GROUP) {
    const pos = mod(phuPos + off, 12);
    addStar(pos, { id, name: CHINH_TINH[id], kind: 'chinh_tinh', brightness: BRIGHTNESS_TABLE[id][pos] });
  }

  const yc = yCC.canIndex;
  const yChi = yCC.chiIndex;
  const isYangYear = yc % 2 === 0;
  const isYang = (input.gender === 'nam' && isYangYear) || (input.gender === 'nu' && !isYangYear);

  // Lục Cát
  addStar(mod(4 + (lunar.month - 1), 12), { id: 'TaPhu', name: PHU_TINH.TaPhu, kind: 'phu_cat' });
  addStar(mod(10 - (lunar.month - 1), 12), { id: 'HuuBat', name: PHU_TINH.HuuBat, kind: 'phu_cat' });
  addStar(mod(10 - hourChi, 12), { id: 'VanXuong', name: PHU_TINH.VanXuong, kind: 'phu_cat' });
  addStar(mod(4 + hourChi, 12), { id: 'VanKhuc', name: PHU_TINH.VanKhuc, kind: 'phu_cat' });
  const [khoiPos, vietPos] = KHOI_VIET_POS[yc];
  addStar(khoiPos, { id: 'ThienKhoi', name: PHU_TINH.ThienKhoi, kind: 'phu_cat' });
  addStar(vietPos, { id: 'ThienViet', name: PHU_TINH.ThienViet, kind: 'phu_cat' });

  // Lộc Tồn + Kình + Đà
  const locTon = LOC_TON_POS[yc];
  addStar(locTon, { id: 'LocTon', name: PHU_TINH.LocTon, kind: 'phu_cat' });
  addStar(mod(locTon + 1, 12), { id: 'KinhDuong', name: PHU_TINH.KinhDuong, kind: 'phu_sat' });
  addStar(mod(locTon - 1, 12), { id: 'DaLa', name: PHU_TINH.DaLa, kind: 'phu_sat' });

  // Hỏa / Linh (đếm theo giờ, chiều theo âm/dương nam nữ)
  const [hoaStart, linhStart] = HOA_LINH_START[tamHopGroup(yChi)];
  addStar(mod(hoaStart + (isYang ? hourChi : -hourChi), 12), { id: 'HoaTinh', name: PHU_TINH.HoaTinh, kind: 'phu_sat' });
  addStar(mod(linhStart + (isYang ? -hourChi : hourChi), 12), { id: 'LinhTinh', name: PHU_TINH.LinhTinh, kind: 'phu_sat' });

  // Địa Không / Địa Kiếp (khởi Hợi=11 giờ Tý)
  addStar(mod(11 + hourChi, 12), { id: 'DiaKiep', name: PHU_TINH.DiaKiep, kind: 'phu_sat' });
  addStar(mod(11 - hourChi, 12), { id: 'DiaKhong', name: PHU_TINH.DiaKhong, kind: 'phu_sat' });

  // Đào hoa tinh
  addStar(DAO_HOA_POS[tamHopGroup(yChi)], { id: 'DaoHoa', name: PHU_TINH.DaoHoa, kind: 'dao_hoa' });
  const hongLoan = mod(3 - yChi, 12);
  addStar(hongLoan, { id: 'HongLoan', name: PHU_TINH.HongLoan, kind: 'dao_hoa' });
  addStar(mod(hongLoan + 6, 12), { id: 'ThienHy', name: PHU_TINH.ThienHy, kind: 'dao_hoa' });
  addStar(mod(1 + (lunar.month - 1), 12), { id: 'ThienDieu', name: PHU_TINH.ThienDieu, kind: 'dao_hoa' });

  // Tứ Hóa: gắn cờ hóa lên sao tương ứng (ưu tiên sao đã có trong lá số)
  const [locId, quyenId, khoaId, kyId] = TU_HOA[yc];
  const applyHoa = (starId: string, t: Transformation) => {
    for (let i = 0; i < 12; i++) {
      const st = starsAt[i].find(x => x.id === starId);
      if (st) { st.transformation = t; return; }
    }
  };
  applyHoa(locId, 'loc');
  applyHoa(quyenId, 'quyen');
  applyHoa(khoaId, 'khoa');
  applyHoa(kyId, 'ky');

  // Tuần / Triệt (đóng giữa 2 cung)
  const trietPair = TRIET_POS[yc];
  const sYear = sexagenary(yc, yChi);
  const tuanGroup = Math.floor(sYear / 10); // 0..5
  const tuanPair: [number, number] = [mod(10 - tuanGroup * 2, 12), mod(11 - tuanGroup * 2, 12)];

  // Dựng 12 cung
  const palaces: Palace[] = [];
  for (let i = 0; i < 12; i++) {
    const branchIndex = mod(menh - i, 12);
    const canOfPalace = mod(canDan + mod(branchIndex - 2, 12), 10);
    const stars = starsAt[branchIndex];

    // Điểm cung: trung bình chính tinh, cộng phụ tinh/tứ hóa
    const chinh = stars.filter(x => x.kind === 'chinh_tinh');
    let raw: number;
    if (chinh.length > 0) {
      raw = chinh.reduce((sum, st) => sum + starContribution(st.id, st.brightness as Brightness), 0) / chinh.length;
    } else {
      raw = 0; // vô chính diệu → trung tính
    }
    for (const st of stars) {
      if (st.kind === 'phu_cat' && CAT_PHU_TINH.includes(st.id)) raw += 0.5;
      if (st.kind === 'phu_sat' && SAT_TINH.includes(st.id)) raw -= 0.7;
      if (st.transformation === 'loc' || st.transformation === 'quyen' || st.transformation === 'khoa') raw += 0.7;
      if (st.transformation === 'ky') raw -= 0.8;
    }
    const hasTuan = tuanPair.includes(branchIndex);
    const hasTriet = trietPair.includes(branchIndex);
    if (hasTuan || hasTriet) raw *= 0.6; // Tuần/Triệt kéo về trung tính

    const score100 = Math.max(0, Math.min(100, Math.round((raw + 5) * 10)));
    const stars5 = Math.round(score100 / 20);

    palaces.push({
      index: i,
      name: PALACE_NAMES[i],
      branchIndex,
      branchName: CHI_NAMES[branchIndex],
      canName: CAN[canOfPalace],
      isBody: branchIndex === than,
      stars,
      hasTuan,
      hasTriet,
      majorPeriod: { fromAge: 0, toAge: 0 },
      score: { raw, score100, stars5, label: scoreLabel(score100) },
      interpretations: [],
    });
  }

  // Đại hạn: khởi = số cục tại cung Mệnh, mỗi cung 10 năm, chiều theo âm/dương nam nữ
  for (const p of palaces) {
    const steps = isYang ? mod(p.branchIndex - menh, 12) : mod(menh - p.branchIndex, 12);
    const from = cucNumber + steps * 10;
    p.majorPeriod = { fromAge: from, toAge: from + 9 };
  }

  // Luận đoán từng cung
  for (const p of palaces) {
    p.interpretations = buildInterpretations(p);
  }

  return {
    input,
    lunar,
    yearCanChi: `${yCC.can} ${yCC.chi}`,
    monthCanChi: `${mCC.can} ${mCC.chi}`,
    dayCanChi: `${dCC.can} ${dCC.chi}`,
    hourCanChi: `${hCC.can} ${hCC.chi}`,
    hourBranchIndex: hourChi,
    menhBranchIndex: menh,
    thanBranchIndex: than,
    cuc: { element, number: cucNumber, name: CUC_NAMES[cucNumber] },
    isYang,
    palaces,
    warnings,
  };
}
