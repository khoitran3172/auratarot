// Types cho tính năng Lá Số Tử Vi (Tử Vi Đẩu Số — Nam phái Việt Nam)

export type Brightness = 'M' | 'V' | 'D' | 'B' | 'H'; // Miếu/Vượng/Đắc/Bình/Hãm
export type StarKind = 'chinh_tinh' | 'phu_cat' | 'phu_sat' | 'dao_hoa' | 'khong_vong';
export type Transformation = 'loc' | 'quyen' | 'khoa' | 'ky'; // Tứ Hóa
export type ElementName = 'Thuy' | 'Moc' | 'Kim' | 'Tho' | 'Hoa';

export interface StarInstance {
  id: string;              // "TuVi", "DaoHoa"...
  name: string;            // "Tử Vi"
  kind: StarKind;
  brightness?: Brightness; // chỉ chính tinh
  transformation?: Transformation; // nếu bị Tứ Hóa hóa
}

export interface PalaceScore {
  raw: number;      // C_cung ∈ [-5, +5]
  score100: number; // 0..100
  stars5: number;   // 0..5 ⭐
  label: string;    // "Rất tốt".."Xấu"
}

export interface Palace {
  index: number;        // 0..11 vị trí trong vòng 12 cung (0 = Mệnh)
  name: string;         // "Mệnh", "Phụ Mẫu"...
  branchIndex: number;  // địa chi cung đóng (0=Tý)
  branchName: string;   // "Mão"
  canName: string;      // can của cung
  isBody: boolean;      // cung Thân
  stars: StarInstance[];
  hasTuan: boolean;
  hasTriet: boolean;
  majorPeriod: { fromAge: number; toAge: number };
  score: PalaceScore;
  interpretations: string[];
}

export interface TuViInput {
  day: number;
  month: number;
  year: number;
  hour: number;      // 0..23
  gender: 'nam' | 'nu';
}

export interface TuViChartResult {
  input: TuViInput;
  lunar: { day: number; month: number; year: number; leap: boolean };
  yearCanChi: string;
  monthCanChi: string;
  dayCanChi: string;
  hourCanChi: string;
  hourBranchIndex: number;
  menhBranchIndex: number;
  thanBranchIndex: number;
  cuc: { element: ElementName; number: 2 | 3 | 4 | 5 | 6; name: string };
  isYang: boolean;   // Dương Nam / Âm Nữ → đại hạn đi thuận
  palaces: Palace[]; // 12 cung, palaces[0] = Mệnh
  warnings: string[];
}
