import { describe, expect, it } from 'vitest';
import { baseWeight, customerWeight, makeOrder, pickCustomer, spawnInterval } from '../src/core/Customers';
import { Rng } from '../src/core/Rng';
import { cust, fixedRng } from './helpers';

const stock = { rau: 10, ca: 4, thit: 2 };
const base = { minute: 600, holiday: false, via: 50, stock, petVipMul: 1 };
const prices = { rau: 9, ca: 26, thit: 140 };

describe('Customers', () => {
  it('Bà Bảy chỉ đến Mùng 1, Rằm (trọng số 5)', () => {
    expect(baseWeight(cust('ba7'), base)).toBe(0);
    expect(baseWeight(cust('ba7'), { ...base, holiday: true })).toBe(5);
  });

  it('Chị Lan chỉ 6h30–7h30 trọng số 6', () => {
    expect(baseWeight(cust('lan'), { ...base, minute: 400 })).toBe(6);
    expect(baseWeight(cust('lan'), { ...base, minute: 460 })).toBe(0);
  });

  it('khách VIP × (1 + (Vía − 50)/100) × pet', () => {
    const ctx = { ...base, holiday: true, via: 80, petVipMul: 1.2 };
    expect(customerWeight(cust('ba7'), ctx)).toBeCloseTo(5 * 1.3 * 1.2);
    expect(customerWeight(cust('ba8'), ctx)).toBe(3); // không phải VIP
  });

  it('sạp hết mọi món khách muốn: trọng số × 0.2', () => {
    expect(customerWeight(cust('chu8'), { ...base, stock: { rau: 5, ca: 0, thit: 0 } })).toBeCloseTo(0.4);
  });

  it('hết sạch hàng thì không có khách', () => {
    expect(pickCustomer(new Rng(1), { ...base, stock: { rau: 0, ca: 0, thit: 0 } })).toBeNull();
  });

  it('tạo đơn: giá niêm yết, giá khách trả, chênh lệch', () => {
    // fixedRng: range() trả cận dưới (0.6), int() trả cận dưới, pick() lấy phần tử đầu
    const o = makeOrder(fixedRng(true), cust('ba8'), { stock, sellPrice: prices, clearance: false, minute: 600 })!;
    expect(o.itemId).toBe('rau');
    expect(o.qty).toBe(1);
    expect(o.list).toBe(9);
    expect(o.offer).toBe(Math.round(9 * (1 - 0.3 * 0.6)));
    expect(o.gap).toBe(o.list - o.offer);
  });

  it('xả hàng: giá ×0.6, khách không trả giá', () => {
    const o = makeOrder(fixedRng(true), cust('ba8'), { stock, sellPrice: prices, clearance: true, minute: 1030 })!;
    expect(o.list).toBe(Math.round(9 * 0.6));
    expect(o.offer).toBe(o.list);
  });

  it('rau sau 14h héo: khách kỹ tính trả thấp hơn 15%', () => {
    const fresh = makeOrder(fixedRng(true), cust('ba6'), { stock, sellPrice: prices, clearance: false, minute: 800 })!;
    const wilted = makeOrder(fixedRng(true), cust('ba6'), { stock, sellPrice: prices, clearance: false, minute: 850 })!;
    expect(wilted.wilted).toBe(true);
    expect(wilted.offer).toBe(Math.round(fresh.offer * 0.85));
  });

  it('khách muốn món đã hết thì chuyển sang món khác còn hàng', () => {
    const o = makeOrder(fixedRng(true), cust('chu8'), { stock: { rau: 5, ca: 0, thit: 0 }, sellPrice: prices, clearance: false, minute: 600 })!;
    expect(o.itemId).toBe('rau');
    expect(o.switched).toBe(true);
  });

  it('số lượng không vượt tồn kho', () => {
    const o = makeOrder(fixedRng(true), cust('ba7'), { stock: { rau: 3, ca: 0, thit: 0 }, sellPrice: prices, clearance: false, minute: 600 })!;
    expect(o.qty).toBe(3);
  });

  it('khoảngCách = 5.5 / ((0.55 + Uy tín/100) × các hệ số) × jitter', () => {
    const f = { rep: 40, newsMod: 1, karaokeMul: 1, praiseMul: 1, clearanceMul: 1, originMul: 1 };
    expect(spawnInterval(fixedRng(true), f)).toBeCloseTo((5.5 / 0.95) * 0.7);
    expect(spawnInterval(fixedRng(true), { ...f, karaokeMul: 0.6, praiseMul: 1.4, clearanceMul: 2, newsMod: 1.3 }))
      .toBeCloseTo((5.5 / (0.95 * 0.6 * 1.4 * 2 * 1.3)) * 0.7);
  });
});
