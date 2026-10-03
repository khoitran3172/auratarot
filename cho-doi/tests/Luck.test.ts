import { describe, expect, it } from 'vitest';
import { luckBonus, successRate, viaLabelIndex } from '../src/core/Luck';
import { Rng } from '../src/core/Rng';

describe('Luck', () => {
  it('bonus = (Vía − 50)/250 + min(Dẻo, 15)/100', () => {
    expect(luckBonus(50, 0)).toBeCloseTo(0);
    expect(luckBonus(100, 0)).toBeCloseTo(0.2);
    expect(luckBonus(0, 0)).toBeCloseTo(-0.2);
    expect(luckBonus(50, 10)).toBeCloseTo(0.1);
    expect(luckBonus(50, 40)).toBeCloseTo(0.15); // Dẻo miệng tối đa tính 15
    expect(luckBonus(75, 5)).toBeCloseTo(0.15);
  });

  it('tỷ lệ thành công kẹp trong 5%–95%', () => {
    expect(successRate(0.65, 50, 0)).toBeCloseTo(0.65);
    expect(successRate(0.8, 100, 15)).toBeCloseTo(0.95);
    expect(successRate(0.2, 0, 0)).toBeCloseTo(0.05);
    expect(successRate(0.35, 60, 3)).toBeCloseTo(0.35 + 0.04 + 0.03);
  });

  it('nhãn Vía', () => {
    expect([10, 50, 70, 95].map(viaLabelIndex)).toEqual([0, 1, 2, 3]);
  });
});

describe('Rng', () => {
  it('cùng seed thì cùng chuỗi', () => {
    const a = new Rng(7), b = new Rng(7);
    expect([a.next(), a.next(), a.int(1, 6)]).toEqual([b.next(), b.next(), b.int(1, 6)]);
  });

  it('int nằm trong khoảng', () => {
    const r = new Rng(1);
    for (let i = 0; i < 500; i++) {
      const v = r.int(1, 3);
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(3);
    }
  });

  it('forDay tách nhánh theo ngày', () => {
    expect(Rng.forDay(5, 1).next()).not.toEqual(Rng.forDay(5, 2).next());
    expect(Rng.forDay(5, 1).next()).toEqual(Rng.forDay(5, 1).next());
  });
});
