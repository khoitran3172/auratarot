import { customerById, DATA } from '../src/core/Data';
import type { Order } from '../src/core/Customers';
import { createGame } from '../src/core/GameState';
import type { GameState } from '../src/core/types';

export function newState(over: Partial<GameState> = {}, origin = 'heir'): GameState {
  return { ...createGame({ name: 'Hạnh', gender: 'f', origin, petName: 'Mướp', seed: 42 }), ...over };
}

export const cust = (id: string) => customerById(DATA, id);

export function order(list: number, offer: number, over: Partial<Order> = {}): Order {
  return { itemId: 'ca', qty: 2, unitPrice: list / 2, list, offer, gap: list - offer, wilted: false, switched: false, ...over };
}

/** Rng giả: chance() luôn trả kết quả cho trước, để test nhánh thành công/thất bại. */
export function fixedRng(win: boolean) {
  return {
    next: () => (win ? 0 : 0.999999),
    range: (a: number) => a,
    int: (a: number) => a,
    chance: () => win,
    pick: <T>(arr: readonly T[]) => arr[0],
    weighted: <T>(e: readonly { value: T }[]) => e[0]?.value ?? null,
  } as never;
}
