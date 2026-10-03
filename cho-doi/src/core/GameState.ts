// GameState duy nhất. Chỉ thay đổi qua các hàm trong core.
import { DATA, originById, type GameData } from './Data';
import { clampRep, clampVia } from './Luck';
import type { GameState, Gender, Settings } from './types';

export const SAVE_VERSION = 1;

export const DEFAULT_SETTINGS: Settings = { music: 0.5, sfx: 0.8, speed: 1, theme: 'auto' };

export interface NewGameInput {
  name: string;
  gender: Gender;
  origin: string;
  petName: string;
  seed?: number;
  settings?: Settings;
}

export function createGame(input: NewGameInput, data: GameData = DATA): GameState {
  const o = originById(data, input.origin);
  const start = data.config.start;
  const storyFlags: Record<string, boolean> = {};
  if (o.livestream) storyFlags.livestreamUnlocked = true; // Bản sau mới dùng, MVP chỉ ghi cờ
  return {
    version: SAVE_VERSION,
    seed: input.seed ?? (Math.floor(Math.random() * 2 ** 31) >>> 0),
    day: start.day,
    month: start.month,
    dayCount: 1,
    money: o.money,
    via: start.via,
    rep: o.rep ?? start.rep,
    deo: o.deo ?? start.deo,
    stock: Object.fromEntries(data.items.map((i) => [i.id, 0])),
    debts: [],
    loanOwed: 0,
    karaokeTomorrow: false,
    storyFlags,
    relations: { bachin: 50, anhhai: 30 },
    player: { name: input.name.trim(), gender: input.gender, origin: o.id, petName: input.petName.trim() || 'Mướp' },
    settings: { ...DEFAULT_SETTINGS, ...input.settings },
  };
}

// --- Thay đổi chỉ số: luôn đi qua đây để kẹp giới hạn ---

/** Tiền không bao giờ âm. Trả về số tiền thực sự thay đổi. */
export function addMoney(s: GameState, delta: number): number {
  const before = s.money;
  s.money = Math.max(0, round1(s.money + delta));
  return round1(s.money - before);
}

export function addVia(s: GameState, delta: number): number {
  const before = s.via;
  s.via = clampVia(s.via + delta);
  return s.via - before;
}

export function addRep(s: GameState, delta: number): number {
  const before = s.rep;
  s.rep = clampRep(round1(s.rep + delta));
  return round1(s.rep - before);
}

export function addDeo(s: GameState, delta: number): number {
  s.deo = Math.max(0, s.deo + delta);
  return delta;
}

export function addRelation(s: GameState, who: string, delta: number): void {
  s.relations[who] = Math.max(0, Math.min(100, (s.relations[who] ?? 50) + delta));
}

export function totalStock(s: GameState): number {
  return Object.values(s.stock).reduce((a, b) => a + b, 0);
}

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

// --- Save có version + migrate để đổi schema không làm hỏng save cũ ---

type Migration = (raw: Record<string, unknown>) => Record<string, unknown>;

/** MIGRATIONS[n] nâng save từ version n lên n+1. Thêm hàm mới ở đây khi đổi schema. */
const MIGRATIONS: Record<number, Migration> = {
  0: (raw) => ({ ...raw, relations: raw.relations ?? { bachin: 50, anhhai: 30 }, dayCount: raw.dayCount ?? 1, version: 1 }),
};

export function migrate(raw: unknown, data: GameData = DATA): GameState | null {
  if (!raw || typeof raw !== 'object') return null;
  let obj = { ...(raw as Record<string, unknown>) };
  let v = typeof obj.version === 'number' ? obj.version : 0;
  if (v > SAVE_VERSION) return null; // Save từ bản mới hơn, không đọc được
  while (v < SAVE_VERSION) {
    const step = MIGRATIONS[v];
    if (!step) return null;
    obj = step(obj);
    v = obj.version as number;
  }
  const s = obj as unknown as GameState;
  if (!s.player || typeof s.money !== 'number') return null;
  // Món mới thêm vào items.json thì save cũ có tồn kho 0
  for (const it of data.items) if (typeof s.stock[it.id] !== 'number') s.stock[it.id] = 0;
  s.settings = { ...DEFAULT_SETTINGS, ...s.settings };
  return s;
}
