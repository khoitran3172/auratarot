// Tiện ích DOM nhỏ cho lớp UI overlay (không dùng framework để giữ bundle nhẹ).

type Attrs = Record<string, string | number | boolean | EventListener | undefined> & {
  class?: string;
  text?: string;
  html?: string;
};

export type Child = Node | string | null | undefined | false;

export function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Attrs = {}, ...children: Child[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === false) continue;
    if (k === 'class') el.className = String(v);
    else if (k === 'text') el.textContent = String(v);
    else if (k === 'html') el.innerHTML = String(v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v as EventListener);
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, String(v));
  }
  append(el, ...children);
  return el;
}

export function append(el: HTMLElement, ...children: Child[]): void {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
}

export function uiRoot(): HTMLElement {
  return document.getElementById('ui') as HTMLElement;
}

/** Một lớp UI riêng cho từng scene; scene tắt thì gỡ lớp. */
export class Layer {
  readonly el: HTMLDivElement;

  constructor(name: string) {
    this.el = h('div', { class: `layer layer-${name}`, style: 'position:absolute;inset:0;pointer-events:none' });
    uiRoot().appendChild(this.el);
  }

  add<T extends Node>(n: T): T {
    this.el.appendChild(n);
    return n;
  }

  clear(): void {
    this.el.replaceChildren();
  }

  destroy(): void {
    this.el.remove();
  }
}

export function prefersReducedMotion(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}
