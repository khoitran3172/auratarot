// Nút nhựa có bóng dưới, nhấn thì lún xuống. Chính = đỏ, phụ = xanh bạt.
import { audio } from '../../services/AudioService';
import { h } from './dom';

export type ButtonKind = 'primary' | 'secondary' | 'sun' | 'ghost';

export interface ButtonOpts {
  label: string;
  hint?: string;
  kind?: ButtonKind;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick: () => void;
}

export function Button(o: ButtonOpts): HTMLButtonElement {
  const cls = ['btn', o.kind && o.kind !== 'secondary' ? o.kind : '', o.block ? 'block' : '', o.className ?? ''].filter(Boolean).join(' ');
  const b = h('button', { class: cls, type: 'button', 'aria-label': o.ariaLabel, disabled: !!o.disabled });
  if (o.hint) {
    b.append(h('span', { class: 'label', text: o.label }), h('span', { class: 'hint', text: o.hint }));
  } else {
    b.textContent = o.label;
  }
  b.addEventListener('click', () => {
    if (b.disabled) return;
    audio.click();
    o.onClick();
  });
  return b;
}
