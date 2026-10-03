// Sheet giấy sổ trượt từ dưới lên, có lớp nền tối phía sau.
import { h, type Child } from './dom';

export interface SheetOpts {
  title?: string;
  /** Bấm ra ngoài để đóng (mặc định không, vì đa số sheet cần chọn) */
  onDismiss?: () => void;
  maxHeight?: string;
  label?: string;
}

export interface SheetHandle {
  root: HTMLDivElement;
  body: HTMLDivElement;
  setContent: (...children: Child[]) => void;
  reset: (...children: Child[]) => void;
  close: () => void;
}

export function Sheet(parent: HTMLElement, o: SheetOpts, ...children: Child[]): SheetHandle {
  const root = h('div', { class: 'sheet-wrap', style: 'position:absolute;inset:0' });
  const scrim = h('div', { class: 'scrim' });
  if (o.onDismiss) scrim.addEventListener('click', o.onDismiss);
  const body = h('div', { class: 'stack' });
  const sheet = h('div', { class: 'sheet paper', role: 'dialog', 'aria-modal': 'true', 'aria-label': o.label ?? o.title });
  if (o.maxHeight) sheet.style.maxHeight = o.maxHeight;
  sheet.append(h('div', { class: 'grabber', 'aria-hidden': 'true' }));
  if (o.title) sheet.append(h('h2', { text: o.title }));
  sheet.append(body);
  root.append(scrim, sheet);
  parent.appendChild(root);
  /** Thay nội dung; giữ nguyên vị trí cuộn trừ khi resetScroll. */
  const setContent = (...c: Child[]) => fill(c, false);
  const fill = (c: Child[], reset: boolean) => {
    const prev = sheet.scrollTop;
    body.replaceChildren();
    for (const x of c) if (x) body.append(x);
    sheet.scrollTop = reset ? 0 : prev;
  };
  fill(children, true);
  body.querySelector<HTMLElement>('button:not(:disabled), input')?.focus({ preventScroll: true });
  return { root, body, setContent, reset: (...c: Child[]) => fill(c, true), close: () => root.remove() };
}
