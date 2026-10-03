import { describe, expect, it } from 'vitest';
import { addDebt, collectDebts, debtPayChance, needsLoan, repayLoan, takeLoan } from '../src/core/Debt';
import { isCollectionDay, resolveGangster } from '../src/core/Gangster';
import { fixedRng, newState } from './helpers';

describe('Sổ nợ', () => {
  it('70% được trả mỗi sáng, Mùng 1–3 chỉ 30%', () => {
    expect(debtPayChance(newState({ day: 13 }))).toBe(0.7);
    expect(debtPayChance(newState({ day: 2 }))).toBe(0.3);
  });

  it('khoản trả thì cộng tiền, khoản không trả thì để sang hôm sau', () => {
    const s = newState({ money: 0 });
    addDebt(s, 'Chú Tám Nhậu', 126);
    expect(collectDebts(s, fixedRng(false))).toHaveLength(0);
    expect(s.debts).toHaveLength(1);
    expect(collectDebts(s, fixedRng(true))).toHaveLength(1);
    expect(s.money).toBe(126);
    expect(s.debts).toHaveLength(0);
  });
});

describe('Mượn vốn bà Chín', () => {
  it('dưới 30k và hết hàng thì được mượn 100k, cuối ngày trả 110k nếu đủ', () => {
    const s = newState({ money: 20 });
    expect(needsLoan(s)).toBe(true);
    takeLoan(s);
    expect([s.money, s.loanOwed]).toEqual([120, 110]);
    s.money = 50;
    expect(repayLoan(s)).toBe(0);
    expect(s.loanOwed).toBe(110);
    s.money = 130;
    expect(repayLoan(s)).toBe(110);
    expect([s.money, s.loanOwed]).toEqual([20, 0]);
  });

  it('còn hàng thì không mượn', () => {
    const s = newState({ money: 20 });
    s.stock.ca = 2;
    expect(needsLoan(s)).toBe(false);
  });
});

describe('Anh Hai Dây Chuyền', () => {
  it('đến vào ngày chia hết cho 3', () => {
    expect([1, 2, 3, 4, 6].map((d) => isCollectionDay(d))).toEqual([false, false, true, false, true]);
  });

  it('trả đủ 20k', () => {
    const s = newState({ money: 100 });
    resolveGangster(s, 'pay');
    expect(s.money).toBe(80);
  });

  it('khen đẹp trai: Dẻo ≥ 5 trả 18k, không thì 20k', () => {
    const a = newState({ money: 100, deo: 5 });
    expect(resolveGangster(a, 'praise').success).toBe(true);
    expect(a.money).toBe(82);
    const b = newState({ money: 100, deo: 4 });
    expect(resolveGangster(b, 'praise').success).toBe(false);
    expect(b.money).toBe(80);
  });

  it('mời trà đá: 15k + 3k, Vía +3', () => {
    const s = newState({ money: 100, via: 50 });
    resolveGangster(s, 'tea');
    expect([s.money, s.via]).toEqual([82, 53]);
  });

  it('không trả: mai hát karaoke', () => {
    const s = newState({ money: 100 });
    resolveGangster(s, 'refuse');
    expect([s.money, s.karaokeTomorrow]).toEqual([100, true]);
  });

  it('không đủ tiền thì đưa hết, tiền không âm', () => {
    const s = newState({ money: 7 });
    resolveGangster(s, 'pay');
    expect(s.money).toBe(0);
  });
});
