// Khách NPC: chọn khách theo trọng số, tạo đơn hàng, tính khoảng cách giữa hai lượt khách.
import { DATA, type GameData } from './Data';
import type { Rng } from './Rng';
import type { CustomerDef, ItemId } from './types';

export interface SpawnContext {
  minute: number;
  holiday: boolean;
  via: number;
  stock: Record<ItemId, number>;
  /** Hệ số buff khách VIP của pet (mèo: 1.2) */
  petVipMul: number;
}

const inStock = (stock: Record<ItemId, number>, id: ItemId) => (stock[id] ?? 0) > 0;

/** Trọng số gốc theo luật riêng từng khách (ngày lễ, khung giờ). */
export function baseWeight(def: CustomerDef, ctx: Pick<SpawnContext, 'minute' | 'holiday'>): number {
  // Bà Bảy Chùa chỉ đến Mùng 1, Rằm
  if (def.holidayWeight !== undefined) return ctx.holiday ? def.holidayWeight : def.weight;
  // Chị Lan chỉ đến 6h30–7h30
  if (def.window && def.windowWeight !== undefined) {
    const [a, b] = def.window;
    return ctx.minute >= a && ctx.minute < b ? def.windowWeight : def.weight;
  }
  return def.weight;
}

export function customerWeight(def: CustomerDef, ctx: SpawnContext, data: GameData = DATA): number {
  let w = baseWeight(def, ctx);
  if (w <= 0) return 0;
  // Khách VIP: × (1 + (Vía − 50) / 100), pet mèo × 1.2
  if (def.vip) w *= Math.max(0, 1 + (ctx.via - 50) / data.config.vip.viaDiv) * ctx.petVipMul;
  // Sạp hết mọi món khách muốn: × 0.2 (khách sẽ chuyển sang món khác)
  if (!def.wants.some((id) => inStock(ctx.stock, id))) w *= data.config.vip.noStockMul;
  return w;
}

export function pickCustomer(rng: Rng, ctx: SpawnContext, data: GameData = DATA): CustomerDef | null {
  if (!Object.keys(ctx.stock).some((id) => inStock(ctx.stock, id))) return null;
  return rng.weighted(data.customers.map((c) => ({ value: c, weight: customerWeight(c, ctx, data) })));
}

export interface Order {
  itemId: ItemId;
  qty: number;
  unitPrice: number;
  /** giáNiêmYết = giáBán × sốLượng × (xả hàng ? 0.6 : 1) */
  list: number;
  /** giáKháchTrả = giáNiêmYết × (1 − mứcĐòiBớt × random(0.6, 1)) */
  offer: number;
  /** chênhLệch = giáNiêmYết − giáKháchTrả */
  gap: number;
  wilted: boolean;
  /** Khách đổi sang món khác vì món muốn đã hết */
  switched: boolean;
}

export interface OrderContext {
  stock: Record<ItemId, number>;
  sellPrice: Record<ItemId, number>;
  clearance: boolean;
  minute: number;
}

export function makeOrder(rng: Rng, def: CustomerDef, ctx: OrderContext, data: GameData = DATA): Order | null {
  let choices = def.wants.filter((id) => inStock(ctx.stock, id));
  let switched = false;
  if (choices.length === 0) {
    choices = Object.keys(ctx.stock).filter((id) => inStock(ctx.stock, id));
    switched = true;
  }
  if (choices.length === 0) return null;
  const itemId = rng.pick(choices);
  const qty = Math.max(1, Math.min(rng.int(def.qty[0], def.qty[1]), ctx.stock[itemId]));
  const unitPrice = ctx.sellPrice[itemId];
  const cfg = data.config;
  const list = Math.round(unitPrice * qty * (ctx.clearance ? cfg.clearance.priceMul : 1));
  // Lúc xả hàng khách không trả giá
  let offer = ctx.clearance ? list : Math.round(list * (1 - def.discount * rng.range(0.6, 1)));
  // Rau muống sau 14h bị héo: khách kỹ tính trả thấp hơn 15%
  const item = data.items.find((i) => i.id === itemId);
  const wilted = !!item?.wiltAfterMinute && ctx.minute >= item.wiltAfterMinute;
  if (wilted && !ctx.clearance && def.flags.includes('picky')) offer = Math.round(offer * cfg.wilt.pickyMul);
  offer = Math.min(offer, list);
  return { itemId, qty, unitPrice, list, offer, gap: list - offer, wilted, switched };
}

export interface SpawnFactors {
  rep: number;
  newsMod: number;
  /** 0.6 nếu hôm trước không trả phí giang hồ */
  karaokeMul: number;
  /** 1.4 trong 25s sau khi Bà Tám đi khen */
  praiseMul: number;
  /** 2 khi đang xả hàng */
  clearanceMul: number;
  /** Ưu đãi xuất thân (con nhà nối nghiệp tuần đầu) */
  originMul: number;
}

/** khoảngCách = 5.5 / ((0.55 + Uy tín/100) × tin tức × karaoke × Bà Tám × xả hàng) × random(0.7, 1.3) giây */
export function spawnInterval(rng: Rng, f: SpawnFactors, data: GameData = DATA): number {
  const s = data.config.spawn;
  const rate = (s.repBase + f.rep / 100) * f.newsMod * f.karaokeMul * f.praiseMul * f.clearanceMul * f.originMul;
  return (s.base / rate) * rng.range(s.jitter[0], s.jitter[1]);
}
