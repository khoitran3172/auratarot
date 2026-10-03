// Hộp xác nhận và chuỗi hội thoại cốt truyện.
import type { StoryLine } from '../../core/Story';
import { t } from '../../core/Text';
import { Button } from './Button';
import { h, uiRoot } from './dom';
import { Sheet } from './Sheet';

export function confirmDialog(message: string, yes: string, no: string): Promise<boolean> {
  return new Promise((resolve) => {
    const s = Sheet(uiRoot(), { label: message, onDismiss: () => { s.close(); resolve(false); } },
      h('p', { class: 'quote', text: message }),
      Button({ label: yes, kind: 'primary', block: true, onClick: () => { s.close(); resolve(true); } }),
      Button({ label: no, block: true, onClick: () => { s.close(); resolve(false); } }),
    );
  });
}

const PORTRAIT: Record<string, string> = { bachin: '#7B5E57', anhhai: '#111111', ongnam: '#5B7553', you: '#1F6FA8' };

/** Hiện lần lượt từng câu thoại cốt truyện; resolve khi xem hết. */
export function playStory(lines: StoryLine[], parent: HTMLElement = uiRoot()): Promise<void> {
  if (lines.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    const wrap = h('div', { style: 'position:absolute;inset:0' });
    const scrim = h('div', { class: 'scrim', style: 'background:rgba(13,22,35,.25)' });
    const box = h('div', { class: 'story paper live', role: 'dialog', 'aria-modal': 'true' });
    wrap.append(scrim, box);
    parent.appendChild(wrap);
    let i = 0;
    const render = () => {
      const l = lines[i];
      const last = i === lines.length - 1;
      box.replaceChildren(
        h('div', { class: 'row' },
          h('div', { class: 'portrait', style: `background:${PORTRAIT[l.speaker] ?? '#555'}`, 'aria-hidden': 'true', text: l.speakerName.split(' ').pop()?.charAt(0) ?? '' }),
          h('div', { class: 'who', text: l.speakerName })),
        h('p', { class: 'what', text: `“${l.text}”` }),
        Button({ label: last ? t('story.done') : t('story.next'), kind: last ? 'primary' : 'secondary', block: true, onClick: () => {
          if (last) { wrap.remove(); resolve(); } else { i++; render(); }
        } }),
      );
      box.querySelector('button')?.focus({ preventScroll: true });
    };
    render();
  });
}
