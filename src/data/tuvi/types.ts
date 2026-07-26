// Types cho tính năng Lá Số Tử Vi (Tử Vi Đẩu Số — Nam phái Việt Nam)

export type Brightness = 'M' | 'V' | 'D' | 'B' | 'H'; // Miếu/Vượng/Đắc/Bình/Hãm
export type Transformation = 'loc' | 'quyen' | 'khoa' | 'ky'; // Tứ Hóa
export type ElementName = 'Thuy' | 'Moc' | 'Kim' | 'Tho' | 'Hoa';

/** Nhóm hiển thị của sao (quyết định vị trí trong ô cung) */
export type StarKind =
  | 'chinh_tinh'        // 14 chính tinh — dòng trên, chữ lớn
  | 'phu_tinh'          // phụ tinh lẻ (Lục Cát, Lục Sát, sao lẻ)
  | 'dao_hoa'           // nhóm đào hoa / tình duyên
  | 'vong_truong_sinh'  // vòng Trường Sinh (12) — mép dưới ô
  | 'vong_thai_tue'     // vòng Thái Tuế (12)
  | 'vong_bac_si';      // vòng Bác Sĩ (12)

/** Tính chất cát – hung của sao (quyết định màu + điểm) */
export type StarNature = 'cat' | 'hung' | 'trung';

export interface StarInstance {
  id: string;              // "TuVi", "TruongSinh", "DaoHoa"...
  name: string;            // "Tử Vi"
  kind: StarKind;
  nature: StarNature;
  element?: ElementName;   // ngũ hành của sao (dùng tô màu theo quy ước cổ)
  brightness?: Brightness; // chỉ chính tinh có
  transformation?: Transformation; // nếu bị Tứ Hóa
}

export interface PalaceScore {
  raw: number;      // C_cung ∈ [-5, +5]
  score100: number; // 0..100
  stars5: number;   // 0..5 ★
  label: string;    // "Rất tốt".."Xấu"
}

export interface Palace {
  index: number;        // 0..11 vị trí trong vòng 12 cung (0 = Mệnh)
  name: string;         // "Mệnh", "Phụ Mẫu"...
  branchIndex: number;  // địa chi cung đóng (0=Tý)
  branchName: string;   // "Mão"
  canName: string;      // can của cung
  isBody: boolean;      // cung Thân an tại đây
  stars: StarInstance[];
  hasTuan: boolean;
  hasTriet: boolean;
  majorPeriod: { fromAge: number; toAge: number }; // đại hạn 10 năm
  minorAges: number[];  // các tuổi âm mà tiểu hạn rơi vào cung này (trong 100 năm)
  score: PalaceScore;
  interpretations: string[];
}

export interface TuViInput {
  day: number;
  month: number;
  year: number;
  hour: number;      // 0..23
  gender: 'nam' | 'nu';
  name?: string;     // họ tên đương số (tùy chọn)
}

/** Quan hệ sinh khắc giữa bản Mệnh (nạp âm) và Cục */
export interface MenhCucRelation {
  label: string;   // "Cục sinh Mệnh", "Bình hòa"...
  verdict: 'tot' | 'kha' | 'binh' | 'xau';
  meaning: string; // 1-2 câu luận
}

export interface TuViChartResult {
  input: TuViInput;
  lunar: { day: number; month: number; year: number; leap: boolean };
  yearCanChi: string;
  monthCanChi: string;
  dayCanChi: string;
  hourCanChi: string;
  hourBranchIndex: number;
  hourBranchName: string;
  menhBranchIndex: number;
  thanBranchIndex: number;
  cuc: { element: ElementName; number: 2 | 3 | 4 | 5 | 6; name: string };
  banMenh: { name: string; element: ElementName };   // nạp âm năm sinh, vd "Lộ Bàng Thổ"
  menhCuc: MenhCucRelation;                          // sinh khắc Mệnh – Cục
  menhChu: string;                                   // Mệnh chủ tinh
  thanChu: string;                                   // Thân chủ tinh
  isYang: boolean;        // Dương Nam / Âm Nữ → đại hạn & vòng sao đi thuận
  amDuongLabel: string;   // "Dương Nam", "Âm Nữ"...
  thuanLy: boolean;       // âm dương thuận lý (tuổi vs cung Mệnh)
  currentAge: number;     // tuổi âm hiện tại
  palaces: Palace[];      // 12 cung, palaces[0] = Mệnh
  tuanPair: [number, number];   // 2 chi bị Tuần án ngữ
  trietPair: [number, number];  // 2 chi bị Triệt án ngữ
  warnings: string[];
}
