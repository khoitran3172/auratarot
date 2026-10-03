// Bảng màu dùng trong Phaser (số hex). Bản CSS tương ứng nằm trong styles.css.
export const C = {
  tarp: 0x1f6fa8,
  tarpDark: 0x155480,
  chair: 0xd62828,
  sun: 0xffd23f,
  paper: 0xfbf3d9,
  ink: 0x23324a,
  leaf: 0x3e8e41,
  wood: 0x6b4226,
  woodDark: 0x4a2d19,
  white: 0xffffff,
  skin: 0xf1c27d,
  straw: 0xe9d8a6,
  tin: 0x9aa5ad,
  ground: 0x8a7f72,
  groundDark: 0x6f665b,
} as const;

export const FONT_HAND = '"Patrick Hand", "Comic Sans MS", sans-serif';
export const FONT_SIGN = '"Bungee", Impact, sans-serif';

/** Hệ số phân giải: canvas vẽ gấp đôi rồi thu nhỏ cho nét, chữ không bị mờ trên màn hình mật độ cao. */
export const RES = 2;
export const W = 390;
export const H = 844;

export function hex(color: string): number {
  return parseInt(color.replace('#', ''), 16);
}

export function lerpColor(a: number, b: number, t: number): number {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  const r = Math.round(ar + (br - ar) * t), g = Math.round(ag + (bg - ag) * t), bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

/** Màu trời theo giờ: 5h tím, 6h cam, 8h–16h xanh, 18h cam đỏ. */
const SKY: [number, number][] = [
  [240, 0x2b2350],
  [300, 0x5b4b8a],
  [360, 0xf4a259],
  [410, 0xf9d29b],
  [450, 0xbfe0f0],
  [480, 0x8ec5e8],
  [960, 0x8ec5e8],
  [1020, 0xf6b26b],
  [1080, 0xe4572e],
  [1140, 0x3a2a4f],
];

export function skyColor(minute: number): number {
  if (minute <= SKY[0][0]) return SKY[0][1];
  for (let i = 1; i < SKY.length; i++) {
    const [m1, c1] = SKY[i];
    const [m0, c0] = SKY[i - 1];
    if (minute <= m1) return lerpColor(c0, c1, (minute - m0) / (m1 - m0));
  }
  return SKY[SKY.length - 1][1];
}
