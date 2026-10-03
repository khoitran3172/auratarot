// Thay biến {key} trong câu thoại/chuỗi UI. Chuỗi gốc nằm trong data/strings.vi.json để sau làm đa ngôn ngữ.
import { DATA } from './Data';

export type Vars = Record<string, string | number>;

export function fmt(template: string, vars: Vars = {}): string {
  const out = template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  return capFirst(out);
}

/** Viết hoa chữ cái đầu (biến như {goi} có thể đứng đầu câu). */
export function capFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Lấy chuỗi theo đường dẫn "market.serve" rồi thay biến. */
export function t(path: string, vars: Vars = {}): string {
  const node = lookup(path);
  return typeof node === 'string' ? fmt(node, vars) : path;
}

export function tList(path: string): string[] {
  const node = lookup(path);
  return Array.isArray(node) ? (node as string[]) : [];
}

function lookup(path: string): unknown {
  let node: unknown = DATA.strings;
  for (const part of path.split('.')) {
    if (node && typeof node === 'object') node = (node as Record<string, unknown>)[part];
    else return undefined;
  }
  return node;
}

/** Tiền nghìn đồng: 12.5 -> "12,5k" */
export function money(n: number): string {
  const r = Math.round(n * 10) / 10;
  const s = Number.isInteger(r) ? String(r) : r.toFixed(1).replace('.', ',');
  return `${s}k`;
}
