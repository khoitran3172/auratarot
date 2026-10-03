// Event bus đơn giản giữa core và view. View chỉ nghe, không sửa state trực tiếp.
import type { ItemId } from './types';

export interface GameEvents {
  sale: { customerId: string; itemId: ItemId; qty: number; price: number; credit: boolean };
  customerArrived: { uid: number; customerId: string };
  customerLeft: { uid: number; customerId: string; reason: 'patience' | 'haggle' | 'sold' };
  viaChanged: { via: number; delta: number };
  repChanged: { rep: number; delta: number };
  deoChanged: { deo: number; delta: number };
  moneyChanged: { money: number; delta: number };
  stockChanged: { stock: Record<ItemId, number> };
  openingResult: { success: boolean };
  praiseStarted: { untilSec: number };
  clearanceStarted: Record<string, never>;
  dayClosing: { reason: 'time' | 'player' };
  log: { text: string; tone?: 'good' | 'bad' | 'info' };
  deoMilestone: { deo: number };
}

type Handler<T> = (payload: T) => void;

export class EventBus<E extends object = GameEvents> {
  private handlers = new Map<keyof E, Set<Handler<never>>>();

  on<K extends keyof E>(type: K, fn: Handler<E[K]>): () => void {
    let set = this.handlers.get(type);
    if (!set) this.handlers.set(type, (set = new Set()));
    set.add(fn as Handler<never>);
    return () => this.off(type, fn);
  }

  off<K extends keyof E>(type: K, fn: Handler<E[K]>): void {
    this.handlers.get(type)?.delete(fn as Handler<never>);
  }

  emit<K extends keyof E>(type: K, payload: E[K]): void {
    this.handlers.get(type)?.forEach((fn) => (fn as Handler<E[K]>)(payload));
  }

  clear(): void {
    this.handlers.clear();
  }
}
