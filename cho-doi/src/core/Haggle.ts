// Trả giá: danh sách chiêu theo từng kiểu khách và kết quả của từng chiêu. Hàm thuần, không sửa state.
import type { Order } from './Customers';
import { DATA, type GameData } from './Data';
import { round1 } from './GameState';
import { successRate } from './Luck';
import type { Rng } from './Rng';
import type { CustomerDef } from './types';

export type TacticId =
  | 'accept' | 'sob' | 'flatter' | 'onion' | 'hold' | 'candy'
  | 'sell' | 'sellFull' | 'charity' | 'upsell' | 'credit' | 'cash';

export interface TacticOption {
  id: TacticId;
  /** Tỷ lệ thành công sau khi cộng bonus may mắn; null = chắc chắn */
  rate: number | null;
  enabled: boolean;
}

export interface HaggleResult {
  tactic: TacticId;
  success: boolean;
  outcome: 'sold' | 'credit' | 'left';
  /** Tiền bán (chưa gồm tiền lẻ khách cho). Với ghi sổ là số tiền ghi nợ. */
  price: number;
  qty: number;
  tip: number;
  /** Chi phí quà tặng (hành, kẹo) */
  cost: number;
  via: number;
  rep: number;
  deo: number;
}

export interface Luck { via: number; deo: number }

export function tacticIds(def: CustomerDef, clearance: boolean): TacticId[] {
  // Lúc xả hàng: mọi khách chỉ có nút "Bán"
  if (clearance) return ['sell'];
  if (def.flags.includes('special')) return ['sellFull', 'charity'];
  if (def.flags.includes('easy')) return ['sell', 'upsell'];
  if (def.flags.includes('credit')) return ['credit', 'cash'];
  const base: TacticId[] = ['accept', 'sob', 'flatter', 'onion', 'hold'];
  if (def.flags.includes('kid')) base.push('candy');
  return base;
}

/** Tỷ lệ gốc (trước bonus) của chiêu có rủi ro; null nếu chiêu chắc chắn thành công. */
export function baseRate(id: TacticId, def: CustomerDef, data: GameData = DATA): number | null {
  const t = data.config.tactics;
  switch (id) {
    case 'sob': return t.sob.rate;
    case 'flatter': return def.flatterRate ?? t.flatter.rate; // Bà Tám 80%, Bà Sáu & Chị Lan 60%, còn lại 40%
    case 'hold': return def.holdRate ?? t.hold.rate; // 35%, Bà Tám 20%
    case 'cash': return t.cash.rate;
    default: return null;
  }
}

export function tacticOptions(
  def: CustomerDef, order: Order, clearance: boolean, luck: Luck, stockLeft: number, money: number,
  data: GameData = DATA,
): TacticOption[] {
  const t = data.config.tactics;
  return tacticIds(def, clearance).map((id) => {
    const b = baseRate(id, def, data);
    let enabled = true;
    if (id === 'upsell') enabled = stockLeft > order.qty;
    if (id === 'onion') enabled = money >= t.onion.cost;
    if (id === 'candy') enabled = money >= t.candy.cost;
    return { id, rate: b === null ? null : successRate(b, luck.via, luck.deo, data), enabled };
  });
}

export function resolveTactic(
  id: TacticId, def: CustomerDef, order: Order, luck: Luck, rng: Rng, data: GameData = DATA,
): HaggleResult {
  const t = data.config.tactics;
  const { offer, list, gap, qty } = order;
  const r: HaggleResult = { tactic: id, success: true, outcome: 'sold', price: offer, qty, tip: 0, cost: 0, via: 0, rep: 0, deo: 0 };
  const roll = (): boolean => {
    const b = baseRate(id, def, data);
    return b === null ? true : rng.chance(successRate(b, luck.via, luck.deo, data));
  };
  const leave = (rep: number) => { r.success = false; r.outcome = 'left'; r.price = 0; r.qty = 0; r.rep = rep; };
  const tipRoll = () => { if (def.tipChance && rng.chance(def.tipChance)) r.tip = def.tip ?? 0; };

  switch (id) {
    case 'accept':
      r.rep = t.accept.rep;
      break;
    case 'sob':
      if (roll()) { r.price = offer + gap * t.sob.gapShare; r.deo = t.sob.deo; }
      else if (def.sobLeaves) leave(t.sob.failLeaveRep); // Anh Tư nóng tính: kể khổ hỏng là bỏ đi
      else r.success = false;
      break;
    case 'flatter':
      if (roll()) { r.price = offer + gap * t.flatter.gapShare; r.deo = t.flatter.deo; r.rep = t.flatter.rep; }
      else r.success = false;
      break;
    case 'onion':
      r.cost = t.onion.cost;
      r.price = offer + gap * t.onion.gapShare;
      r.rep = def.onionRep ?? t.onion.rep; // Bà Sáu thích được tặng hành: +3
      break;
    case 'hold':
      if (roll()) { r.price = list; r.deo = t.hold.deo; }
      else leave(def.leaveRep ?? t.hold.failRep); // Bà Tám bỏ đi: −4
      break;
    case 'candy':
      r.cost = t.candy.cost;
      r.via = t.candy.via;
      break;
    case 'sell':
    case 'sellFull':
      r.price = list;
      tipRoll();
      break;
    case 'charity':
      r.price = list * t.charity.priceMul;
      r.via = t.charity.via;
      r.rep = t.charity.rep;
      break;
    case 'upsell':
      // Ông Sáu: nhắc mua thêm thì bán thêm 1 đơn vị
      r.qty = qty + 1;
      r.price = list + Math.round(order.unitPrice);
      r.rep = t.upsell.rep;
      tipRoll();
      break;
    case 'credit':
      r.outcome = 'credit';
      r.rep = t.credit.rep;
      break;
    case 'cash':
      if (!roll()) leave(t.cash.failRep);
      break;
  }
  r.price = round1(r.price);
  return r;
}
