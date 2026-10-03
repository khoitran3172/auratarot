// Sổ cuối ngày: bán được, tiền nhập, phí, lời lỗ, hàng hư, hàng còn, sổ nợ, tiền trong túi. "Đi ngủ" thì sang ngày mới và tự lưu.
import { formatDate } from '../../core/Calendar';
import { DATA } from '../../core/Data';
import { markBeatSeen, storyBeats } from '../../core/Story';
import { money, t } from '../../core/Text';
import { App } from '../App';
import { Backdrop } from '../actors/Backdrop';
import { Pet } from '../actors/Pet';
import { Stall } from '../actors/Stall';
import { Button } from '../ui/Button';
import { playStory } from '../ui/Dialog';
import { h } from '../ui/dom';
import { Sheet } from '../ui/Sheet';
import { BaseScene } from './BaseScene';

export class EndOfDayScene extends BaseScene {
  private pet!: Pet;

  constructor() { super('EndOfDay'); }

  create(): void {
    this.setup();
    const s = App.s;
    new Backdrop(this, { top: 0, groundY: 300, bottom: 844 }).setMinute(1100);
    const stall = new Stall(this, { cx: 195, roofY: 150, tableY: 330 }, `Sạp ${s.player.name}`);
    stall.setStock(s.stock);
    this.pet = new Pet(this, 352, 390, s.player.petName);
    void this.show();
  }

  update(_t: number, delta: number): void {
    this.pet.update(delta / 1000);
  }

  private async show(): Promise<void> {
    const s = App.s;
    await playStory(storyBeats(s, 'end'));
    markBeatSeen(s, 'end');
    const run = App.run!;
    const r = run.report();
    const items = (rec: Record<string, number>) => {
      const parts = DATA.items.filter((i) => (rec[i.id] ?? 0) > 0).map((i) => `${rec[i.id]} ${i.unit} ${i.name.toLowerCase()}`);
      return parts.length ? parts.join(', ') : t('endOfDay.none');
    };
    const row = (label: string, value: string, cls = '') => h('tr', {}, h('td', { text: label }), h('td', { class: cls, text: value }));
    const section = (label: string) => h('tr', { class: 'section' }, h('td', { colspan: 2, text: label }));
    const fb = r.feeBreakdown;
    const feeDetail = [
      fb.market ? `${t('endOfDay.marketFee')} ${money(fb.market)}` : '',
      fb.gangster ? `Anh Hai ${money(fb.gangster)}` : '',
      fb.incense ? `nhang ${money(fb.incense)}` : '',
      fb.gift ? `quà ${money(fb.gift)}` : '',
    ].filter(Boolean).join(', ');

    const table = h('table', { class: 'ledger' }, h('tbody', {},
      row(t('endOfDay.revenue'), `+${money(r.revenue + r.tips)}`, 'good'),
      r.collected ? row('Thu nợ cũ', `+${money(r.collected)}`, 'good') : null,
      row(t('endOfDay.cost'), `−${money(r.purchase)}`, 'bad'),
      row(t('endOfDay.fees'), `−${money(r.fees)}`, 'bad'),
      feeDetail ? h('tr', {}, h('td', { colspan: 2, class: 'sub', text: feeDetail })) : null,
      h('tr', { class: 'total' }, h('td', { text: t('endOfDay.profit') }),
        h('td', { class: r.profit >= 0 ? 'good' : 'bad', text: `${r.profit >= 0 ? '+' : '−'}${money(Math.abs(r.profit))}` })),
      section('Hàng hóa'),
      row(t('endOfDay.spoiled'), items(r.spoiled), r.spoiledValue ? 'bad' : ''),
      row(t('endOfDay.left'), items(r.left)),
      section('Sổ sách'),
      r.creditSales ? row('Ghi sổ hôm nay', money(r.creditSales), 'bad') : null,
      row(t('endOfDay.debts'), r.debtsTotal ? money(r.debtsTotal) : t('endOfDay.none')),
      r.loanOwed ? row(t('endOfDay.loan'), money(r.loanOwed), 'bad') : null,
      run.ledger.loanRepaid ? row('Đã trả bà Chín', `−${money(run.ledger.loanRepaid)}`) : null,
      h('tr', { class: 'total' }, h('td', { text: t('endOfDay.wallet') }), h('td', { text: money(r.money) })),
    ));

    Sheet(this.ui.el, { title: `${t('endOfDay.title')} · ${formatDate(s)}`, maxHeight: '78%' },
      table,
      Button({ label: t('endOfDay.sleep'), kind: 'primary', block: true, onClick: () => this.sleep() }),
    );
  }

  private async sleep(): Promise<void> {
    App.run!.sleep();
    await App.save();
    App.startDay();
    this.go('Wholesale');
  }
}
