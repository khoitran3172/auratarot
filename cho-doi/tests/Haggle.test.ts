import { describe, expect, it } from 'vitest';
import { baseRate, resolveTactic, tacticIds, tacticOptions } from '../src/core/Haggle';
import { cust, fixedRng, order } from './helpers';

const neutral = { via: 50, deo: 0 };
const o = order(52, 40); // niêm yết 52k, khách trả 40k, chênh 12k
const win = fixedRng(true);
const lose = fixedRng(false);

describe('Haggle — danh sách chiêu', () => {
  it('khách thường có 5 chiêu, Bé Út có thêm tặng kẹo', () => {
    expect(tacticIds(cust('ba8'), false)).toEqual(['accept', 'sob', 'flatter', 'onion', 'hold']);
    expect(tacticIds(cust('ut'), false)).toContain('candy');
  });
  it('chiêu riêng của Bà Bảy, Ông Sáu, Chú Tám', () => {
    expect(tacticIds(cust('ba7'), false)).toEqual(['sellFull', 'charity']);
    expect(tacticIds(cust('ong6'), false)).toEqual(['sell', 'upsell']);
    expect(tacticIds(cust('chu8'), false)).toEqual(['credit', 'cash']);
  });
  it('lúc xả hàng mọi khách chỉ có nút Bán', () => {
    for (const id of ['ba8', 'ba7', 'chu8', 'ut']) expect(tacticIds(cust(id), true)).toEqual(['sell']);
  });
  it('tỷ lệ gốc nịnh khéo / giữ giá theo khách', () => {
    expect(baseRate('flatter', cust('ba8'))).toBe(0.8);
    expect(baseRate('flatter', cust('ba6'))).toBe(0.6);
    expect(baseRate('flatter', cust('lan'))).toBe(0.6);
    expect(baseRate('flatter', cust('anh4'))).toBe(0.4);
    expect(baseRate('hold', cust('ba8'))).toBe(0.2);
    expect(baseRate('hold', cust('ba6'))).toBe(0.35);
    expect(baseRate('sob', cust('ba6'))).toBe(0.65);
    expect(baseRate('accept', cust('ba6'))).toBeNull();
  });
  it('tỷ lệ hiển thị đã cộng bonus may mắn', () => {
    const opts = tacticOptions(cust('ba6'), o, false, { via: 75, deo: 5 }, 10, 100);
    expect(opts.find((x) => x.id === 'sob')!.rate).toBeCloseTo(0.65 + 0.1 + 0.05);
  });
  it('nhắc mua thêm chỉ bật khi còn hàng', () => {
    const opts = tacticOptions(cust('ong6'), order(52, 52), false, neutral, 2, 100);
    expect(opts.find((x) => x.id === 'upsell')!.enabled).toBe(false);
  });
});

describe('Haggle — kết quả chiêu', () => {
  it('Bán theo giá khách: giá khách, Uy tín +0.5', () => {
    const r = resolveTactic('accept', cust('ba6'), o, neutral, win);
    expect([r.outcome, r.price, r.rep]).toEqual(['sold', 40, 0.5]);
  });

  it('Kể khổ: thành công giá khách + 50% chênh, Dẻo +1; thất bại giá khách', () => {
    const s = resolveTactic('sob', cust('ba6'), o, neutral, win);
    expect([s.price, s.deo, s.success]).toEqual([46, 1, true]);
    const f = resolveTactic('sob', cust('ba6'), o, neutral, lose);
    expect([f.outcome, f.price, f.deo, f.success]).toEqual(['sold', 40, 0, false]);
  });

  it('Kể khổ với Anh Tư thất bại: bỏ đi, Uy tín −2', () => {
    const f = resolveTactic('sob', cust('anh4'), o, neutral, lose);
    expect([f.outcome, f.price, f.rep]).toEqual(['left', 0, -2]);
  });

  it('Nịnh khéo: + 80% chênh, Dẻo +1, Uy tín +1', () => {
    const s = resolveTactic('flatter', cust('ba8'), o, neutral, win);
    expect([s.price, s.deo, s.rep]).toEqual([49.6, 1, 1]);
    const f = resolveTactic('flatter', cust('ba8'), o, neutral, lose);
    expect([f.price, f.rep]).toEqual([40, 0]);
  });

  it('Tặng nắm hành: tốn 1k, + 50% chênh, Uy tín +1 (Bà Sáu +3)', () => {
    const a = resolveTactic('onion', cust('ba8'), o, neutral, win);
    expect([a.cost, a.price, a.rep]).toEqual([1, 46, 1]);
    expect(resolveTactic('onion', cust('ba6'), o, neutral, win).rep).toBe(3);
  });

  it('Giữ giá: thành công giá niêm yết; thất bại bỏ đi Uy tín −2 (Bà Tám −4)', () => {
    const s = resolveTactic('hold', cust('ba6'), o, neutral, win);
    expect([s.price, s.deo]).toEqual([52, 1]);
    expect(resolveTactic('hold', cust('ba6'), o, neutral, lose)).toMatchObject({ outcome: 'left', rep: -2 });
    expect(resolveTactic('hold', cust('ba8'), o, neutral, lose)).toMatchObject({ outcome: 'left', rep: -4 });
  });

  it('Bà Bảy: bán đúng giá, hoặc bớt làm phước (×0.9, Vía +6, Uy tín +2)', () => {
    const full = order(90, 90);
    expect(resolveTactic('sellFull', cust('ba7'), full, neutral, win).price).toBe(90);
    expect(resolveTactic('charity', cust('ba7'), full, neutral, win)).toMatchObject({ price: 81, via: 6, rep: 2 });
  });

  it('Ông Sáu: 40% cho tiền lẻ 2k; nhắc mua thêm bán thêm 1 đơn vị, Uy tín +1', () => {
    const o6 = order(52, 52, { qty: 2, unitPrice: 26 });
    expect(resolveTactic('sell', cust('ong6'), o6, neutral, win).tip).toBe(2);
    expect(resolveTactic('sell', cust('ong6'), o6, neutral, lose).tip).toBe(0);
    expect(resolveTactic('upsell', cust('ong6'), o6, neutral, lose)).toMatchObject({ qty: 3, price: 78, rep: 1 });
  });

  it('Chú Tám: ghi sổ (Uy tín +1) hoặc đòi tiền mặt 50% (hỏng: bỏ đi, Uy tín −2)', () => {
    const o8 = order(140, 126);
    expect(resolveTactic('credit', cust('chu8'), o8, neutral, win)).toMatchObject({ outcome: 'credit', price: 126, rep: 1 });
    expect(resolveTactic('cash', cust('chu8'), o8, neutral, win)).toMatchObject({ outcome: 'sold', price: 126 });
    expect(resolveTactic('cash', cust('chu8'), o8, neutral, lose)).toMatchObject({ outcome: 'left', rep: -2 });
  });

  it('Bé Út: tặng kẹo tốn 1k, Vía +5', () => {
    expect(resolveTactic('candy', cust('ut'), order(9, 8), neutral, win)).toMatchObject({ cost: 1, via: 5, price: 8 });
  });
});
