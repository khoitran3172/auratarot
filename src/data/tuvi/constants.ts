import { Brightness, Transformation, ElementName } from './types';

// Thứ tự 12 cung, đi NGHỊCH từ Mệnh
export const PALACE_NAMES = [
  'Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc',
  'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ',
];

export const CHI_NAMES = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// 14 chính tinh: tên hiển thị
export const CHINH_TINH: Record<string, string> = {
  TuVi: 'Tử Vi', ThienCo: 'Thiên Cơ', ThaiDuong: 'Thái Dương', VuKhuc: 'Vũ Khúc',
  ThienDong: 'Thiên Đồng', LiemTrinh: 'Liêm Trinh', ThienPhu: 'Thiên Phủ', ThaiAm: 'Thái Âm',
  ThamLang: 'Tham Lang', CuMon: 'Cự Môn', ThienTuong: 'Thiên Tướng', ThienLuong: 'Thiên Lương',
  ThatSat: 'Thất Sát', PhaQuan: 'Phá Quân',
};

// Tên phụ tinh
export const PHU_TINH: Record<string, string> = {
  TaPhu: 'Tả Phụ', HuuBat: 'Hữu Bật', VanXuong: 'Văn Xương', VanKhuc: 'Văn Khúc',
  ThienKhoi: 'Thiên Khôi', ThienViet: 'Thiên Việt', LocTon: 'Lộc Tồn',
  KinhDuong: 'Kình Dương', DaLa: 'Đà La', HoaTinh: 'Hỏa Tinh', LinhTinh: 'Linh Tinh',
  DiaKhong: 'Địa Không', DiaKiep: 'Địa Kiếp',
  DaoHoa: 'Đào Hoa', HongLoan: 'Hồng Loan', ThienHy: 'Thiên Hỷ', ThienDieu: 'Thiên Diêu',
};

export const TRANSFORMATION_NAMES: Record<Transformation, string> = {
  loc: 'Hóa Lộc', quyen: 'Hóa Quyền', khoa: 'Hóa Khoa', ky: 'Hóa Kỵ',
};

export const CUC_NAMES: Record<number, string> = {
  2: 'Thủy Nhị Cục', 3: 'Mộc Tam Cục', 4: 'Kim Tứ Cục', 5: 'Thổ Ngũ Cục', 6: 'Hỏa Lục Cục',
};

export const ELEMENT_TO_CUC: Record<ElementName, 2 | 3 | 4 | 5 | 6> = {
  Thuy: 2, Moc: 3, Kim: 4, Tho: 5, Hoa: 6,
};

// Nạp âm ngũ hành của 30 cặp lục thập hoa giáp (floor(sexagenary/2) = 0..29)
export const NAP_AM_ELEMENT: ElementName[] = [
  'Kim', 'Hoa', 'Moc', 'Tho', 'Kim', 'Hoa', 'Thuy', 'Tho', 'Kim', 'Moc',
  'Thuy', 'Tho', 'Hoa', 'Moc', 'Thuy', 'Kim', 'Hoa', 'Moc', 'Tho', 'Kim',
  'Hoa', 'Thuy', 'Tho', 'Kim', 'Moc', 'Thuy', 'Tho', 'Hoa', 'Moc', 'Thuy',
];

// Bảng độ sáng 14 chính tinh × 12 cung (thứ tự Tý..Hợi) — nguồn tracuutuvi.com
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

// Cực tính bản chất N ∈ [-1,+1] của 14 chính tinh
export const STAR_POLARITY: Record<string, number> = {
  TuVi: 1.0, ThienPhu: 1.0, ThaiDuong: 0.8, ThaiAm: 0.8, ThienDong: 0.8,
  ThienLuong: 0.8, ThienTuong: 0.8, VuKhuc: 0.6, ThienCo: 0.6,
  ThamLang: -0.3, LiemTrinh: -0.6, CuMon: -0.6, ThatSat: -0.7, PhaQuan: -0.8,
};

export const BRIGHTNESS_MAGNITUDE: Record<Brightness, number> = {
  M: 1.0, V: 0.8, D: 0.6, B: 0.4, H: 0.1,
};

export const BRIGHTNESS_NAMES: Record<Brightness, string> = {
  M: 'Miếu', V: 'Vượng', D: 'Đắc', B: 'Bình', H: 'Hãm',
};

// Phụ tinh cát (cộng điểm) và sát tinh (trừ điểm)
export const CAT_PHU_TINH = ['TaPhu', 'HuuBat', 'VanXuong', 'VanKhuc', 'ThienKhoi', 'ThienViet', 'LocTon'];
export const SAT_TINH = ['KinhDuong', 'DaLa', 'HoaTinh', 'LinhTinh', 'DiaKhong', 'DiaKiep'];

// Tứ Hóa theo can năm: [Lộc, Quyền, Khoa, Kỵ] → id chính/phụ tinh
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

// Lộc Tồn theo can năm → chi index
export const LOC_TON_POS: Record<number, number> = {
  0: 2, 1: 3, 2: 5, 3: 6, 4: 5, 5: 6, 6: 8, 7: 9, 8: 11, 9: 0,
};

// Thiên Khôi / Thiên Việt theo can năm → [khôi, việt] chi index
export const KHOI_VIET_POS: Record<number, [number, number]> = {
  0: [1, 7],  // Giáp: Sửu, Mùi
  4: [1, 7],  // Mậu: Sửu, Mùi
  1: [0, 8],  // Ất: Tý, Thân
  5: [0, 8],  // Kỷ: Tý, Thân
  2: [11, 9], // Bính: Hợi, Dậu
  3: [11, 9], // Đinh: Hợi, Dậu
  6: [6, 2],  // Canh: Ngọ, Dần
  7: [6, 2],  // Tân: Ngọ, Dần
  8: [3, 5],  // Nhâm: Mão, Tỵ
  9: [3, 5],  // Quý: Mão, Tỵ
};

// Hỏa Tinh / Linh Tinh khởi theo tam hợp chi năm → [hỏa khởi, linh khởi] (đếm theo giờ)
// nhóm tam hợp: 0=Dần Ngọ Tuất, 1=Thân Tý Thìn, 2=Tỵ Dậu Sửu, 3=Hợi Mão Mùi
export const HOA_LINH_START: Record<number, [number, number]> = {
  0: [1, 3],   // Dần Ngọ Tuất: Sửu, Mão
  1: [2, 10],  // Thân Tý Thìn: Dần, Tuất
  2: [3, 10],  // Tỵ Dậu Sửu: Mão, Tuất
  3: [9, 10],  // Hợi Mão Mùi: Dậu, Tuất
};

// Đào Hoa (Hàm Trì) theo tam hợp chi năm → chi index
export const DAO_HOA_POS: Record<number, number> = {
  0: 3,  // Dần Ngọ Tuất → Mão
  1: 9,  // Thân Tý Thìn → Dậu
  2: 6,  // Tỵ Dậu Sửu → Ngọ
  3: 0,  // Hợi Mão Mùi → Tý
};

// Triệt theo can năm → cặp chi [a,b] mà Triệt án ngữ
export const TRIET_POS: Record<number, [number, number]> = {
  0: [8, 9], 5: [8, 9],  // Giáp, Kỷ: Thân-Dậu
  1: [6, 7], 6: [6, 7],  // Ất, Canh: Ngọ-Mùi
  2: [4, 5], 7: [4, 5],  // Bính, Tân: Thìn-Tỵ
  3: [2, 3], 8: [2, 3],  // Đinh, Nhâm: Dần-Mão
  4: [0, 1], 9: [0, 1],  // Mậu, Quý: Tý-Sửu
};

// Nhóm tam hợp của một chi (0..3)
export function tamHopGroup(chiIndex: number): number {
  // Dần(2)Ngọ(6)Tuất(10)=0; Thân(8)Tý(0)Thìn(4)=1; Tỵ(5)Dậu(9)Sửu(1)=2; Hợi(11)Mão(3)Mùi(7)=3
  if ([2, 6, 10].includes(chiIndex)) return 0;
  if ([8, 0, 4].includes(chiIndex)) return 1;
  if ([5, 9, 1].includes(chiIndex)) return 2;
  return 3;
}
