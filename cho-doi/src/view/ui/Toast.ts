// Thông báo ngắn ở trên, tự biến mất. Hàng đợi để không chồng lên nhau.
import { h, uiRoot } from './dom';

const queue: string[] = [];
let showing = false;

export function toast(text: string, ms = 2200): void {
  queue.push(text);
  if (!showing) next(ms);
}

function next(ms: number): void {
  const text = queue.shift();
  if (!text) { showing = false; return; }
  showing = true;
  const el = h('div', { class: 'toast', role: 'status', text });
  uiRoot().appendChild(el);
  setTimeout(() => { el.remove(); next(ms); }, ms);
}

export function clearToasts(): void {
  queue.length = 0;
  uiRoot().querySelectorAll('.toast').forEach((e) => e.remove());
  showing = false;
}
