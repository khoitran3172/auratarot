// Chọn câu thoại và thay biến {qty} {unit} {item} {price} {xung} {goi} {toi}.
import type { Order } from './Customers';
import { DATA, itemById, type GameData } from './Data';
import type { HaggleResult, TacticId } from './Haggle';
import type { Rng } from './Rng';
import { fmt, money, type Vars } from './Text';
import type { DialogueSet, GameState } from './types';

export function dialogueFor(customerId: string, data: GameData = DATA): DialogueSet {
  const d = data.dialogues.customers[customerId];
  if (!d) throw new Error(`No dialogue for ${customerId}`);
  return d;
}

export function lineVars(customerId: string, state: GameState, order?: Order, data: GameData = DATA): Vars {
  const d = dialogueFor(customerId, data);
  const g = state.player.gender;
  const v: Vars = { xung: d.xung[g], goi: d.goi, toi: d.toi[g], name: state.player.name };
  if (order) {
    const it = itemById(data, order.itemId);
    Object.assign(v, { qty: order.qty, unit: it.unit, item: it.name.toLowerCase(), price: money(order.offer) });
  }
  return v;
}

export function greetLine(customerId: string, state: GameState, order: Order, clearance: boolean, rng: Rng, data: GameData = DATA): string {
  const d = dialogueFor(customerId, data);
  let pool = d.greet;
  if (clearance) pool = data.dialogues.clearanceGreet;
  else if (order.wilted && d.wilted?.length && order.itemId === 'rau') pool = d.wilted;
  return fmt(rng.pick(pool), lineVars(customerId, state, order, data));
}

export function playerLine(tactic: TacticId, customerId: string, state: GameState, order: Order, rng: Rng, data: GameData = DATA): string {
  const pool = data.dialogues.playerLines[tactic] ?? [];
  return pool.length ? fmt(rng.pick(pool), lineVars(customerId, state, order, data)) : '';
}

export function reactLine(customerId: string, state: GameState, order: Order, result: HaggleResult, clearance: boolean, rng: Rng, data: GameData = DATA): string {
  const d = dialogueFor(customerId, data);
  const vars = lineVars(customerId, state, order, data);
  if (clearance) return fmt(rng.pick(data.dialogues.clearanceThanks), vars);
  const set = d.react[result.tactic];
  const pool = set ? (result.success ? set.success : set.fail.length ? set.fail : set.success) : [];
  return pool.length ? fmt(rng.pick(pool), vars) : '';
}

export function leaveLine(customerId: string, state: GameState, rng: Rng, data: GameData = DATA): string {
  return fmt(rng.pick(dialogueFor(customerId, data).leave), lineVars(customerId, state, undefined, data));
}
