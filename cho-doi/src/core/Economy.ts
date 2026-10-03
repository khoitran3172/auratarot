// Kinh tế: tin loa phường, giá nhập/bán trong ngày, mua hàng, thắp nhang, hàng hư.
import { isEarlyMonth, isHoliday, isMidAutumn } from './Calendar';
import { DATA, originById, type GameData } from './Data';
import { addMoney, addVia, round1 } from './GameState';
import { Rng } from './Rng';
import type { GameState, ItemId, NewsDef } from './types';

export interface DayContext {
  news: NewsDef;
  buyPrice: Record<ItemId, number>;
  sellPrice: Record<ItemId, number>;
  spawnMod: number;
  holiday: boolean;
  midAutumn: boolean;
  earlyMonth: boolean;
  /** Giờ tới chợ đầu mối (phút từ nửa đêm). Dân quê lên phố tới sớm 30 phút. */
  wholesaleMin: number;
}

/** Tin loa phường: chọn ngẫu nhiên theo seed + ngày, mở lại save vẫn ra đúng tin đó. */
export function rollNews(state: GameState, data: GameData = DATA): NewsDef {
  return Rng.forDay(state.seed, state.dayCount, 1).pick(data.news);
}

export function buildDayContext(state: GameState, news: NewsDef, data: GameData = DATA): DayContext {
  const date = { day: state.day, month: state.month };
  const holiday = isHoliday(date, data);
  const origin = originById(data, state.player.origin);
  const buyPrice: Record<ItemId, number> = {};
  const sellPrice: Record<ItemId, number> = {};
  for (const it of data.items) {
    // Giá nhập = gốc × tin tức × ưu đãi xuất thân
    buyPrice[it.id] = round1(it.buy * (news.buyMod?.[it.id] ?? 1) * (origin.buyMul ?? 1));
    // Giá bán = gốc × tin tức × ngày lễ (Mùng 1, Rằm: rau +20%)
    const holidayMod = holiday ? ((data.config.holiday.sellMod as Record<string, number>)[it.id] ?? 1) : 1;
    sellPrice[it.id] = round1(it.sell * (news.sellMod?.[it.id] ?? 1) * holidayMod);
  }
  return {
    news,
    buyPrice,
    sellPrice,
    spawnMod: news.spawnMod ?? 1,
    holiday,
    midAutumn: isMidAutumn(date),
    earlyMonth: isEarlyMonth(date, data),
    wholesaleMin: data.config.time.wholesaleMin - (origin.wholesaleEarlyMin ?? 0),
  };
}

export type Cart = Record<ItemId, number>;

export function cartCost(cart: Cart, ctx: DayContext): number {
  return round1(Object.entries(cart).reduce((sum, [id, q]) => sum + (ctx.buyPrice[id] ?? 0) * q, 0));
}

/** Số lượng mua phải là bội số của bước mua (rau 5 bó, cà 2 ký, thịt 1 ký). */
export function isValidCart(cart: Cart, data: GameData = DATA): boolean {
  return Object.entries(cart).every(([id, q]) => {
    const it = data.items.find((i) => i.id === id);
    return !!it && q >= 0 && Number.isInteger(q) && q % it.buyStep === 0;
  });
}

/** Mua hàng. Trả về tiền đã chi, hoặc null nếu không đủ tiền / giỏ không hợp lệ. */
export function purchase(state: GameState, cart: Cart, ctx: DayContext, data: GameData = DATA): number | null {
  if (!isValidCart(cart, data)) return null;
  const cost = cartCost(cart, ctx);
  if (cost > state.money + 1e-9) return null;
  addMoney(state, -cost);
  for (const [id, q] of Object.entries(cart)) state.stock[id] = (state.stock[id] ?? 0) + q;
  return cost;
}

/** Thắp nhang ông Địa: 2k, Vía +8, mỗi ngày 1 lần (cờ lưu ở DayRun). */
export function burnIncense(state: GameState, data: GameData = DATA): boolean {
  const c = data.config.incense;
  if (state.money < c.cost) return false;
  addMoney(state, -c.cost);
  addVia(state, c.via);
  return true;
}

export interface SpoilResult { spoiled: Record<ItemId, number>; value: number }

/** Hàng hư qua đêm: số hư = làm tròn xuống (tồn × tỷ lệ hư). Rau muống hư 100%. */
export function spoilOvernight(state: GameState, ctx: DayContext, data: GameData = DATA): SpoilResult {
  const spoiled: Record<ItemId, number> = {};
  let value = 0;
  for (const it of data.items) {
    const have = state.stock[it.id] ?? 0;
    const n = Math.floor(have * it.spoilRate + 1e-9);
    spoiled[it.id] = n;
    state.stock[it.id] = have - n;
    value += n * (ctx.buyPrice[it.id] ?? it.buy);
  }
  return { spoiled, value: round1(value) };
}
