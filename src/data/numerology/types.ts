// Shared types for the numerology (thần số học) feature — Pythagorean system.

// Values a reduced number can take (master numbers 11/22/33 are preserved)
export type NumerologyNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

// The six core indicators
export type CoreNumberKind =
  | 'lifePath'     // Số Đường Đời — từ ngày sinh
  | 'expression'   // Số Sứ Mệnh — từ họ tên đầy đủ
  | 'soulUrge'     // Số Linh Hồn — nguyên âm trong tên
  | 'personality'  // Số Nhân Cách — phụ âm trong tên
  | 'birthday'     // Số Ngày Sinh — ngày trong tháng
  | 'maturity';    // Số Trưởng Thành — Đường Đời + Sứ Mệnh

// Một mục luận giải cho một con số ở một chỉ số cụ thể
export interface NumberReading {
  title: string;       // vd "Số Đường Đời 7"
  description: string; // 3-5 câu luận giải, giọng thần bí ấm áp, xưng "bạn"
  strengths: string;   // 1-2 câu điểm mạnh
  challenges: string;  // 1-2 câu thách thức
  advice: string;      // 1-2 câu lời khuyên
}

// Luận giải ngắn (chu kỳ, thách thức...)
export interface ShortReading {
  title: string;
  description: string; // 2-4 câu
  advice: string;
}

// Mũi tên trong biểu đồ ngày sinh Lo Shu
export type ArrowId =
  | 'determination'   // 1-5-9
  | 'spirituality'    // 3-5-7
  | 'intellect'       // 3-6-9
  | 'emotionalBalance'// 2-5-8
  | 'practicality'    // 1-4-7
  | 'planning'        // 1-2-3
  | 'willpower'       // 4-5-6
  | 'action';         // 7-8-9

export interface ArrowReading {
  name: string;        // tên tiếng Việt của mũi tên
  digits: [number, number, number];
  full: string;        // luận giải khi ĐỦ cả 3 số, 2-3 câu
  empty: string;       // luận giải khi TRỐNG cả 3 số (mũi tên yếu), 2-3 câu
}

export type KarmicDebtNumber = 13 | 14 | 16 | 19;
