// Shared types for the natal chart (bản đồ sao) feature.

export type PlanetId =
  | 'sun' | 'moon' | 'mercury' | 'venus' | 'mars'
  | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';

export type SignId =
  | 'aries' | 'taurus' | 'gemini' | 'cancer' | 'leo' | 'virgo'
  | 'libra' | 'scorpio' | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export type HouseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type AspectType = 'conjunction' | 'sextile' | 'square' | 'trine' | 'opposition';

export interface PlanetInfo {
  id: PlanetId;
  name: string; // tên tiếng Việt, vd "Mặt Trời"
  englishName: string;
  glyph: string; // ký hiệu unicode, vd "☉"
  themes: string; // chủ đề cốt lõi hành tinh đại diện, 1 câu ngắn
}

export interface SignInfo {
  id: SignId;
  name: string; // tên tiếng Việt, vd "Bạch Dương"
  englishName: string;
  glyph: string; // vd "♈"
  element: 'Lửa' | 'Đất' | 'Khí' | 'Nước';
  modality: 'Tiên phong' | 'Kiên định' | 'Linh hoạt';
  ruler: string; // hành tinh chủ quản, tiếng Việt
  traits: string; // đặc trưng tính cách, 2-3 câu
}

export interface HouseInfo {
  number: HouseNumber;
  name: string; // vd "Nhà 1 - Bản Ngã"
  domain: string; // lĩnh vực cuộc sống nhà này cai quản, 2-3 câu
}

// Một mục luận giải "hành tinh tại cung"
export interface PlanetInSignReading {
  title: string; // vd "Mặt Trời tại Bạch Dương"
  description: string; // luận giải chính, 3-5 câu, giọng thần bí ấm áp
  strengths: string; // điểm mạnh, 1-2 câu
  challenges: string; // thách thức, 1-2 câu
  advice: string; // lời khuyên, 1-2 câu
}

// Một mục luận giải "hành tinh tại nhà"
export interface PlanetInHouseReading {
  title: string; // vd "Mặt Trời tại Nhà 1"
  description: string; // 3-4 câu
  advice: string; // 1-2 câu
}

// Luận giải cung mọc (Ascendant)
export interface AscendantReading {
  title: string; // vd "Cung Mọc Bạch Dương"
  description: string; // 4-6 câu về diện mạo bên ngoài, ấn tượng đầu, cách tiếp cận đời sống
  advice: string;
}

export interface AspectInfo {
  type: AspectType;
  name: string; // tên tiếng Việt, vd "Góc Hợp (Conjunction)"
  angle: number; // 0, 60, 90, 120, 180
  orb: number; // độ dung sai
  nature: 'hài hòa' | 'thách thức' | 'trung tính';
  meaning: string; // bản chất góc chiếu này, 2-3 câu
}

// Mô tả năng lượng từng hành tinh khi tham gia góc chiếu (để ghép luận giải cặp)
export interface PlanetAspectEnergy {
  planet: PlanetId;
  energy: string; // cụm danh từ ngắn, vd "bản ngã và sức sống cốt lõi"
}

export interface BirthPlace {
  name: string; // vd "Hà Nội"
  lat: number;
  lon: number;
}
