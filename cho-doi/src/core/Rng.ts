// Random có seed (mulberry32) để test và tái hiện bug.
export class Rng {
  private s: number;

  constructor(seed: number) {
    this.s = seed >>> 0;
  }

  /** Số thực trong [0, 1) */
  next(): number {
    this.s = (this.s + 0x6d2b79f5) >>> 0;
    let t = this.s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  /** Số nguyên trong [min, max] (gồm cả hai đầu) */
  int(min: number, max: number): number {
    return Math.floor(this.range(min, max + 1));
  }

  chance(p: number): boolean {
    return this.next() < p;
  }

  pick<T>(arr: readonly T[]): T {
    if (arr.length === 0) throw new Error('Rng.pick on empty array');
    return arr[Math.floor(this.next() * arr.length)];
  }

  weighted<T>(entries: readonly { value: T; weight: number }[]): T | null {
    const total = entries.reduce((s, e) => s + Math.max(0, e.weight), 0);
    if (total <= 0) return null;
    let r = this.next() * total;
    for (const e of entries) {
      r -= Math.max(0, e.weight);
      if (r < 0) return e.value;
    }
    return entries[entries.length - 1].value;
  }

  /** Rng riêng cho từng ngày: mở lại save giữa ngày vẫn ra đúng tin loa phường, đúng khách. */
  static forDay(seed: number, dayCount: number, salt = 0): Rng {
    return new Rng((seed ^ Math.imul(dayCount + 1, 0x9e3779b1) ^ Math.imul(salt + 7, 0x85ebca6b)) >>> 0);
  }
}
