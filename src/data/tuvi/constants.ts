import { Brightness, Transformation, ElementName, StarKind, StarNature } from './types';

// ═══════════════════════════════════════════════════════════
// 12 CUNG & ĐỊA CHI
// ═══════════════════════════════════════════════════════════

/** Thứ tự 12 cung, đi NGHỊCH từ Mệnh */
export const PALACE_NAMES = [
  'Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc',
  'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ',
];

export const CHI_NAMES = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

/** Lĩnh vực đời sống mỗi cung cai quản (dùng ghép câu luận) */
export const PALACE_DOMAIN: Record<string, string> = {
  'Mệnh': 'bản thân, tính cách cốt lõi và vận mệnh tổng quát',
  'Phụ Mẫu': 'cha mẹ, bề trên, cấp trên và người đỡ đầu',
  'Phúc Đức': 'phúc phần, đời sống tinh thần, thọ số và âm đức dòng họ',
  'Điền Trạch': 'nhà cửa, đất đai, tài sản cố định và gia trạch',
  'Quan Lộc': 'sự nghiệp, công danh và đường thăng tiến',
  'Nô Bộc': 'bạn bè, cộng sự, người dưới quyền và quan hệ xã hội',
  'Thiên Di': 'việc ra ngoài xã hội, xuất ngoại và quý nhân bên ngoài',
  'Tật Ách': 'sức khỏe, tạng bệnh và tai ách',
  'Tài Bạch': 'tiền bạc, cách kiếm tiền và giữ tiền',
  'Tử Tức': 'con cái và sức sáng tạo',
  'Phu Thê': 'hôn nhân, tình duyên và người bạn đời',
  'Huynh Đệ': 'anh chị em, bạn thân và người đồng hành',
};

/** Cung Dương (Tý Dần Thìn Ngọ Thân Tuất) — dùng xét âm dương thuận lý */
export const YANG_BRANCHES = [0, 2, 4, 6, 8, 10];

// ═══════════════════════════════════════════════════════════
// NGŨ HÀNH
// ═══════════════════════════════════════════════════════════

export const ELEMENT_VI: Record<ElementName, string> = {
  Thuy: 'Thủy', Moc: 'Mộc', Kim: 'Kim', Tho: 'Thổ', Hoa: 'Hỏa',
};

/** Vòng tương sinh: Mộc→Hỏa→Thổ→Kim→Thủy→Mộc */
export const ELEMENT_SINH: Record<ElementName, ElementName> = {
  Moc: 'Hoa', Hoa: 'Tho', Tho: 'Kim', Kim: 'Thuy', Thuy: 'Moc',
};

/** Tương khắc: Mộc↘Thổ, Thổ↘Thủy, Thủy↘Hỏa, Hỏa↘Kim, Kim↘Mộc */
export const ELEMENT_KHAC: Record<ElementName, ElementName> = {
  Moc: 'Tho', Tho: 'Thuy', Thuy: 'Hoa', Hoa: 'Kim', Kim: 'Moc',
};

/** Màu chữ theo ngũ hành sao (quy ước cổ, hiệu chỉnh cho nền tối) */
export const ELEMENT_COLOR: Record<ElementName, string> = {
  Kim: 'text-slate-100',
  Moc: 'text-emerald-300',
  Thuy: 'text-sky-300',
  Hoa: 'text-red-400',
  Tho: 'text-amber-300',
};

export const CUC_NAMES: Record<number, string> = {
  2: 'Thủy Nhị Cục', 3: 'Mộc Tam Cục', 4: 'Kim Tứ Cục', 5: 'Thổ Ngũ Cục', 6: 'Hỏa Lục Cục',
};

export const ELEMENT_TO_CUC: Record<ElementName, 2 | 3 | 4 | 5 | 6> = {
  Thuy: 2, Moc: 3, Kim: 4, Tho: 5, Hoa: 6,
};

/** Nạp âm 60 hoa giáp — 30 cặp, tra bằng floor(sexagenary/2) */
export const NAP_AM: { name: string; element: ElementName }[] = [
  { name: 'Hải Trung Kim', element: 'Kim' },      // Giáp Tý – Ất Sửu
  { name: 'Lô Trung Hỏa', element: 'Hoa' },       // Bính Dần – Đinh Mão
  { name: 'Đại Lâm Mộc', element: 'Moc' },        // Mậu Thìn – Kỷ Tỵ
  { name: 'Lộ Bàng Thổ', element: 'Tho' },        // Canh Ngọ – Tân Mùi
  { name: 'Kiếm Phong Kim', element: 'Kim' },     // Nhâm Thân – Quý Dậu
  { name: 'Sơn Đầu Hỏa', element: 'Hoa' },        // Giáp Tuất – Ất Hợi
  { name: 'Giản Hạ Thủy', element: 'Thuy' },      // Bính Tý – Đinh Sửu
  { name: 'Thành Đầu Thổ', element: 'Tho' },      // Mậu Dần – Kỷ Mão
  { name: 'Bạch Lạp Kim', element: 'Kim' },       // Canh Thìn – Tân Tỵ
  { name: 'Dương Liễu Mộc', element: 'Moc' },     // Nhâm Ngọ – Quý Mùi
  { name: 'Tuyền Trung Thủy', element: 'Thuy' },  // Giáp Thân – Ất Dậu
  { name: 'Ốc Thượng Thổ', element: 'Tho' },      // Bính Tuất – Đinh Hợi
  { name: 'Tích Lịch Hỏa', element: 'Hoa' },      // Mậu Tý – Kỷ Sửu
  { name: 'Tùng Bách Mộc', element: 'Moc' },      // Canh Dần – Tân Mão
  { name: 'Trường Lưu Thủy', element: 'Thuy' },   // Nhâm Thìn – Quý Tỵ
  { name: 'Sa Trung Kim', element: 'Kim' },       // Giáp Ngọ – Ất Mùi
  { name: 'Sơn Hạ Hỏa', element: 'Hoa' },         // Bính Thân – Đinh Dậu
  { name: 'Bình Địa Mộc', element: 'Moc' },       // Mậu Tuất – Kỷ Hợi
  { name: 'Bích Thượng Thổ', element: 'Tho' },    // Canh Tý – Tân Sửu
  { name: 'Kim Bạc Kim', element: 'Kim' },        // Nhâm Dần – Quý Mão
  { name: 'Phú Đăng Hỏa', element: 'Hoa' },       // Giáp Thìn – Ất Tỵ
  { name: 'Thiên Hà Thủy', element: 'Thuy' },     // Bính Ngọ – Đinh Mùi
  { name: 'Đại Dịch Thổ', element: 'Tho' },       // Mậu Thân – Kỷ Dậu
  { name: 'Thoa Xuyến Kim', element: 'Kim' },     // Canh Tuất – Tân Hợi
  { name: 'Tang Đố Mộc', element: 'Moc' },        // Nhâm Tý – Quý Sửu
  { name: 'Đại Khê Thủy', element: 'Thuy' },      // Giáp Dần – Ất Mão
  { name: 'Sa Trung Thổ', element: 'Tho' },       // Bính Thìn – Đinh Tỵ
  { name: 'Thiên Thượng Hỏa', element: 'Hoa' },   // Mậu Ngọ – Kỷ Mùi
  { name: 'Thạch Lựu Mộc', element: 'Moc' },      // Canh Thân – Tân Dậu
  { name: 'Đại Hải Thủy', element: 'Thuy' },      // Nhâm Tuất – Quý Hợi
];

// ═══════════════════════════════════════════════════════════
// 14 CHÍNH TINH
// ═══════════════════════════════════════════════════════════

export interface ChinhTinhInfo {
  name: string;
  element: ElementName;
  polarity: number; // cực tính bản chất ∈ [-1,+1] — dùng tính điểm
}

export const CHINH_TINH: Record<string, ChinhTinhInfo> = {
  TuVi: { name: 'Tử Vi', element: 'Tho', polarity: 1.0 },
  ThienCo: { name: 'Thiên Cơ', element: 'Moc', polarity: 0.6 },
  ThaiDuong: { name: 'Thái Dương', element: 'Hoa', polarity: 0.8 },
  VuKhuc: { name: 'Vũ Khúc', element: 'Kim', polarity: 0.6 },
  ThienDong: { name: 'Thiên Đồng', element: 'Thuy', polarity: 0.8 },
  LiemTrinh: { name: 'Liêm Trinh', element: 'Hoa', polarity: -0.6 },
  ThienPhu: { name: 'Thiên Phủ', element: 'Tho', polarity: 1.0 },
  ThaiAm: { name: 'Thái Âm', element: 'Thuy', polarity: 0.8 },
  ThamLang: { name: 'Tham Lang', element: 'Moc', polarity: -0.3 },
  CuMon: { name: 'Cự Môn', element: 'Thuy', polarity: -0.6 },
  ThienTuong: { name: 'Thiên Tướng', element: 'Thuy', polarity: 0.8 },
  ThienLuong: { name: 'Thiên Lương', element: 'Tho', polarity: 0.8 },
  ThatSat: { name: 'Thất Sát', element: 'Kim', polarity: -0.7 },
  PhaQuan: { name: 'Phá Quân', element: 'Thuy', polarity: -0.8 },
};

/** Bảng độ sáng 14 chính tinh × 12 cung (thứ tự Tý..Hợi) — nguồn tracuutuvi.com */
export const BRIGHTNESS_TABLE: Record<string, Brightness[]> = {
  TuVi: ['B', 'D', 'M', 'B', 'V', 'B', 'M', 'D', 'M', 'B', 'V', 'B'],
  ThienCo: ['D', 'D', 'H', 'M', 'M', 'V', 'D', 'D', 'V', 'M', 'M', 'H'],
  ThaiDuong: ['H', 'D', 'V', 'V', 'V', 'M', 'M', 'D', 'H', 'H', 'H', 'H'],
  VuKhuc: ['V', 'M', 'V', 'D', 'M', 'H', 'V', 'M', 'V', 'D', 'M', 'H'],
  ThienDong: ['V', 'H', 'M', 'D', 'H', 'D', 'H', 'H', 'M', 'H', 'H', 'D'],
  LiemTrinh: ['V', 'D', 'V', 'H', 'M', 'H', 'V', 'D', 'V', 'H', 'M', 'H'],
  ThienPhu: ['M', 'B', 'M', 'B', 'V', 'D', 'M', 'D', 'M', 'B', 'V', 'D'],
  ThaiAm: ['V', 'D', 'H', 'H', 'H', 'H', 'H', 'D', 'V', 'M', 'M', 'M'],
  ThamLang: ['H', 'M', 'D', 'H', 'V', 'H', 'H', 'M', 'D', 'H', 'V', 'H'],
  CuMon: ['V', 'H', 'V', 'M', 'H', 'H', 'V', 'H', 'D', 'M', 'H', 'D'],
  ThienTuong: ['V', 'D', 'M', 'H', 'V', 'D', 'V', 'D', 'M', 'H', 'V', 'D'],
  ThienLuong: ['V', 'D', 'V', 'V', 'M', 'H', 'M', 'D', 'V', 'H', 'M', 'H'],
  ThatSat: ['M', 'D', 'M', 'H', 'H', 'V', 'M', 'D', 'M', 'H', 'H', 'V'],
  PhaQuan: ['M', 'V', 'H', 'H', 'D', 'H', 'M', 'V', 'H', 'H', 'D', 'H'],
};

export const BRIGHTNESS_MAGNITUDE: Record<Brightness, number> = {
  M: 1.0, V: 0.8, D: 0.6, B: 0.4, H: 0.1,
};

export const BRIGHTNESS_NAMES: Record<Brightness, string> = {
  M: 'Miếu', V: 'Vượng', D: 'Đắc', B: 'Bình', H: 'Hãm',
};

export const TRANSFORMATION_NAMES: Record<Transformation, string> = {
  loc: 'Hóa Lộc', quyen: 'Hóa Quyền', khoa: 'Hóa Khoa', ky: 'Hóa Kỵ',
};

// ═══════════════════════════════════════════════════════════
// PHỤ TINH & CÁC VÒNG SAO — nguồn duy nhất về định nghĩa sao
// ═══════════════════════════════════════════════════════════

export interface StarDef {
  name: string;
  kind: StarKind;
  nature: StarNature;
  element?: ElementName;
  weight: number; // điểm cộng/trừ vào điểm cung
}

export const STAR_DEFS: Record<string, StarDef> = {
  // ── Lục Cát (phò tá cấp Giáp) ──
  TaPhu: { name: 'Tả Phụ', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.5 },
  HuuBat: { name: 'Hữu Bật', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.5 },
  VanXuong: { name: 'Văn Xương', kind: 'phu_tinh', nature: 'cat', element: 'Kim', weight: 0.5 },
  VanKhuc: { name: 'Văn Khúc', kind: 'phu_tinh', nature: 'cat', element: 'Thuy', weight: 0.5 },
  ThienKhoi: { name: 'Thiên Khôi', kind: 'phu_tinh', nature: 'cat', element: 'Hoa', weight: 0.5 },
  ThienViet: { name: 'Thiên Việt', kind: 'phu_tinh', nature: 'cat', element: 'Hoa', weight: 0.5 },
  LocTon: { name: 'Lộc Tồn', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.6 },
  ThienMa: { name: 'Thiên Mã', kind: 'phu_tinh', nature: 'cat', element: 'Hoa', weight: 0.4 },

  // ── Lục Sát ──
  KinhDuong: { name: 'Kình Dương', kind: 'phu_tinh', nature: 'hung', element: 'Kim', weight: -0.7 },
  DaLa: { name: 'Đà La', kind: 'phu_tinh', nature: 'hung', element: 'Kim', weight: -0.7 },
  HoaTinh: { name: 'Hỏa Tinh', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.7 },
  LinhTinh: { name: 'Linh Tinh', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.7 },
  DiaKhong: { name: 'Địa Không', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.7 },
  DiaKiep: { name: 'Địa Kiếp', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.7 },

  // ── Đào hoa / tình duyên ──
  DaoHoa: { name: 'Đào Hoa', kind: 'dao_hoa', nature: 'trung', element: 'Moc', weight: 0.1 },
  HongLoan: { name: 'Hồng Loan', kind: 'dao_hoa', nature: 'cat', element: 'Thuy', weight: 0.3 },
  ThienHy: { name: 'Thiên Hỷ', kind: 'dao_hoa', nature: 'cat', element: 'Thuy', weight: 0.3 },
  ThienDieu: { name: 'Thiên Diêu', kind: 'dao_hoa', nature: 'hung', element: 'Thuy', weight: -0.2 },

  // ── Quý tinh & danh vọng ──
  AnQuang: { name: 'Ân Quang', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.5 },
  ThienQuy: { name: 'Thiên Quý', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.4 },
  TamThai: { name: 'Tam Thai', kind: 'phu_tinh', nature: 'cat', element: 'Hoa', weight: 0.2 },
  BatToa: { name: 'Bát Tọa', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.2 },
  LongTri: { name: 'Long Trì', kind: 'phu_tinh', nature: 'cat', element: 'Thuy', weight: 0.3 },
  PhuongCac: { name: 'Phượng Các', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.3 },
  ThaiPhu: { name: 'Thai Phụ', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.2 },
  PhongCao: { name: 'Phong Cáo', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.2 },
  ThienQuan: { name: 'Thiên Quan', kind: 'phu_tinh', nature: 'cat', element: 'Hoa', weight: 0.3 },
  ThienPhuc: { name: 'Thiên Phúc', kind: 'phu_tinh', nature: 'cat', element: 'Tho', weight: 0.3 },

  // ── Sao hung lẻ ──
  CoThan: { name: 'Cô Thần', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.25 },
  QuaTu: { name: 'Quả Tú', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.25 },
  ThienKhoc: { name: 'Thiên Khốc', kind: 'phu_tinh', nature: 'hung', element: 'Kim', weight: -0.25 },
  ThienHu: { name: 'Thiên Hư', kind: 'phu_tinh', nature: 'hung', element: 'Tho', weight: -0.25 },
  ThienHinh: { name: 'Thiên Hình', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.3 },
  DauQuan: { name: 'Đẩu Quân', kind: 'phu_tinh', nature: 'hung', element: 'Hoa', weight: -0.15 },

  // ── Vòng Trường Sinh (12) ──
  TruongSinh: { name: 'Trường Sinh', kind: 'vong_truong_sinh', nature: 'cat', weight: 0.3 },
  MocDuc: { name: 'Mộc Dục', kind: 'vong_truong_sinh', nature: 'hung', weight: -0.2 },
  QuanDoi: { name: 'Quan Đới', kind: 'vong_truong_sinh', nature: 'cat', weight: 0.2 },
  LamQuan: { name: 'Lâm Quan', kind: 'vong_truong_sinh', nature: 'cat', weight: 0.3 },
  DeVuong: { name: 'Đế Vượng', kind: 'vong_truong_sinh', nature: 'cat', weight: 0.4 },
  Suy: { name: 'Suy', kind: 'vong_truong_sinh', nature: 'hung', weight: -0.2 },
  Benh: { name: 'Bệnh', kind: 'vong_truong_sinh', nature: 'hung', weight: -0.25 },
  Tu: { name: 'Tử', kind: 'vong_truong_sinh', nature: 'hung', weight: -0.3 },
  Mo: { name: 'Mộ', kind: 'vong_truong_sinh', nature: 'trung', weight: 0 },
  Tuyet: { name: 'Tuyệt', kind: 'vong_truong_sinh', nature: 'hung', weight: -0.3 },
  Thai: { name: 'Thai', kind: 'vong_truong_sinh', nature: 'trung', weight: 0 },
  Duong: { name: 'Dưỡng', kind: 'vong_truong_sinh', nature: 'cat', weight: 0.15 },

  // ── Vòng Thái Tuế (12) ──
  ThaiTue: { name: 'Thái Tuế', kind: 'vong_thai_tue', nature: 'trung', weight: 0 },
  ThieuDuong: { name: 'Thiếu Dương', kind: 'vong_thai_tue', nature: 'cat', weight: 0.2 },
  TangMon: { name: 'Tang Môn', kind: 'vong_thai_tue', nature: 'hung', weight: -0.3 },
  ThieuAm: { name: 'Thiếu Âm', kind: 'vong_thai_tue', nature: 'cat', weight: 0.2 },
  QuanPhu: { name: 'Quan Phù', kind: 'vong_thai_tue', nature: 'hung', weight: -0.25 },
  TuPhu: { name: 'Tử Phù', kind: 'vong_thai_tue', nature: 'hung', weight: -0.25 },
  TuePha: { name: 'Tuế Phá', kind: 'vong_thai_tue', nature: 'hung', weight: -0.3 },
  LongDuc: { name: 'Long Đức', kind: 'vong_thai_tue', nature: 'cat', weight: 0.25 },
  BachHo: { name: 'Bạch Hổ', kind: 'vong_thai_tue', nature: 'hung', weight: -0.3 },
  PhucDuc: { name: 'Phúc Đức', kind: 'vong_thai_tue', nature: 'cat', weight: 0.25 },
  DieuKhach: { name: 'Điếu Khách', kind: 'vong_thai_tue', nature: 'hung', weight: -0.2 },
  TrucPhu: { name: 'Trực Phù', kind: 'vong_thai_tue', nature: 'hung', weight: -0.2 },

  // ── Vòng Bác Sĩ (12) ──
  BacSi: { name: 'Bác Sĩ', kind: 'vong_bac_si', nature: 'cat', weight: 0.2 },
  LucSi: { name: 'Lực Sĩ', kind: 'vong_bac_si', nature: 'trung', weight: 0 },
  ThanhLong: { name: 'Thanh Long', kind: 'vong_bac_si', nature: 'cat', weight: 0.25 },
  TieuHao: { name: 'Tiểu Hao', kind: 'vong_bac_si', nature: 'hung', weight: -0.25 },
  TuongQuan: { name: 'Tướng Quân', kind: 'vong_bac_si', nature: 'cat', weight: 0.2 },
  TauThu: { name: 'Tấu Thư', kind: 'vong_bac_si', nature: 'cat', weight: 0.2 },
  PhiLiem: { name: 'Phi Liêm', kind: 'vong_bac_si', nature: 'hung', weight: -0.2 },
  HyThan: { name: 'Hỷ Thần', kind: 'vong_bac_si', nature: 'cat', weight: 0.25 },
  BenhPhu: { name: 'Bệnh Phù', kind: 'vong_bac_si', nature: 'hung', weight: -0.2 },
  DaiHao: { name: 'Đại Hao', kind: 'vong_bac_si', nature: 'hung', weight: -0.35 },
  PhucBinh: { name: 'Phục Binh', kind: 'vong_bac_si', nature: 'hung', weight: -0.25 },
  QuanPhuBS: { name: 'Quan Phủ', kind: 'vong_bac_si', nature: 'hung', weight: -0.25 },
};

/** Thứ tự an 12 sao vòng Trường Sinh */
export const TRUONG_SINH_ORDER = [
  'TruongSinh', 'MocDuc', 'QuanDoi', 'LamQuan', 'DeVuong', 'Suy',
  'Benh', 'Tu', 'Mo', 'Tuyet', 'Thai', 'Duong',
];

/** Thứ tự an 12 sao vòng Thái Tuế (luôn đi THUẬN) */
export const THAI_TUE_ORDER = [
  'ThaiTue', 'ThieuDuong', 'TangMon', 'ThieuAm', 'QuanPhu', 'TuPhu',
  'TuePha', 'LongDuc', 'BachHo', 'PhucDuc', 'DieuKhach', 'TrucPhu',
];

/** Thứ tự an 12 sao vòng Bác Sĩ (khởi tại Lộc Tồn) */
export const BAC_SI_ORDER = [
  'BacSi', 'LucSi', 'ThanhLong', 'TieuHao', 'TuongQuan', 'TauThu',
  'PhiLiem', 'HyThan', 'BenhPhu', 'DaiHao', 'PhucBinh', 'QuanPhuBS',
];

/** Cung khởi Trường Sinh theo Cục */
export const TRUONG_SINH_START: Record<number, number> = {
  2: 8,  // Thủy nhị cục → Thân
  3: 11, // Mộc tam cục → Hợi
  4: 5,  // Kim tứ cục → Tỵ
  5: 8,  // Thổ ngũ cục → Thân
  6: 2,  // Hỏa lục cục → Dần
};

// ═══════════════════════════════════════════════════════════
// BẢNG TRA AN SAO
// ═══════════════════════════════════════════════════════════

/** Tứ Hóa theo can năm: [Lộc, Quyền, Khoa, Kỵ] */
export const TU_HOA: Record<number, [string, string, string, string]> = {
  0: ['LiemTrinh', 'PhaQuan', 'VuKhuc', 'ThaiDuong'],   // Giáp
  1: ['ThienCo', 'ThienLuong', 'TuVi', 'ThaiAm'],       // Ất
  2: ['ThienDong', 'ThienCo', 'VanXuong', 'LiemTrinh'], // Bính
  3: ['ThaiAm', 'ThienDong', 'ThienCo', 'CuMon'],       // Đinh
  4: ['ThamLang', 'ThaiAm', 'HuuBat', 'ThienCo'],       // Mậu
  5: ['VuKhuc', 'ThamLang', 'ThienLuong', 'VanKhuc'],   // Kỷ
  6: ['ThaiDuong', 'VuKhuc', 'ThaiAm', 'ThienDong'],    // Canh
  7: ['CuMon', 'ThaiDuong', 'VanKhuc', 'VanXuong'],     // Tân
  8: ['ThienLuong', 'TuVi', 'ThienPhu', 'VuKhuc'],      // Nhâm
  9: ['PhaQuan', 'CuMon', 'ThaiAm', 'ThamLang'],        // Quý
};

/** Lộc Tồn theo can năm → chi index */
export const LOC_TON_POS: Record<number, number> = {
  0: 2, 1: 3, 2: 5, 3: 6, 4: 5, 5: 6, 6: 8, 7: 9, 8: 11, 9: 0,
};

/** Thiên Khôi / Thiên Việt theo can năm */
export const KHOI_VIET_POS: Record<number, [number, number]> = {
  0: [1, 7], 4: [1, 7],   // Giáp, Mậu: Sửu – Mùi
  1: [0, 8], 5: [0, 8],   // Ất, Kỷ: Tý – Thân
  2: [11, 9], 3: [11, 9], // Bính, Đinh: Hợi – Dậu
  6: [6, 2], 7: [6, 2],   // Canh, Tân: Ngọ – Dần
  8: [3, 5], 9: [3, 5],   // Nhâm, Quý: Mão – Tỵ
};

/** Thiên Quan / Thiên Phúc theo can năm */
export const QUAN_PHUC_POS: Record<number, [number, number]> = {
  0: [7, 9],   // Giáp: Mùi – Dậu
  1: [4, 8],   // Ất: Thìn – Thân
  2: [5, 0],   // Bính: Tỵ – Tý
  3: [2, 11],  // Đinh: Dần – Hợi
  4: [3, 3],   // Mậu: Mão – Mão
  5: [9, 2],   // Kỷ: Dậu – Dần
  6: [11, 6],  // Canh: Hợi – Ngọ
  7: [9, 5],   // Tân: Dậu – Tỵ
  8: [10, 6],  // Nhâm: Tuất – Ngọ
  9: [6, 5],   // Quý: Ngọ – Tỵ
};

/** Hỏa Tinh / Linh Tinh khởi theo tam hợp chi năm (đếm theo giờ) */
export const HOA_LINH_START: Record<number, [number, number]> = {
  0: [1, 3],   // Dần Ngọ Tuất: Sửu – Mão
  1: [2, 10],  // Thân Tý Thìn: Dần – Tuất
  2: [3, 10],  // Tỵ Dậu Sửu: Mão – Tuất
  3: [9, 10],  // Hợi Mão Mùi: Dậu – Tuất
};

/** Đào Hoa (Hàm Trì) theo tam hợp chi năm */
export const DAO_HOA_POS: Record<number, number> = {
  0: 3,  // Dần Ngọ Tuất → Mão
  1: 9,  // Thân Tý Thìn → Dậu
  2: 6,  // Tỵ Dậu Sửu → Ngọ
  3: 0,  // Hợi Mão Mùi → Tý
};

/** Thiên Mã theo tam hợp chi năm (luôn ở Tứ Sinh) */
export const THIEN_MA_POS: Record<number, number> = {
  0: 8,  // Dần Ngọ Tuất → Thân
  1: 2,  // Thân Tý Thìn → Dần
  2: 11, // Tỵ Dậu Sửu → Hợi
  3: 5,  // Hợi Mão Mùi → Tỵ
};

/** Cung khởi tiểu hạn (1 tuổi) theo tam hợp chi năm */
export const TIEU_HAN_START: Record<number, number> = {
  0: 4,  // Dần Ngọ Tuất → Thìn
  1: 10, // Thân Tý Thìn → Tuất
  2: 7,  // Tỵ Dậu Sửu → Mùi
  3: 1,  // Hợi Mão Mùi → Sửu
};

/** Cô Thần / Quả Tú theo nhóm mùa của chi năm */
export const CO_THAN_POS = [2, 5, 8, 11];  // Dần, Tỵ, Thân, Hợi
export const QUA_TU_POS = [10, 1, 4, 7];   // Tuất, Sửu, Thìn, Mùi

/** Triệt theo can năm → cặp chi bị án ngữ */
export const TRIET_POS: Record<number, [number, number]> = {
  0: [8, 9], 5: [8, 9],  // Giáp, Kỷ: Thân – Dậu
  1: [6, 7], 6: [6, 7],  // Ất, Canh: Ngọ – Mùi
  2: [4, 5], 7: [4, 5],  // Bính, Tân: Thìn – Tỵ
  3: [2, 3], 8: [2, 3],  // Đinh, Nhâm: Dần – Mão
  4: [0, 1], 9: [0, 1],  // Mậu, Quý: Tý – Sửu
};

/** Mệnh chủ tinh — tra theo địa chi cung Mệnh */
export const MENH_CHU = [
  'Tham Lang', 'Cự Môn', 'Lộc Tồn', 'Văn Khúc', 'Liêm Trinh', 'Vũ Khúc',
  'Phá Quân', 'Vũ Khúc', 'Liêm Trinh', 'Văn Khúc', 'Lộc Tồn', 'Cự Môn',
];

/** Thân chủ tinh — tra theo địa chi năm sinh */
export const THAN_CHU = [
  'Hỏa Tinh', 'Thiên Tướng', 'Thiên Lương', 'Thiên Đồng', 'Văn Xương', 'Thiên Cơ',
  'Linh Tinh', 'Thiên Tướng', 'Thiên Lương', 'Thiên Đồng', 'Văn Xương', 'Thiên Cơ',
];

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

/** Nhóm tam hợp của một chi: 0=Dần Ngọ Tuất, 1=Thân Tý Thìn, 2=Tỵ Dậu Sửu, 3=Hợi Mão Mùi */
export function tamHopGroup(chiIndex: number): number {
  if ([2, 6, 10].includes(chiIndex)) return 0;
  if ([8, 0, 4].includes(chiIndex)) return 1;
  if ([5, 9, 1].includes(chiIndex)) return 2;
  return 3;
}

/** Nhóm mùa của chi năm (dùng an Cô Thần – Quả Tú) */
export function seasonGroup(chiIndex: number): number {
  if ([11, 0, 1].includes(chiIndex)) return 0;
  if ([2, 3, 4].includes(chiIndex)) return 1;
  if ([5, 6, 7].includes(chiIndex)) return 2;
  return 3;
}
