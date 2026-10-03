// Chip tồn kho: chấm màu + tên + số lượng (hết hàng thì gạch ngang).
import { h } from './dom';

export function Chip(text: string, color?: string, empty = false): HTMLSpanElement {
  return h('span', { class: `chip${empty ? ' empty' : ''}` },
    color ? h('span', { class: 'dot', style: `background:${color}`, 'aria-hidden': 'true' }) : null,
    text);
}
