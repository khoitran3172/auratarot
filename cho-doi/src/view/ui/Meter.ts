// Thanh chỉ số kèm chữ (không chỉ dựa vào màu).
import { h } from './dom';

export interface MeterHandle { el: HTMLDivElement; set: (value: number, text: string) => void }

export function Meter(label: string, kind: 'via' | 'rep'): MeterHandle {
  const text = h('span');
  const fill = h('div', { class: 'fill' });
  const track = h('div', { class: 'track', role: 'meter', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': label }, fill);
  const el = h('div', { class: `meter ${kind}` }, h('div', { class: 'spread' }, h('span', { text: label }), text), track);
  return {
    el,
    set: (value, t) => {
      fill.style.width = `${Math.max(0, Math.min(100, value))}%`;
      track.setAttribute('aria-valuenow', String(Math.round(value)));
      text.textContent = t;
    },
  };
}
