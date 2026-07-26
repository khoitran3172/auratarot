import {
  convertSolar2Lunar, solarToJd, hourToChiIndex, mod, CAN,
  yearCanChi, monthCanChi, dayCanChi, hourCanChi,
} from './lunar';
import {
  PALACE_NAMES, CHI_NAMES, CHINH_TINH, STAR_DEFS, BRIGHTNESS_TABLE,
  BRIGHTNESS_MAGNITUDE, TU_HOA, LOC_TON_POS, KHOI_VIET_POS, QUAN_PHUC_POS,
  HOA_LINH_START, DAO_HOA_POS, THIEN_MA_POS, TIEU_HAN_START, TRIET_POS,
  CO_THAN_POS, QUA_TU_POS, NAP_AM, ELEMENT_TO_CUC, CUC_NAMES, ELEMENT_VI,
  ELEMENT_SINH, ELEMENT_KHAC, MENH_CHU, THAN_CHU, YANG_BRANCHES,
  TRUONG_SINH_ORDER, TRUONG_SINH_START, THAI_TUE_ORDER, BAC_SI_ORDER,
  tamHopGroup, seasonGroup,
} from '../data/tuvi/constants';
import { buildPalaceInterpretations } from '../data/tuvi/interpretations';
import {
  Palace, StarInstance, TuViInput, TuViChartResult, Brightness,
  Transformation, ElementName, MenhCucRelation,
} from '../data/tuvi/types';

// Chính tinh chòm Tử Vi (offset nghịch) và chòm Thiên Phủ (offset thuận)
const TUVI_GROUP: [string, number][] = [
  ['TuVi', 0], ['ThienCo', -1], ['ThaiDuong', -3], ['VuKhuc', -4], ['ThienDong', -5], ['LiemTrinh', -8],
];
const THIENPHU_GROUP: [string, number][] = [
  ['ThienPhu', 0], ['ThaiAm', 1], ['ThamLang', 2], ['CuMon', 3], ['ThienTuong', 4],
  ['ThienLuong', 5], ['ThatSat', 6], ['PhaQuan', 10],
];

/** Chỉ số lục thập hoa giáp (0..59, 0 = Giáp Tý) từ can & chi */
function sexagenary(canIndex: number, chiIndex: number): number {
  for (let s = 0; s < 60; s++) {
    if (s % 10 === canIndex && s % 12 === chiIndex) return s;
  }
  return 0;
}

/** Điểm đóng góp của một chính tinh theo độ sáng + cực tính bản chất */
function starContribution(starId: string, brightness: Brightness): number {
  const N = CHINH_TINH[starId]?.polarity ?? 0;
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

/** Luận sinh khắc giữa bản Mệnh (nạp âm năm sinh) và Cục */
function luanMenhCuc(menh: ElementName, cuc: ElementName): MenhCucRelation {
  const mv = ELEMENT_VI[menh];
  const cv = ELEMENT_VI[cuc];
  if (menh === cuc) {
    return {
      label: 'Mệnh – Cục bình hòa',
      verdict: 'kha',
      meaning: `Bản mệnh ${mv} gặp Cục cùng hành ${cv} — hai khí hòa nhau, không sinh không khắc. Cuộc đời tương đối ổn định, thuận theo lẽ tự nhiên, ít cảnh giằng xé giữa bản thân và hoàn cảnh.`,
    };
  }
  if (ELEMENT_SINH[cuc] === menh) {
    return {
      label: 'Cục sinh Mệnh',
      verdict: 'tot',
      meaning: `Cục ${cv} sinh cho bản mệnh ${mv} — hoàn cảnh nuôi dưỡng con người. Đây là thế tốt nhất trong năm cách: bạn thường được môi trường, gia đình hoặc thời thế hậu thuẫn, làm việc gì cũng có lực đẩy phía sau.`,
    };
  }
  if (ELEMENT_SINH[menh] === cuc) {
    return {
      label: 'Mệnh sinh Cục',
      verdict: 'binh',
      meaning: `Bản mệnh ${mv} phải sinh xuất cho Cục ${cv} — con người hao khí nuôi hoàn cảnh. Bạn thuộc mẫu cho đi nhiều, tận lực vì việc vì người; thành tựu có nhưng đổi bằng vất vả, cần biết giữ sức và học cách nhận lại.`,
    };
  }
  if (ELEMENT_KHAC[menh] === cuc) {
    return {
      label: 'Mệnh khắc Cục',
      verdict: 'kha',
      meaning: `Bản mệnh ${mv} khắc chế Cục ${cv} — con người làm chủ hoàn cảnh. Bạn có bản lĩnh tự lập, dám uốn hoàn cảnh theo ý mình; song mọi thứ đều phải tranh đấu mà có, hiếm khi được dâng sẵn.`,
    };
  }
  return {
    label: 'Cục khắc Mệnh',
    verdict: 'xau',
    meaning: `Cục ${cv} khắc bản mệnh ${mv} — hoàn cảnh kìm hãm con người. Đây là thế khó nhất: bạn thường cảm thấy bị bó buộc, tài năng khó phát tiết đúng lúc. Bù lại, người vượt được thế này thường rèn nên nội lực rất bền.`,
  };
}

export function computeTuViChart(input: TuViInput): TuViChartResult {
  const warnings: string[] = [];
  if (input.year < 1800 || input.year > 2199) {
    warnings.push('Năm sinh ngoài khoảng 1800–2199, độ chính xác lịch âm có thể giảm.');
  }

  const lunar = convertSolar2Lunar(input.day, input.month, input.year);
  if (lunar.leap) {
    warnings.push(`Bạn sinh vào tháng nhuận — lá số lập theo số tháng gốc (tháng ${lunar.month}) theo quy ước phổ thông.`);
  }
  const jd = solarToJd(input.day, input.month, input.year);
  const hourChi = hourToChiIndex(input.hour);

  const yCC = yearCanChi(lunar.year);
  const mCC = monthCanChi(lunar.month, lunar.year);
  const dCC = dayCanChi(jd);
  const hCC = hourCanChi(input.hour, jd);
  const yc = yCC.canIndex;
  const yChi = yCC.chiIndex;

  // ── An Mệnh & Thân ──
  const menh = mod(lunar.month + 1 - hourChi, 12);
  const than = mod(lunar.month + 1 + hourChi, 12);

  // ── Cục (Ngũ Hổ Độn → can cung Mệnh → nạp âm) ──
  const canDan = mod(yc * 2 + 2, 10);
  const canMenh = mod(canDan + mod(menh - 2, 12), 10);
  const cucElement: ElementName = NAP_AM[Math.floor(sexagenary(canMenh, menh) / 2)].element;
  const cucNumber = ELEMENT_TO_CUC[cucElement];

  // ── Bản mệnh (nạp âm năm sinh) & sinh khắc Mệnh–Cục ──
  const banMenh = NAP_AM[Math.floor(sexagenary(yc, yChi) / 2)];
  const menhCuc = luanMenhCuc(banMenh.element, cucElement);

  // ── Âm/Dương Nam Nữ → chiều an đại hạn & các vòng sao ──
  const isYangYear = yc % 2 === 0;
  const isYang = (input.gender === 'nam' && isYangYear) || (input.gender === 'nu' && !isYangYear);
  const amDuongLabel = `${isYangYear ? 'Dương' : 'Âm'} ${input.gender === 'nam' ? 'Nam' : 'Nữ'}`;
  const dir = isYang ? 1 : -1;
  const thuanLy = isYangYear === YANG_BRANCHES.includes(menh);

  // ── An sao: map chi index → danh sách sao ──
  const starsAt: Record<number, StarInstance[]> = {};
  for (let i = 0; i < 12; i++) starsAt[i] = [];

  const addChinh = (pos: number, id: string) => {
    const info = CHINH_TINH[id];
    starsAt[pos].push({
      id, name: info.name, kind: 'chinh_tinh', nature: 'trung',
      element: info.element, brightness: BRIGHTNESS_TABLE[id][pos],
    });
  };
  const addStar = (pos: number, id: string) => {
    const def = STAR_DEFS[id];
    if (!def) return;
    starsAt[mod(pos, 12)].push({
      id, name: def.name, kind: def.kind, nature: def.nature, element: def.element,
    });
  };

  // 14 chính tinh
  const b = Math.ceil(lunar.day / cucNumber);
  const a = b * cucNumber - lunar.day;
  const base = mod(2 + (b - 1), 12);
  const tuviPos = a === 0 ? base : (a % 2 === 0 ? mod(base + a, 12) : mod(base - a, 12));
  const phuPos = mod(4 - tuviPos, 12);
  for (const [id, off] of TUVI_GROUP) addChinh(mod(tuviPos + off, 12), id);
  for (const [id, off] of THIENPHU_GROUP) addChinh(mod(phuPos + off, 12), id);

  // Lục Cát
  addStar(mod(4 + (lunar.month - 1), 12), 'TaPhu');       // khởi Thìn, thuận theo tháng
  addStar(mod(10 - (lunar.month - 1), 12), 'HuuBat');     // khởi Tuất, nghịch theo tháng
  addStar(mod(10 - hourChi, 12), 'VanXuong');             // khởi Tuất, nghịch theo giờ
  addStar(mod(4 + hourChi, 12), 'VanKhuc');               // khởi Thìn, thuận theo giờ
  const [khoiPos, vietPos] = KHOI_VIET_POS[yc];
  addStar(khoiPos, 'ThienKhoi');
  addStar(vietPos, 'ThienViet');

  // Lộc Tồn – Kình – Đà
  const locTon = LOC_TON_POS[yc];
  addStar(locTon, 'LocTon');
  addStar(mod(locTon + 1, 12), 'KinhDuong');
  addStar(mod(locTon - 1, 12), 'DaLa');

  // Thiên Mã
  addStar(THIEN_MA_POS[tamHopGroup(yChi)], 'ThienMa');

  // Hỏa – Linh (đếm theo giờ, chiều theo âm/dương nam nữ)
  const [hoaStart, linhStart] = HOA_LINH_START[tamHopGroup(yChi)];
  addStar(mod(hoaStart + dir * hourChi, 12), 'HoaTinh');
  addStar(mod(linhStart - dir * hourChi, 12), 'LinhTinh');

  // Địa Không – Địa Kiếp (khởi Hợi giờ Tý)
  addStar(mod(11 + hourChi, 12), 'DiaKiep');
  addStar(mod(11 - hourChi, 12), 'DiaKhong');

  // Đào hoa tinh
  addStar(DAO_HOA_POS[tamHopGroup(yChi)], 'DaoHoa');
  const hongLoan = mod(3 - yChi, 12);
  addStar(hongLoan, 'HongLoan');
  addStar(mod(hongLoan + 6, 12), 'ThienHy');
  addStar(mod(1 + (lunar.month - 1), 12), 'ThienDieu');   // khởi Sửu, thuận theo tháng

  // Thiên Hình (khởi Dậu tháng Giêng, thuận)
  addStar(mod(8 + lunar.month, 12), 'ThienHinh');

  // Cô Thần – Quả Tú
  addStar(CO_THAN_POS[seasonGroup(yChi)], 'CoThan');
  addStar(QUA_TU_POS[seasonGroup(yChi)], 'QuaTu');

  // Thiên Khốc – Thiên Hư (đồng khởi tại Ngọ)
  addStar(mod(6 - yChi, 12), 'ThienKhoc');
  addStar(mod(6 + yChi, 12), 'ThienHu');

  // Long Trì – Phượng Các
  addStar(mod(4 + yChi, 12), 'LongTri');
  addStar(mod(10 - yChi, 12), 'PhuongCac');

  // Thai Phụ – Phong Cáo (theo giờ)
  addStar(mod(6 + hourChi, 12), 'ThaiPhu');
  addStar(mod(2 + hourChi, 12), 'PhongCao');

  // Thiên Quan – Thiên Phúc (theo can năm)
  const [quanPos, phucPos] = QUAN_PHUC_POS[yc];
  addStar(quanPos, 'ThienQuan');
  addStar(phucPos, 'ThienPhuc');

  // Ân Quang – Thiên Quý (theo ngày sinh, dựa Xương/Khúc)
  const xuongPos = mod(10 - hourChi, 12);
  const khucPos = mod(4 + hourChi, 12);
  addStar(mod(xuongPos + lunar.day - 2, 12), 'AnQuang');
  addStar(mod(khucPos - lunar.day + 2, 12), 'ThienQuy');

  // Tam Thai – Bát Tọa (theo ngày sinh, dựa Tả/Hữu)
  const taPos = mod(4 + (lunar.month - 1), 12);
  const huuPos = mod(10 - (lunar.month - 1), 12);
  addStar(mod(taPos + lunar.day - 1, 12), 'TamThai');
  addStar(mod(huuPos - lunar.day + 1, 12), 'BatToa');

  // Đẩu Quân (Thái Tuế → nghịch theo tháng → thuận theo giờ)
  addStar(mod(yChi - (lunar.month - 1) + hourChi, 12), 'DauQuan');

  // Vòng Trường Sinh (12 sao, theo Cục + chiều âm dương nam nữ)
  const tsStart = TRUONG_SINH_START[cucNumber];
  TRUONG_SINH_ORDER.forEach((id, i) => addStar(mod(tsStart + dir * i, 12), id));

  // Vòng Thái Tuế (12 sao, khởi tại chi năm, LUÔN thuận)
  THAI_TUE_ORDER.forEach((id, i) => addStar(mod(yChi + i, 12), id));

  // Vòng Bác Sĩ (12 sao, khởi tại Lộc Tồn, theo chiều âm dương nam nữ)
  BAC_SI_ORDER.forEach((id, i) => addStar(mod(locTon + dir * i, 12), id));

  // ── Tứ Hóa: gắn cờ hóa lên sao tương ứng ──
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

  // ── Tuần / Triệt (án ngữ giữa 2 cung) ──
  const trietPair = TRIET_POS[yc];
  const tuanGroup = Math.floor(sexagenary(yc, yChi) / 10); // 0..5, theo tuần thủ Giáp
  const tuanPair: [number, number] = [mod(10 - tuanGroup * 2, 12), mod(11 - tuanGroup * 2, 12)];

  // ── Tiểu hạn: tuổi âm nào rơi vào cung nào ──
  const tieuHanStart = TIEU_HAN_START[tamHopGroup(yChi)];
  const minorDir = input.gender === 'nam' ? 1 : -1;
  const minorAgesAt: Record<number, number[]> = {};
  for (let i = 0; i < 12; i++) minorAgesAt[i] = [];
  for (let age = 1; age <= 100; age++) {
    const pos = mod(tieuHanStart + minorDir * (age - 1), 12);
    minorAgesAt[pos].push(age);
  }

  // Tuổi âm hiện tại (1 tuổi = năm sinh)
  const currentAge = new Date().getFullYear() - lunar.year + 1;

  // ── Dựng 12 cung ──
  const palaces: Palace[] = [];
  for (let i = 0; i < 12; i++) {
    const branchIndex = mod(menh - i, 12);
    const canOfPalace = mod(canDan + mod(branchIndex - 2, 12), 10);
    const stars = starsAt[branchIndex];

    // Điểm cung = nền chính tinh (chiếm phần lớn) + phần bồi của phụ tinh/vòng sao/Tứ Hóa.
    // Chính tinh chỉ lấy 80% biên độ để chừa chỗ cho phụ tinh, và tổng phần bồi bị chặn
    // trong ±1.8 — nếu không, một cung nhiều sao lành sẽ luôn chạm trần 100 điểm.
    const chinh = stars.filter(s => s.kind === 'chinh_tinh');
    const chinhBase = chinh.length > 0
      ? (chinh.reduce((sum, st) => sum + starContribution(st.id, st.brightness as Brightness), 0) / chinh.length) * 0.8
      : 0; // vô chính diệu → trung tính, sẽ mượn sao xung chiếu bên dưới

    let aux = 0;
    for (const st of stars) {
      if (st.kind !== 'chinh_tinh') {
        // Vòng sao lưu niên là trung tinh, lực chỉ tính một nửa so với phụ tinh chính
        const isRing = st.kind === 'vong_truong_sinh' || st.kind === 'vong_thai_tue' || st.kind === 'vong_bac_si';
        aux += (STAR_DEFS[st.id]?.weight ?? 0) * (isRing ? 0.5 : 1);
      }
      if (st.transformation === 'ky') aux -= 0.8;
      else if (st.transformation) aux += 0.7;
    }
    aux = Math.max(-1.8, Math.min(1.8, aux));
    let raw = chinhBase + aux;

    const hasTuan = tuanPair.includes(branchIndex);
    const hasTriet = trietPair.includes(branchIndex);
    if (hasTuan || hasTriet) raw *= 0.6; // Tuần/Triệt kéo cường độ về trung tính

    const score100 = Math.max(0, Math.min(100, Math.round((raw + 5) * 10)));

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
      minorAges: minorAgesAt[branchIndex],
      score: { raw, score100, stars5: Math.round(score100 / 20), label: scoreLabel(score100) },
      interpretations: [],
    });
  }

  // Vô chính diệu: mượn khí chính tinh cung xung chiếu (nửa lực)
  for (const p of palaces) {
    if (p.stars.some(s => s.kind === 'chinh_tinh')) continue;
    const opposite = palaces.find(q => q.branchIndex === mod(p.branchIndex + 6, 12));
    const oppChinh = opposite?.stars.filter(s => s.kind === 'chinh_tinh') ?? [];
    if (oppChinh.length === 0) continue;
    const borrowed = oppChinh.reduce(
      (sum, st) => sum + starContribution(st.id, st.brightness as Brightness), 0
    ) / oppChinh.length;
    const raw = p.score.raw + borrowed * 0.4; // mượn khí đối cung, lực chỉ còn một phần
    const score100 = Math.max(0, Math.min(100, Math.round((raw + 5) * 10)));
    p.score = { raw, score100, stars5: Math.round(score100 / 20), label: scoreLabel(score100) };
  }

  // ── Đại hạn: khởi = số Cục tại cung Mệnh, mỗi cung 10 năm ──
  for (const p of palaces) {
    const steps = isYang ? mod(p.branchIndex - menh, 12) : mod(menh - p.branchIndex, 12);
    const from = cucNumber + steps * 10;
    p.majorPeriod = { fromAge: from, toAge: from + 9 };
  }

  const chart: TuViChartResult = {
    input,
    lunar,
    yearCanChi: `${yCC.can} ${yCC.chi}`,
    monthCanChi: `${mCC.can} ${mCC.chi}`,
    dayCanChi: `${dCC.can} ${dCC.chi}`,
    hourCanChi: `${hCC.can} ${hCC.chi}`,
    hourBranchIndex: hourChi,
    hourBranchName: CHI_NAMES[hourChi],
    menhBranchIndex: menh,
    thanBranchIndex: than,
    cuc: { element: cucElement, number: cucNumber, name: CUC_NAMES[cucNumber] },
    banMenh: { name: banMenh.name, element: banMenh.element },
    menhCuc,
    menhChu: MENH_CHU[menh],
    thanChu: THAN_CHU[yChi],
    isYang,
    amDuongLabel,
    thuanLy,
    currentAge,
    palaces,
    tuanPair,
    trietPair,
    warnings,
  };

  // ── Luận đoán từng cung (cần toàn cảnh lá số để xét tam hợp/xung chiếu) ──
  for (const p of palaces) {
    p.interpretations = buildPalaceInterpretations(p, chart);
  }

  return chart;
}

/** Cung xung chiếu (đối cung) của một cung */
export function oppositePalace(chart: TuViChartResult, palace: Palace): Palace | undefined {
  return chart.palaces.find(p => p.branchIndex === mod(palace.branchIndex + 6, 12));
}

/** 2 cung tam hợp của một cung (cách 4 cung mỗi bên) */
export function trinePalaces(chart: TuViChartResult, palace: Palace): Palace[] {
  const targets = [mod(palace.branchIndex + 4, 12), mod(palace.branchIndex + 8, 12)];
  return chart.palaces.filter(p => targets.includes(p.branchIndex));
}
