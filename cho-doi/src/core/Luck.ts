// Vía và hệ số may mắn.
import { DATA, type GameData } from './Data';

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** bonus = (Vía − 50) / 250 + min(Dẻo miệng, 15) / 100 */
export function luckBonus(via: number, deo: number, data: GameData = DATA): number {
  const l = data.config.luck;
  return (via - 50) / l.viaDiv + Math.min(deo, l.deoCap) / l.deoDiv;
}

/** Mọi tỷ lệ thành công đều cộng bonus rồi kẹp trong 5%–95%. */
export function successRate(base: number, via: number, deo: number, data: GameData = DATA): number {
  const l = data.config.luck;
  return clamp(base + luckBonus(via, deo, data), l.min, l.max);
}

export function clampVia(v: number): number { return clamp(v, 0, 100); }
export function clampRep(v: number): number { return clamp(v, 0, 100); }

/** Nhãn chữ cho thanh Vía (thông tin không chỉ dựa vào màu). */
export function viaLabelIndex(via: number): 0 | 1 | 2 | 3 {
  if (via < 30) return 0;
  if (via < 60) return 1;
  if (via < 85) return 2;
  return 3;
}
