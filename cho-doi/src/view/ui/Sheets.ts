// Các sheet dùng ở nhiều màn: Cài đặt, Sổ nợ.
import { formatDate } from '../../core/Calendar';
import { DATA } from '../../core/Data';
import { money, t } from '../../core/Text';
import type { Theme } from '../../core/types';
import { App } from '../App';
import { Button } from './Button';
import { confirmDialog } from './Dialog';
import { h, uiRoot } from './dom';
import { Sheet } from './Sheet';

export function openSettings(opts: { onClose?: () => void; onToTitle?: () => void; onWiped?: () => void } = {}): void {
  const close = () => { s.close(); opts.onClose?.(); };
  const s = Sheet(uiRoot(), { title: t('settings.title'), onDismiss: close });
  const render = () => {
    const st = App.settings;
    const slider = (label: string, value: number, on: (v: number) => void) => {
      const id = `sl-${label.length}-${Math.round(value * 100)}`;
      const input = h('input', { id, class: 'slider', type: 'range', min: 0, max: 100, step: 5, value: Math.round(value * 100) });
      input.addEventListener('input', () => on(Number(input.value) / 100));
      return h('div', { class: 'field' }, h('label', { for: id, text: label }), input);
    };
    const seg = <T extends string | number>(label: string, options: [T, string][], current: T, on: (v: T) => void) =>
      h('div', { class: 'field' }, h('span', { class: 'lbl', text: label }),
        h('div', { class: 'seg', style: `grid-template-columns:repeat(${options.length},1fr)` },
          ...options.map(([v, l]) => h('button', {
            type: 'button', 'aria-pressed': String(v === current), text: l,
            onclick: () => { on(v); render(); },
          }))));
    s.setContent(
      slider(t('settings.music'), st.music, (v) => App.updateSettings({ music: v })),
      slider(t('settings.sfx'), st.sfx, (v) => App.updateSettings({ sfx: v })),
      seg(t('settings.speed'), DATA.config.time.speeds.map((v) => [v, `×${String(v).replace('.', ',')}`] as [number, string]), st.speed,
        (v) => App.updateSettings({ speed: v })),
      seg<Theme>(t('settings.theme'), [['auto', t('settings.themeAuto')], ['light', t('settings.themeLight')], ['dark', t('settings.themeDark')]], st.theme,
        (v) => App.updateSettings({ theme: v })),
      opts.onToTitle ? Button({ label: t('settings.toTitle'), block: true, onClick: () => { s.close(); opts.onToTitle?.(); } }) : null,
      Button({ label: t('settings.wipe'), kind: 'ghost', block: true, onClick: async () => {
        if (await confirmDialog(t('settings.wipeConfirm'), t('settings.yes'), t('settings.no'))) {
          await App.wipe();
          s.close();
          opts.onWiped?.();
        }
      } }),
      Button({ label: t('settings.close'), kind: 'primary', block: true, onClick: close }),
    );
  };
  render();
}

export function openDebtBook(onClose?: () => void): void {
  const st = App.s;
  const close = () => { s.close(); onClose?.(); };
  const rows = st.debts.map((d) => h('tr', {},
    h('td', { text: `${d.who} · ${t('debtBook.since', { date: formatDate({ day: d.sinceDay, month: d.sinceMonth ?? st.month }) })}` }),
    h('td', { class: 'bad', text: money(d.amount) })));
  const s = Sheet(uiRoot(), { title: t('debtBook.title'), onDismiss: close },
    st.debts.length ? h('table', { class: 'ledger' }, h('tbody', {}, ...rows)) : h('p', { class: 'quote', text: t('debtBook.empty') }),
    st.loanOwed > 0 ? h('p', { class: 'bad', text: `${t('endOfDay.loan')}: ${money(st.loanOwed)}` }) : null,
    Button({ label: t('debtBook.close'), kind: 'primary', block: true, onClick: close }),
  );
}
