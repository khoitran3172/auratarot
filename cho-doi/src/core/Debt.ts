// Sổ nợ khách và mượn vốn bà Chín.
import { isEarlyMonth } from './Calendar';
import { DATA, type GameData } from './Data';
import { addMoney, addRelation, totalStock } from './GameState';
import type { Rng } from './Rng';
import type { Debt, GameState } from './types';

export function addDebt(state: GameState, who: string, amount: number): void {
  state.debts.push({ who, amount, sinceDay: state.day, sinceMonth: state.month });
}

export function totalDebts(state: GameState): number {
  return state.debts.reduce((s, d) => s + d.amount, 0);
}

/** Mỗi sáng mỗi khoản nợ có 70% được trả (Mùng 1–3 khách kiêng trả: 30%). */
export function debtPayChance(state: GameState, data: GameData = DATA): number {
  const d = data.config.debt;
  return isEarlyMonth({ day: state.day, month: state.month }, data) ? d.earlyMonthChance : d.payChance;
}

export function collectDebts(state: GameState, rng: Rng, data: GameData = DATA): Debt[] {
  const p = debtPayChance(state, data);
  const paid: Debt[] = [];
  const kept: Debt[] = [];
  for (const d of state.debts) (rng.chance(p) ? paid : kept).push(d);
  state.debts = kept;
  for (const d of paid) addMoney(state, d.amount);
  return paid;
}

/** Hết tiền (dưới 30k) và hết hàng thì bà Chín cho mượn. */
export function needsLoan(state: GameState, data: GameData = DATA): boolean {
  return state.money < data.config.loan.moneyBelow && totalStock(state) === 0;
}

export function takeLoan(state: GameState, data: GameData = DATA): void {
  addMoney(state, data.config.loan.amount);
  state.loanOwed += data.config.loan.repay;
}

/** Cuối ngày trả bà Chín nếu đủ tiền; chưa đủ thì để mai. */
export function repayLoan(state: GameState): number {
  if (state.loanOwed <= 0 || state.money < state.loanOwed) return 0;
  const paid = state.loanOwed;
  addMoney(state, -paid);
  state.loanOwed = 0;
  addRelation(state, 'bachin', 5);
  return paid;
}
