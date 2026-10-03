import { describe, expect, it } from 'vitest';
import { DATA } from '../src/core/Data';
import { buildDayContext, burnIncense, cartCost, isValidCart, purchase, rollNews, spoilOvernight } from '../src/core/Economy';
import type { NewsDef } from '../src/core/types';
import { newState } from './helpers';

const news = (id: string) => DATA.news.find((n) => n.id === id) as NewsDef;
const neutral = news('neutral_vaccine');

describe('Economy', () => {
  it('giá gốc khi tin trung tính, ngày thường', () => {
    const ctx = buildDayContext(newState(), neutral);
    expect(ctx.buyPrice).toEqual({ rau: 5, ca: 16, thit: 105 });
    expect(ctx.sellPrice).toEqual({ rau: 9, ca: 26, thit: 140 });
    expect(ctx.spawnMod).toBe(1);
  });

  it('tin loa phường đổi giá nhập, giá bán, lượng khách', () => {
    const s = newState();
    const rain = buildDayContext(s, news('rain_longan'));
    expect(rain.buyPrice.rau).toBeCloseTo(7.5);
    expect(rain.sellPrice.rau).toBeCloseTo(11.7);
    const pig = buildDayContext(s, news('pig_flu'));
    expect(pig.buyPrice.thit).toBeCloseTo(136.5);
    expect(pig.sellPrice.thit).toBeCloseTo(168);
    const dalat = buildDayContext(s, news('dalat_tomato'));
    expect(dalat.buyPrice.ca).toBeCloseTo(9.6);
    expect(dalat.sellPrice.ca).toBeCloseTo(20.8);
    expect(buildDayContext(s, news('nice_day')).spawnMod).toBe(1.3);
    expect(buildDayContext(s, news('storm')).spawnMod).toBe(0.8);
  });

  it('Mùng 1 và Rằm: rau bán +20%', () => {
    const ctx = buildDayContext(newState({ day: 15, month: 8 }), neutral);
    expect(ctx.holiday).toBe(true);
    expect(ctx.midAutumn).toBe(true);
    expect(ctx.sellPrice.rau).toBeCloseTo(10.8);
    expect(ctx.sellPrice.ca).toBe(26);
  });

  it('dân quê lên phố: giá nhập rẻ hơn 5%, tới sớm 30 phút', () => {
    const ctx = buildDayContext(newState({}, 'country'), neutral);
    expect(ctx.buyPrice.thit).toBeCloseTo(99.8);
    expect(ctx.wholesaleMin).toBe(210);
  });

  it('mua hàng theo bước mua, không vượt tiền', () => {
    const s = newState({ money: 100 });
    const ctx = buildDayContext(s, neutral);
    expect(isValidCart({ rau: 3 })).toBe(false);
    expect(cartCost({ rau: 10, ca: 2 }, ctx)).toBe(82);
    expect(purchase(s, { rau: 10, ca: 2 }, ctx)).toBe(82);
    expect(s.money).toBe(18);
    expect(s.stock.rau).toBe(10);
    expect(purchase(s, { thit: 1 }, ctx)).toBeNull();
    expect(s.money).toBe(18);
  });

  it('thắp nhang: 2k, Vía +8', () => {
    const s = newState({ money: 10, via: 50 });
    expect(burnIncense(s)).toBe(true);
    expect(s.money).toBe(8);
    expect(s.via).toBe(58);
    const broke = newState({ money: 1 });
    expect(burnIncense(broke)).toBe(false);
  });

  it('hàng hư qua đêm: rau 100%, cà 40%, thịt 60% (làm tròn xuống)', () => {
    const s = newState();
    s.stock = { rau: 7, ca: 5, thit: 3 };
    const r = spoilOvernight(s, buildDayContext(s, neutral));
    expect(r.spoiled).toEqual({ rau: 7, ca: 2, thit: 1 });
    expect(s.stock).toEqual({ rau: 0, ca: 3, thit: 2 });
    expect(r.value).toBe(7 * 5 + 2 * 16 + 105);
  });

  it('tin loa phường cố định theo seed + ngày', () => {
    const s = newState();
    expect(rollNews(s).id).toBe(rollNews({ ...s }).id);
  });
});
