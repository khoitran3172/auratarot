// Màn chợ chính: HUD trên (vàng), cảnh chợ giữa (Phaser), panel giấy sổ dưới.
import Phaser from 'phaser';
import { formatClock, formatDate } from '../../core/Calendar';
import { customerById, DATA, itemById } from '../../core/Data';
import type { MarketSession, ServeInfo, ServeOutcome } from '../../core/Day';
import type { GangsterChoice } from '../../core/Gangster';
import { viaLabelIndex } from '../../core/Luck';
import { markBeatSeen, storyBeats, xungFor } from '../../core/Story';
import { fmt, money, t, tList } from '../../core/Text';
import { audio } from '../../services/AudioService';
import { App } from '../App';
import { Backdrop } from '../actors/Backdrop';
import { CustomerActor, drawPerson, type Look } from '../actors/Customer';
import { Pet } from '../actors/Pet';
import { Stall } from '../actors/Stall';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { playStory } from '../ui/Dialog';
import { h, prefersReducedMotion } from '../ui/dom';
import { Meter, type MeterHandle } from '../ui/Meter';
import { Sheet } from '../ui/Sheet';
import { openDebtBook, openSettings } from '../ui/Sheets';
import { toast } from '../ui/Toast';
import { FONT_HAND, FONT_SIGN, RES } from '../palette';
import { BaseScene } from './BaseScene';

const QUEUE_X = [196, 132, 74, 20];
const FEET_Y = 506;

export class MarketScene extends BaseScene {
  private m!: MarketSession;
  private backdrop!: Backdrop;
  private stall!: Stall;
  private pet!: Pet;
  private actors = new Map<number, CustomerActor>();
  private logLines: string[] = [];
  private storyPlaying = false;
  private menuOpen = false;
  private closing = false;
  private karaokeNotes: Phaser.GameObjects.Text[] = [];

  // DOM refs
  private hud!: { date: HTMLElement; clock: HTMLElement; money: HTMLElement; via: MeterHandle; rep: MeterHandle; deo: HTMLElement };
  private panel!: { chips: HTMLElement; serve: HTMLButtonElement; clearance: HTMLButtonElement; close: HTMLButtonElement; log: HTMLElement };
  private banner: HTMLElement | null = null;
  private lastPanelKey = '';
  private lastHudKey = '';

  constructor() { super('Market'); }

  create(): void {
    this.setup();
    this.actors.clear();
    this.logLines = [];
    this.closing = false;
    this.lastPanelKey = this.lastHudKey = '';
    const run = App.run!;
    const s = App.s;
    this.m = run.openMarket();
    this.m.paused = true;

    this.backdrop = new Backdrop(this, { top: 104, groundY: 330, bottom: 530, lanterns: run.ctx.midAutumn });
    this.stall = new Stall(this, { cx: 195, roofY: 200, tableY: 392 }, `Sạp ${s.player.name}`);
    this.stall.setStock(s.stock);
    this.stall.setIncense(run.incenseLit);
    this.pet = new Pet(this, 352, 452, s.player.petName);
    if (run.karaoke) this.drawKaraoke();

    this.buildHud();
    this.buildPanel();
    this.wireEvents();
    this.refresh(true);
    void this.intro();
  }

  private async intro(): Promise<void> {
    const run = App.run!;
    const s = App.s;
    this.storyPlaying = true;
    if (run.ctx.midAutumn) this.flashBanner(`${t('calendar.midAutumn')} · ${formatDate(s)}`);
    else if (run.ctx.holiday) this.flashBanner(formatDate(s));
    if (run.karaoke) this.log(t('market.karaoke'));
    await playStory(storyBeats(s, 'market'));
    markBeatSeen(s, 'market');
    this.storyPlaying = false;
    this.m.paused = false;
    this.log(t('market.opening') + '…');
  }

  // ---------- Dựng giao diện ----------

  private buildHud(): void {
    const via = Meter(t('hud.via'), 'via');
    const rep = Meter(t('hud.rep'), 'rep');
    const deo = h('span', { class: 'meter', style: 'align-items:center' });
    const date = h('div', { class: 'date' });
    const clock = h('span', { class: 'clock' });
    const moneyEl = h('div', { class: 'money', 'aria-label': 'Tiền' });
    const hud = h('div', { class: 'hud', role: 'region', 'aria-label': 'Thông tin' },
      h('div', {}, date, clock),
      moneyEl,
      h('div', { class: 'meters' }, via.el, rep.el, deo,
        h('div', { class: 'row', style: 'gap:4px' },
          h('button', { class: 'icon-btn', type: 'button', 'aria-label': t('hud.debts'), text: 'Sổ', onclick: () => this.openMenu(() => openDebtBook(() => this.closeMenu())) }),
          h('button', { class: 'icon-btn', type: 'button', 'aria-label': t('hud.menu'), text: '☰', onclick: () => this.openMenu(() => openSettings({
            onClose: () => this.closeMenu(),
            onToTitle: () => this.go('Title'),
            onWiped: () => this.go('Title'),
          })) }))),
    );
    this.ui.add(hud);
    this.hud = { date, clock, money: moneyEl, via, rep, deo };
  }

  private buildPanel(): void {
    const chips = h('div', { class: 'chips', 'aria-label': 'Tồn kho' });
    const serve = Button({ label: t('market.noCustomer'), kind: 'primary', block: true, onClick: () => this.openHaggle() });
    const clearance = Button({ label: t('market.clearance'), kind: 'sun', onClick: () => this.startClearance() });
    const close = Button({ label: t('market.close'), onClick: () => this.m.endByPlayer() });
    clearance.style.flex = close.style.flex = '1';
    const log = h('ul', { class: 'log', 'aria-label': 'Nhật ký' });
    const panel = h('div', { class: 'panel paper' }, chips, serve, h('div', { class: 'row' }, clearance, close), log);
    this.ui.add(panel);
    this.panel = { chips, serve, clearance, close, log };
  }

  private drawKaraoke(): void {
    const c = this.add.container(300, 520);
    const g = this.add.graphics();
    drawPerson(g, DATA.events.gangsters.anhhai.look as Look);
    const spk = this.add.graphics();
    spk.fillStyle(0x222222).fillRoundedRect(22, -44, 26, 44, 4);
    spk.fillStyle(0x555555).fillCircle(35, -30, 8).fillCircle(35, -10, 5);
    c.add([g, spk]);
    for (let i = 0; i < 3; i++) {
      const n = this.add.text(300, 420, '♪', { fontFamily: FONT_HAND, fontSize: '22px', color: '#FFD23F', resolution: RES });
      n.setStroke('#23324A', 3);
      this.karaokeNotes.push(n);
    }
  }

  // ---------- Sự kiện từ core ----------

  private wireEvents(): void {
    const bus = App.bus;
    bus.on('customerArrived', ({ uid, customerId }) => {
      const def = customerById(DATA, customerId);
      const a = new CustomerActor(this, uid, def, -40, FEET_Y);
      a.container.on('pointerup', () => this.tapCustomer(uid));
      this.actors.set(uid, a);
      this.layoutQueue();
    });
    bus.on('customerLeft', ({ uid, customerId, reason }) => {
      const a = this.actors.get(uid);
      this.actors.delete(uid);
      if (reason === 'patience') {
        const name = customerById(DATA, customerId).name;
        if (a) this.floatText(a.container.x, a.container.y - 120, t('haggle.leftTag'), '#D62828');
        this.log(`${t('market.left', { name })}: “${this.m.leaveLineFor(customerId)}”`);
        audio.sad();
      }
      a?.leave();
      this.layoutQueue();
    });
    bus.on('openingResult', ({ success }) => {
      toast(success ? t('market.openingWin') : t('market.openingLose'));
      this.log(success ? t('market.openingWin') : t('market.openingLose'));
    });
    bus.on('praiseStarted', () => { toast(t('market.praise')); this.log(t('market.praise')); });
    bus.on('deoMilestone', ({ deo }) => toast(t('market.deoMilestone', { deo })));
    bus.on('stockChanged', ({ stock }) => {
      this.stall.setStock(stock);
      if (this.m.outOfStock) toast(t('market.outOfStock'));
    });
    bus.on('clearanceStarted', () => {
      this.banner?.remove();
      this.banner = h('div', { class: `banner${prefersReducedMotion() ? '' : ' pulse'}`, style: 'top:112px', role: 'status', text: t('market.clearanceOn') });
      this.ui.add(this.banner);
    });
    bus.on('dayClosing', ({ reason }) => { void this.handleClosing(reason); });
  }

  // ---------- Vòng lặp ----------

  update(_time: number, delta: number): void {
    const dt = Math.min(delta, 100) / 1000;
    this.m.tick(dt);
    this.stall.update(dt);
    this.pet.update(dt);
    for (const a of this.actors.values()) a.update(dt);
    const head = this.m.queue[0];
    for (const q of this.m.queue) {
      const a = this.actors.get(q.uid);
      if (!a) continue;
      a.setHead(q === head && !this.m.inDialogue);
      a.setPatience(q === head && !this.m.inDialogue ? q.waitSec / q.def.patienceSec : null);
    }
    if (this.karaokeNotes.length) {
      const tt = prefersReducedMotion() ? 0 : this.time.now / 1000;
      this.karaokeNotes.forEach((n, i) => {
        const p = (tt * 0.5 + i / 3) % 1;
        n.setPosition(310 + Math.sin(p * 8 + i) * 14, 440 - p * 60).setAlpha(1 - p);
      });
    }
    this.backdrop.setMinute(this.m.minute);
    this.refresh();
  }

  /** Cập nhật HUD/panel khi giá trị đổi (tránh đụng DOM mỗi frame). */
  private refresh(force = false): void {
    const s = App.s;
    const m = this.m;
    const clock = formatClock(Math.floor(m.minute / 5) * 5);
    const hudKey = `${clock}|${s.money}|${s.via}|${s.rep}|${s.deo}`;
    if (force || hudKey !== this.lastHudKey) {
      this.lastHudKey = hudKey;
      this.hud.date.textContent = formatDate(s);
      this.hud.clock.textContent = clock;
      this.hud.money.textContent = money(s.money);
      this.hud.via.set(s.via, `${Math.round(s.via)} · ${tList('hud.viaLabels')[viaLabelIndex(s.via)]}`);
      this.hud.rep.set(s.rep, String(Math.round(s.rep)));
      this.hud.deo.textContent = `${t('hud.deo')} ${s.deo}`;
    }
    const head = m.queue[0];
    const panelKey = `${head?.uid ?? '-'}|${m.canClearance}|${m.clearance}|${m.canClose}|${JSON.stringify(s.stock)}|${m.inDialogue}|${this.storyPlaying}`;
    if (!force && panelKey === this.lastPanelKey) return;
    this.lastPanelKey = panelKey;
    this.panel.chips.replaceChildren(...DATA.items.map((it) => Chip(`${it.name} ${s.stock[it.id] ?? 0}`, it.color, !(s.stock[it.id] > 0))));
    const p = this.panel;
    p.serve.textContent = head ? t('market.serve', { name: head.def.name }) : t('market.noCustomer');
    p.serve.disabled = !head || m.inDialogue || this.storyPlaying || this.closing;
    p.clearance.hidden = !m.canClearance;
    p.close.hidden = !m.outOfStock;
    p.close.disabled = p.clearance.disabled = this.closing || m.inDialogue;
  }

  private log(text: string): void {
    this.logLines.unshift(text);
    this.logLines.length = Math.min(this.logLines.length, 4);
    this.panel.log.replaceChildren(...this.logLines.map((l) => h('li', { text: l })));
  }

  private layoutQueue(): void {
    this.m.queue.forEach((q, i) => {
      const a = this.actors.get(q.uid);
      if (!a) return;
      a.container.setDepth(10 - i);
      a.walkTo(QUEUE_X[Math.min(i, QUEUE_X.length - 1)]);
    });
  }

  private floatText(x: number, y: number, text: string, color: string): void {
    const tx = this.add.text(x, y, text, { fontFamily: FONT_SIGN, fontSize: '20px', color, resolution: RES }).setOrigin(0.5).setDepth(50);
    tx.setStroke('#FBF3D9', 4);
    if (prefersReducedMotion()) { this.time.delayedCall(900, () => tx.destroy()); return; }
    this.tweens.add({ targets: tx, y: y - 40, alpha: 0, duration: 1100, ease: 'Sine.easeOut', onComplete: () => tx.destroy() });
  }

  private flashBanner(text: string): void {
    const b = h('div', { class: 'banner', style: 'top:112px', role: 'status', text });
    this.ui.add(b);
    setTimeout(() => b.remove(), 3500);
  }

  // ---------- Tương tác ----------

  private tapCustomer(uid: number): void {
    if (this.m.queue[0]?.uid === uid) this.openHaggle();
    else toast(t('market.headFirst'));
  }

  private openMenu(open: () => void): void {
    this.menuOpen = true;
    this.m.paused = true;
    open();
  }

  private closeMenu(): void {
    this.menuOpen = false;
    if (!this.storyPlaying) this.m.paused = false;
    this.refresh(true);
  }

  private startClearance(): void {
    if (this.m.startClearance()) {
      audio.rao();
      this.log(t('market.clearanceOn'));
    }
  }

  private openHaggle(): void {
    if (this.storyPlaying || this.menuOpen || this.closing) return;
    const sv = this.m.serve();
    if (!sv) { this.refresh(true); return; }
    const actor = this.actors.get(sv.customer.uid);
    actor?.setHead(false);
    const it = itemById(DATA, sv.order.itemId);
    const sheet = Sheet(this.ui.el, { title: sv.customer.def.name, label: `Hội thoại với ${sv.customer.def.name}` });
    const tag = sv.customer.isOpening && this.m.openingPending ? h('span', { class: 'chip', style: 'align-self:flex-start;border-color:#D62828', text: t('market.opening') }) : null;
    const priceLine = sv.clearance
      ? t('haggle.clearancePrice', { list: money(sv.order.list).replace('k', '') })
      : t('haggle.yourPrice', { list: money(sv.order.list).replace('k', ''), offer: money(sv.order.offer).replace('k', '') });
    const opts = sv.options.map((o) => {
      const meta = DATA.strings.haggle.tactics[o.id];
      const hint = fmt(meta.hint, { rate: o.rate === null ? 100 : Math.round(o.rate * 100), unit: it.unit });
      return Button({
        label: meta.label, hint, block: true, className: 'tactic', disabled: !o.enabled,
        kind: o.id === 'accept' || o.id === 'sell' || o.id === 'sellFull' ? 'primary' : 'secondary',
        onClick: () => this.resolve(sheet, sv, o.id),
      });
    });
    sheet.reset(
      tag,
      h('p', { class: 'quote', text: `“${sv.greet}”` }),
      h('p', { class: 'sub', text: `${sv.order.qty} ${it.unit} ${it.name.toLowerCase()} · ${priceLine}` }),
      ...opts,
    );
  }

  private resolve(sheet: ReturnType<typeof Sheet>, sv: ServeInfo, tactic: Parameters<MarketSession['choose']>[0]): void {
    const actor = this.actors.get(sv.customer.uid);
    const ax = actor?.container.x ?? 196;
    const out: ServeOutcome = this.m.choose(tactic);
    const r = out.result;
    const it = itemById(DATA, sv.order.itemId);
    const name = sv.customer.def.name;
    let outcomeText: string;
    let cls: string;
    if (r.outcome === 'left') {
      outcomeText = t('haggle.outcome.left'); cls = 'bad';
      this.floatText(ax, FEET_Y - 120, t('haggle.leftTag'), '#D62828');
      this.log(t('market.left', { name }));
      audio.sad();
    } else if (r.outcome === 'credit') {
      outcomeText = t('haggle.outcome.credit', { price: money(r.price).replace('k', '') }); cls = 'bad';
      this.floatText(ax, FEET_Y - 120, `Sổ ${money(r.price)}`, '#1F6FA8');
      this.log(t('market.credit', { name, price: money(r.price).replace('k', '') }));
    } else {
      outcomeText = t('haggle.outcome.sold', { price: money(r.price).replace('k', '') }); cls = 'good';
      this.floatText(ax, FEET_Y - 120, `+${money(r.price + r.tip)}`, '#2B6B2E');
      this.log(t('market.sold', { qty: r.qty, unit: it.unit, item: it.name.toLowerCase(), name, price: money(r.price).replace('k', '') }));
      audio.ting();
    }
    const deltas = [
      r.via ? `${t('hud.via')} ${r.via > 0 ? '+' : ''}${r.via}` : '',
      r.rep ? `${t('hud.rep')} ${r.rep > 0 ? '+' : ''}${r.rep}` : '',
      r.deo ? `${t('hud.deo')} +${r.deo}` : '',
      r.cost ? `−${money(r.cost)}` : '',
      r.tip ? t('haggle.outcome.tip', { tip: r.tip }) : '',
    ].filter(Boolean).join(' · ');
    sheet.reset(
      out.playerLine ? h('p', { class: 'sub', text: `${App.s.player.name}: “${out.playerLine}”` }) : null,
      out.reactLine ? h('p', { class: 'quote', text: `“${out.reactLine}”` }) : null,
      h('p', { class: `big-money ${cls}`, text: outcomeText }),
      deltas ? h('p', { class: 'sub', text: deltas }) : null,
      Button({ label: t('haggle.continue'), kind: 'primary', block: true, onClick: () => {
        sheet.close();
        if (!this.menuOpen && !this.closing) this.m.paused = false;
        this.refresh(true);
      } }),
    );
    // Trong lúc đọc phản ứng của khách, đồng hồ vẫn dừng
    this.m.paused = true;
    this.refresh(true);
  }

  // ---------- Dọn sạp ----------

  private async handleClosing(reason: 'time' | 'player'): Promise<void> {
    if (this.closing) return;
    this.closing = true;
    this.refresh(true);
    if (reason === 'time') toast(t('market.closing'));
    // Khách còn xếp hàng thì về
    for (const a of this.actors.values()) a.leave();
    this.actors.clear();
    const run = App.run!;
    run.close();
    if (run.needsGangster()) await this.gangsterEvent();
    this.time.delayedCall(400, () => this.go('EndOfDay'));
  }

  private gangsterEvent(): Promise<void> {
    const s = App.s;
    const g = DATA.events.gangsters.anhhai;
    const xung = xungFor('anhhai', s);
    const pick = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
    // Anh Hai bước vào cảnh
    const c = this.add.container(-40, FEET_Y);
    const gr = this.add.graphics();
    drawPerson(gr, g.look as Look);
    c.add(gr);
    this.tweens.add({ targets: c, x: 196, duration: prefersReducedMotion() ? 1 : 700 });

    return new Promise((resolve) => {
      const sheet = Sheet(this.ui.el, { title: t('gangster.title') });
      const portrait = h('div', { class: 'row' },
        h('div', { class: 'portrait', style: 'background:#111', 'aria-hidden': 'true', text: 'H' }),
        h('span', { class: 'sub', text: g.name }));
      const choices = (Object.keys(g.options) as GangsterChoice[]).map((id) => {
        const o = g.options[id];
        return Button({
          label: o.label, hint: o.hint, block: true, className: 'tactic',
          kind: id === 'pay' ? 'primary' : 'secondary',
          onClick: () => {
            const r = App.run!.payGangster(id);
            const opt = g.options[id] as { react?: string[]; success?: string[]; fail?: string[] };
            const lines = opt.react ?? (r.success ? opt.success : opt.fail) ?? [];
            if (r.paid) audio.click();
            sheet.reset(
              portrait,
              h('p', { class: 'quote', text: `“${fmt(pick(lines), { xung })}”` }),
              h('p', { class: `big-money ${r.paid ? 'bad' : ''}`, text: r.paid ? `−${money(r.paid)}` : t('market.karaoke') }),
              Button({ label: t('gangster.continue'), kind: 'primary', block: true, onClick: () => {
                sheet.close();
                this.tweens.add({ targets: c, x: 440, duration: prefersReducedMotion() ? 1 : 700 });
                resolve();
              } }),
            );
          },
        });
      });
      sheet.reset(portrait, h('p', { class: 'quote', text: `“${fmt(pick(g.arrive), { xung })}”` }), ...choices);
    });
  }

  protected teardown(): void {
    App.bus.clear();
    this.karaokeNotes = [];
    this.banner = null;
  }
}

