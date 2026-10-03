// Chợ đầu mối 4h sáng: tin loa phường, mua hàng, thắp nhang ông Địa.
import { formatClock, formatDate } from '../../core/Calendar';
import { DATA } from '../../core/Data';
import { cartCost, type Cart } from '../../core/Economy';
import { markBeatSeen, storyBeats, xungFor } from '../../core/Story';
import { fmt, money, t } from '../../core/Text';
import { audio } from '../../services/AudioService';
import { App } from '../App';
import { Backdrop } from '../actors/Backdrop';
import { Button } from '../ui/Button';
import { playStory } from '../ui/Dialog';
import { h } from '../ui/dom';
import { Sheet, type SheetHandle } from '../ui/Sheet';
import { toast } from '../ui/Toast';
import { BaseScene } from './BaseScene';

export class WholesaleScene extends BaseScene {
  private cart: Cart = {};
  private sheet!: SheetHandle;

  constructor() { super('Wholesale'); }

  create(): void {
    this.setup();
    const run = App.run ?? App.startDay();
    this.cart = Object.fromEntries(DATA.items.map((i) => [i.id, 0]));
    new Backdrop(this, { top: 0, groundY: 300, bottom: 844 }).setMinute(run.ctx.wholesaleMin);
    this.drawTrucks();
    this.sheet = Sheet(this.ui.el, { maxHeight: '86%', label: t('wholesale.title') });
    this.render();
    audio.loa();
    void this.intro();
  }

  private async intro(): Promise<void> {
    const run = App.run!;
    const s = App.s;
    if (run.ledger.loanTaken) {
      await playStory([{ speaker: 'bachin', speakerName: 'Bà Chín', text: fmt(DATA.events.loan.offer[s.dayCount % DATA.events.loan.offer.length], { xung: xungFor('bachin', s) }) }]);
    }
    for (const d of run.ledger.collected) toast(t('wholesale.collected', { money: money(d.amount).replace('k', ''), who: d.who }));
    await playStory(storyBeats(s, 'wholesale'));
    markBeatSeen(s, 'wholesale');
  }

  private drawTrucks(): void {
    const g = this.add.graphics();
    // Xe tải chở rau, sọt, bóng đèn treo
    g.fillStyle(0x3e5c76).fillRoundedRect(10, 200, 150, 70, 6).fillRect(160, 225, 50, 45);
    g.fillStyle(0x9ad1d4, 0.8).fillRect(170, 232, 30, 16);
    g.fillStyle(0x222222).fillCircle(45, 272, 12).fillCircle(180, 272, 12);
    for (let i = 0; i < 5; i++) {
      g.fillStyle(0x3e8e41).fillRoundedRect(230 + (i % 3) * 48, 250 - Math.floor(i / 3) * 30, 44, 28, 4);
      g.lineStyle(2, 0x2b6b2e).strokeRoundedRect(230 + (i % 3) * 48, 250 - Math.floor(i / 3) * 30, 44, 28, 4);
    }
    g.lineStyle(1, 0x222222).lineBetween(0, 120, 390, 130);
    for (const x of [60, 160, 260, 350]) {
      g.lineBetween(x, 122 + x / 39, x, 140);
      g.fillStyle(0xfff1b8).fillCircle(x, 146, 7);
      g.fillStyle(0xfff1b8, 0.15).fillCircle(x, 146, 22);
    }
  }

  private render(): void {
    const run = App.run!;
    const s = App.s;
    const ctx = run.ctx;
    const cost = cartCost(this.cart, ctx);
    const afford = cost <= s.money + 1e-9;

    const rows = DATA.items.map((it) => {
      const q = this.cart[it.id];
      const step = (dir: 1 | -1) => () => {
        const next = Math.max(0, this.cart[it.id] + dir * it.buyStep);
        // Không cho thêm quá số tiền đang có
        if (dir > 0 && cartCost({ ...this.cart, [it.id]: next }, ctx) > s.money + 1e-9) return;
        this.cart[it.id] = next;
        this.render();
      };
      const canAdd = cartCost({ ...this.cart, [it.id]: q + it.buyStep }, ctx) <= s.money + 1e-9;
      return h('div', { class: 'buy-row' },
        h('div', { class: 'name', text: `${it.name}` }),
        h('div', { class: 'meta', text: `${t('wholesale.buy')} ${money(ctx.buyPrice[it.id])}/${it.unit} · ${t('wholesale.sell')} ${money(ctx.sellPrice[it.id])} · ${t('wholesale.have')} ${s.stock[it.id] ?? 0}` }),
        h('div', { class: 'stepper' },
          Button({ label: '−', ariaLabel: `Bớt ${it.buyStep} ${it.unit} ${it.name}`, disabled: q === 0, onClick: step(-1) }),
          h('span', { class: 'qty', 'aria-live': 'polite', text: String(q) }),
          Button({ label: '+', ariaLabel: `Thêm ${it.buyStep} ${it.unit} ${it.name}`, disabled: !canAdd, onClick: step(1) })),
      );
    });

    const extra: (HTMLElement | null)[] = [];
    if (ctx.midAutumn) extra.push(h('div', { class: 'banner', style: 'position:static', text: DATA.events.festival.midAutumn }));
    else if (ctx.holiday) extra.push(h('p', { class: 'sub', text: t('wholesale.holiday') }));
    if (ctx.earlyMonth) extra.push(h('p', { class: 'sub', text: DATA.events.festival.earlyMonth }));
    if (run.karaoke) extra.push(h('p', { class: 'bad', text: t('market.karaoke') }));

    this.sheet.setContent(
      h('div', { class: 'spread' },
        h('h2', { style: 'margin:0', text: t('wholesale.title') }),
        h('span', { class: 'sub', text: t('wholesale.time', { time: formatClock(ctx.wholesaleMin) }) })),
      h('div', { class: 'sub', text: formatDate({ day: s.day, month: s.month }) }),
      h('div', { class: 'news', role: 'note' }, h('b', { text: t('wholesale.news') }), ctx.news.text),
      ...extra,
      ...rows,
      h('div', { class: 'spread' }, h('span', { text: t('wholesale.total') }), h('span', { class: `big-money ${afford ? '' : 'bad'}`, text: money(cost) })),
      h('div', { class: 'spread' }, h('span', { text: t('wholesale.wallet') }), h('span', { class: 'big-money good', text: money(s.money) })),
      Button({
        label: run.incenseLit ? t('wholesale.incenseDone') : t('wholesale.incense'),
        hint: run.incenseLit ? undefined : t('wholesale.incenseHint'),
        block: true,
        disabled: run.incenseLit || s.money < DATA.config.incense.cost,
        onClick: () => { if (run.lightIncense()) { toast(`${t('hud.via')} +${DATA.config.incense.via}`); this.render(); } },
      }),
      Button({
        label: afford ? t('wholesale.go') : t('wholesale.notEnough'),
        kind: 'primary', block: true, disabled: !afford,
        onClick: () => this.leave(),
      }),
    );
  }

  private leave(): void {
    const run = App.run!;
    if (!run.buy(this.cart)) { toast(t('wholesale.notEnough')); return; }
    this.go('Market');
  }
}
