// Kiểu dữ liệu dùng chung cho core. Không import Phaser ở bất kỳ file core nào.

export type ItemId = string;

export interface ItemDef {
  id: ItemId; name: string; unit: string; buy: number; sell: number;
  spoilRate: number; buyStep: number; wiltAfterMinute?: number; color?: string;
}

export type CustomerFlag = 'picky' | 'special' | 'easy' | 'credit' | 'rush' | 'morning' | 'kid';

export interface CustomerDef {
  id: string; name: string; wants: ItemId[]; qty: [number, number];
  discount: number; patienceSec: number; weight: number;
  flags: CustomerFlag[];
  look: { bodyColor: string; hat: 'non' | 'cap' | 'helmet' | 'none'; scale?: number };
  // Trường mở rộng (đều tuỳ chọn, chỉnh trong customers.json)
  holidayWeight?: number;
  window?: number[];
  windowWeight?: number;
  vip?: boolean;
  flatterRate?: number;
  holdRate?: number;
  leaveRep?: number;
  onionRep?: number;
  praise?: boolean;
  tipChance?: number;
  tip?: number;
  sobLeaves?: boolean;
}

export interface ReactLines { success: string[]; fail: string[] }

export interface DialogueSet {
  goi: string;
  xung: { m: string; f: string };
  toi: { m: string; f: string };
  greet: string[];
  wilted?: string[];
  react: Record<string, ReactLines>;
  leave: string[];
}

export interface NewsDef {
  id: string; text: string;
  buyMod?: Record<ItemId, number>;
  sellMod?: Record<ItemId, number>;
  spawnMod?: number;
  neutral?: boolean;
}

export interface OriginDef {
  id: string; name: string; money: number; rep: number; deo: number;
  story: string; perk: string;
  spawnMulFirstDays?: number; firstDays?: number;
  buyMul?: number; wholesaleEarlyMin?: number;
  livestream?: boolean; stamina?: boolean;
}

export type Gender = 'm' | 'f';
export type Theme = 'auto' | 'light' | 'dark';

export interface Settings { music: number; sfx: number; speed: number; theme: Theme }

export interface Debt { who: string; amount: number; sinceDay: number; sinceMonth?: number }

export interface GameState {
  version: number;
  seed: number;
  /** Ngày âm lịch trong tháng (1–30) */
  day: number;
  month: number;
  /** Số ngày đã chơi, bắt đầu từ 1 (dùng cho cốt truyện và lịch thu phí giang hồ) */
  dayCount: number;
  money: number;
  via: number;
  rep: number;
  deo: number;
  stock: Record<ItemId, number>;
  debts: Debt[];
  loanOwed: number;
  karaokeTomorrow: boolean;
  storyFlags: Record<string, boolean>;
  /** Tình làng nghĩa xóm: điểm quan hệ với từng NPC hàng xóm */
  relations: Record<string, number>;
  player: { name: string; gender: Gender; origin: string; petName: string };
  settings: Settings;
}
