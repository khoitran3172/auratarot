// Vòng lặp một ngày: chợ đầu mối → bày sạp → bán và trả giá → xả hàng → tính sổ.
// Thời gian game tách khỏi thời gian thực: 1 giây thật = 6 phút game × hệ số tốc độ.
import { nextDate } from './Calendar';
import { makeOrder, pickCustomer, spawnInterval, type Order } from './Customers';
import { DATA, originById, type GameData } from './Data';
import { addDebt, collectDebts, needsLoan, repayLoan, takeLoan } from './Debt';
import { greetLine, leaveLine, playerLine, reactLine } from './Dialogue';
import { buildDayContext, burnIncense, purchase, rollNews, spoilOvernight, type Cart, type DayContext, type SpoilResult } from './Economy';
import { EventBus, type GameEvents } from './EventBus';
import { isCollectionDay, resolveGangster, type GangsterChoice, type GangsterResult } from './Gangster';
import { addDeo, addMoney, addRep, addVia, round1, totalStock } from './GameState';
import { resolveTactic, tacticOptions, type HaggleResult, type TacticId, type TacticOption } from './Haggle';
import { petVipMultiplier } from './Pets';
import { Rng } from './Rng';
import type { CustomerDef, Debt, GameState, ItemId } from './types';

export interface Fee { key: 'incense' | 'gift' | 'market' | 'gangster'; amount: number }

export interface Ledger {
  startMoney: number;
  purchase: number;
  revenue: number;
  tips: number;
  creditSales: number;
  fees: Fee[];
  sold: Record<ItemId, number>;
  collected: Debt[];
  loanTaken: number;
  loanRepaid: number;
  spoiled: SpoilResult | null;
  gangster: GangsterResult | null;
  customersServed: number;
  customersLost: number;
}

export interface DayReport {
  revenue: number;
  tips: number;
  purchase: number;
  fees: number;
  feeBreakdown: Record<Fee['key'], number>;
  profit: number;
  spoiled: Record<ItemId, number>;
  spoiledValue: number;
  left: Record<ItemId, number>;
  debtsTotal: number;
  collected: number;
  creditSales: number;
  loanOwed: number;
  money: number;
}

export class DayRun {
  readonly ctx: DayContext;
  readonly ledger: Ledger;
  incenseLit = false;
  /** Hôm trước không trả phí giang hồ: hôm nay Anh Hai hát karaoke */
  readonly karaoke: boolean;
  market: MarketSession | null = null;
  closed = false;

  private constructor(readonly state: GameState, readonly bus: EventBus<GameEvents>, readonly data: GameData) {
    this.ctx = buildDayContext(state, rollNews(state, data), data);
    this.karaoke = state.karaokeTomorrow;
    state.karaokeTomorrow = false;
    this.ledger = {
      startMoney: state.money, purchase: 0, revenue: 0, tips: 0, creditSales: 0, fees: [],
      sold: Object.fromEntries(data.items.map((i) => [i.id, 0])), collected: [], loanTaken: 0, loanRepaid: 0,
      spoiled: null, gangster: null, customersServed: 0, customersLost: 0,
    };
  }

  /** Sáng sớm: chọn tin loa phường, thu nợ, mượn vốn nếu kẹt. Gọi lại với cùng save sẽ ra cùng kết quả. */
  static start(state: GameState, bus = new EventBus<GameEvents>(), data: GameData = DATA): DayRun {
    const run = new DayRun(state, bus, data);
    run.ledger.collected = collectDebts(state, Rng.forDay(state.seed, state.dayCount, 2), data);
    if (needsLoan(state, data)) {
      takeLoan(state, data);
      run.ledger.loanTaken = data.config.loan.amount;
    }
    run.ledger.startMoney = state.money;
    return run;
  }

  buy(cart: Cart): boolean {
    const cost = purchase(this.state, cart, this.ctx, this.data);
    if (cost === null) return false;
    this.ledger.purchase = round1(this.ledger.purchase + cost);
    return true;
  }

  lightIncense(): boolean {
    if (this.incenseLit || !burnIncense(this.state, this.data)) return false;
    this.incenseLit = true;
    this.addFee('incense', this.data.config.incense.cost);
    return true;
  }

  openMarket(): MarketSession {
    this.market = new MarketSession(this, Rng.forDay(this.state.seed, this.state.dayCount, 3));
    return this.market;
  }

  addFee(key: Fee['key'], amount: number): void {
    if (amount > 0) this.ledger.fees.push({ key, amount });
  }

  /** Dọn sạp: tính hàng hư, phí ban quản lý, trả nợ bà Chín. */
  close(): void {
    if (this.closed) return;
    this.closed = true;
    const s = this.state;
    this.ledger.spoiled = spoilOvernight(s, this.ctx, this.data);
    const before = s.money;
    addMoney(s, -this.data.config.marketFee);
    this.addFee('market', round1(before - s.money));
    this.ledger.loanRepaid = repayLoan(s);
  }

  needsGangster(): boolean {
    return isCollectionDay(this.state.dayCount, this.data) && !this.ledger.gangster;
  }

  payGangster(choice: GangsterChoice): GangsterResult {
    const before = this.state.money;
    const r = resolveGangster(this.state, choice, this.data);
    this.addFee('gangster', round1(before - this.state.money));
    this.ledger.gangster = r;
    return r;
  }

  report(): DayReport {
    const l = this.ledger;
    const feeBreakdown = { incense: 0, gift: 0, market: 0, gangster: 0 } as Record<Fee['key'], number>;
    for (const f of l.fees) feeBreakdown[f.key] = round1(feeBreakdown[f.key] + f.amount);
    const fees = round1(l.fees.reduce((a, f) => a + f.amount, 0));
    return {
      revenue: l.revenue,
      tips: l.tips,
      purchase: l.purchase,
      fees,
      feeBreakdown,
      profit: round1(l.revenue + l.tips - l.purchase - fees),
      spoiled: l.spoiled?.spoiled ?? {},
      spoiledValue: l.spoiled?.value ?? 0,
      left: { ...this.state.stock },
      debtsTotal: this.state.debts.reduce((a, d) => a + d.amount, 0),
      collected: l.collected.reduce((a, d) => a + d.amount, 0),
      creditSales: l.creditSales,
      loanOwed: this.state.loanOwed,
      money: this.state.money,
    };
  }

  /** Đi ngủ: sang ngày mới. Gọi xong thì lưu game. */
  sleep(): void {
    const d = nextDate({ day: this.state.day, month: this.state.month });
    this.state.day = d.day;
    this.state.month = d.month;
    this.state.dayCount += 1;
  }
}

export interface QueuedCustomer {
  uid: number;
  def: CustomerDef;
  isOpening: boolean;
  /** Thời gian đã chờ ở đầu hàng (giây mô phỏng) */
  waitSec: number;
}

export interface ServeInfo {
  customer: QueuedCustomer;
  order: Order;
  greet: string;
  options: TacticOption[];
  clearance: boolean;
}

export interface ServeOutcome {
  result: HaggleResult;
  playerLine: string;
  reactLine: string;
  wasOpening: boolean;
}

export class MarketSession {
  minute: number;
  /** Giây mô phỏng đã trôi trong phiên chợ (đã nhân tốc độ) */
  simSec = 0;
  queue: QueuedCustomer[] = [];
  clearance = false;
  praiseUntil = -1;
  paused = false;
  ended = false;
  private serving: ServeInfo | null = null;
  private nextSpawnIn: number;
  private uid = 0;
  private openingSpawned = false;
  private openingResolved = false;
  private readonly cfg: GameData['config'];

  constructor(readonly run: DayRun, private readonly rng: Rng) {
    this.cfg = run.data.config;
    this.minute = this.cfg.time.openMin;
    this.nextSpawnIn = this.cfg.spawn.firstDelay;
  }

  get state(): GameState { return this.run.state; }
  get bus(): EventBus<GameEvents> { return this.run.bus; }
  get inDialogue(): boolean { return this.serving !== null; }
  get praiseActive(): boolean { return this.simSec < this.praiseUntil; }
  get canClearance(): boolean { return !this.clearance && this.minute >= this.cfg.time.clearanceMin; }
  get outOfStock(): boolean { return totalStock(this.state) === 0; }
  get canClose(): boolean { return this.outOfStock || this.minute >= this.cfg.time.closeMin; }
  get openingPending(): boolean { return !this.openingResolved; }

  spawnFactorsInterval(): number {
    const origin = originById(this.run.data, this.state.player.origin);
    const originMul = origin.spawnMulFirstDays && this.state.dayCount <= (origin.firstDays ?? 0) ? origin.spawnMulFirstDays : 1;
    return spawnInterval(this.rng, {
      rep: this.state.rep,
      newsMod: this.run.ctx.spawnMod,
      karaokeMul: this.run.karaoke ? this.cfg.karaokeMul : 1,
      praiseMul: this.praiseActive ? this.cfg.praise.mul : 1,
      clearanceMul: this.clearance ? this.cfg.clearance.spawnMul : 1,
      originMul,
    }, this.run.data);
  }

  /** Gọi mỗi frame với số giây thật. Trong lúc hội thoại hoặc pause thì đồng hồ dừng. */
  tick(dtReal: number): void {
    if (this.ended || this.paused || this.serving) return;
    const dt = dtReal * this.state.settings.speed;
    this.simSec += dt;
    this.minute = Math.min(this.cfg.time.closeMin, this.minute + dt * this.cfg.time.gameMinutesPerSecond);

    if (this.minute >= this.cfg.time.closeMin) {
      this.ended = true;
      this.bus.emit('dayClosing', { reason: 'time' });
      return;
    }

    // Khách đầu hàng chờ quá kiên nhẫn thì bỏ đi
    const head = this.queue[0];
    if (head) {
      head.waitSec += dt;
      if (head.waitSec > head.def.patienceSec) this.customerLeaves(head, 'patience');
    }

    this.nextSpawnIn -= dt;
    if (this.nextSpawnIn <= 0) {
      this.nextSpawnIn = this.spawnFactorsInterval();
      if (this.queue.length < this.cfg.queueMax) this.spawn();
    }
  }

  private spawn(): void {
    const def = pickCustomer(this.rng, {
      minute: this.minute,
      holiday: this.run.ctx.holiday,
      via: this.state.via,
      stock: this.state.stock,
      petVipMul: petVipMultiplier(this.state, this.run.data),
    }, this.run.data);
    if (!def) return;
    const c: QueuedCustomer = { uid: ++this.uid, def, isOpening: !this.openingSpawned, waitSec: 0 };
    this.openingSpawned = true;
    this.queue.push(c);
    this.bus.emit('customerArrived', { uid: c.uid, customerId: def.id });
  }

  /** Mở hội thoại với khách đầu hàng. Trả về null nếu không có khách hoặc sạp hết hàng. */
  serve(): ServeInfo | null {
    if (this.serving) return this.serving;
    const c = this.queue[0];
    if (!c) return null;
    const order = makeOrder(this.rng, c.def, {
      stock: this.state.stock, sellPrice: this.run.ctx.sellPrice, clearance: this.clearance, minute: this.minute,
    }, this.run.data);
    if (!order) {
      this.removeFromQueue(c);
      this.bus.emit('customerLeft', { uid: c.uid, customerId: c.def.id, reason: 'haggle' });
      return null;
    }
    this.serving = {
      customer: c,
      order,
      clearance: this.clearance,
      greet: greetLine(c.def.id, this.state, order, this.clearance, this.rng, this.run.data),
      options: tacticOptions(c.def, order, this.clearance, this.state, this.state.stock[order.itemId], this.state.money, this.run.data),
    };
    return this.serving;
  }

  choose(tactic: TacticId): ServeOutcome {
    const sv = this.serving;
    if (!sv) throw new Error('Not serving anyone');
    const opt = sv.options.find((o) => o.id === tactic);
    if (!opt || !opt.enabled) throw new Error(`Tactic ${tactic} not available`);
    const { customer: c, order } = sv;
    const s = this.state;
    const pLine = playerLine(tactic, c.def.id, s, order, this.rng, this.run.data);
    const r = resolveTactic(tactic, c.def, order, s, this.rng, this.run.data);

    if (r.cost > 0) {
      addMoney(s, -r.cost);
      this.run.addFee('gift', r.cost);
    }
    if (r.outcome !== 'left') {
      s.stock[order.itemId] = Math.max(0, s.stock[order.itemId] - r.qty);
      this.run.ledger.sold[order.itemId] += r.qty;
      this.run.ledger.customersServed += 1;
      if (r.outcome === 'credit') {
        addDebt(s, c.def.name, r.price);
        this.run.ledger.creditSales = round1(this.run.ledger.creditSales + r.price);
      } else {
        addMoney(s, r.price + r.tip);
        this.run.ledger.revenue = round1(this.run.ledger.revenue + r.price);
        this.run.ledger.tips = round1(this.run.ledger.tips + r.tip);
      }
      this.bus.emit('sale', { customerId: c.def.id, itemId: order.itemId, qty: r.qty, price: r.price, credit: r.outcome === 'credit' });
      this.bus.emit('stockChanged', { stock: { ...s.stock } });
      // Bà Tám: bán được ≥ giá bà đưa thì bà đi khen, khách ×1.4 trong 25s
      if (c.def.praise && r.outcome === 'sold' && r.price >= order.offer) {
        this.praiseUntil = this.simSec + this.cfg.praise.durationSec;
        this.bus.emit('praiseStarted', { untilSec: this.praiseUntil });
      }
    } else {
      this.run.ledger.customersLost += 1;
    }
    this.applyStats(r.via, r.rep, r.deo);
    const react = reactLine(c.def.id, s, order, r, sv.clearance, this.rng, this.run.data);
    const wasOpening = c.isOpening && !this.openingResolved;
    if (wasOpening) this.resolveOpening(r.outcome !== 'left');
    this.removeFromQueue(c);
    this.serving = null;
    this.bus.emit('customerLeft', { uid: c.uid, customerId: c.def.id, reason: r.outcome === 'left' ? 'haggle' : 'sold' });
    return { result: r, playerLine: pLine, reactLine: react, wasOpening };
  }

  /** Lời khách nói khi bỏ đi vì chờ lâu (để view hiển thị). */
  leaveLineFor(customerId: string): string {
    return leaveLine(customerId, this.state, this.rng, this.run.data);
  }

  private customerLeaves(c: QueuedCustomer, reason: 'patience'): void {
    this.applyStats(0, c.def.leaveRep ?? this.cfg.patienceLeaveRep, 0);
    this.run.ledger.customersLost += 1;
    if (c.isOpening && !this.openingResolved) this.resolveOpening(false);
    this.removeFromQueue(c);
    this.bus.emit('customerLeft', { uid: c.uid, customerId: c.def.id, reason });
  }

  /** Luật mở hàng: khách đầu tiên mua thì Vía +8, bỏ đi thì Vía −12. */
  private resolveOpening(success: boolean): void {
    this.openingResolved = true;
    const o = this.cfg.opening;
    this.applyStats(success ? o.successVia : o.failVia, 0, 0);
    this.bus.emit('openingResult', { success });
  }

  private applyStats(via: number, rep: number, deo: number): void {
    const s = this.state;
    if (via) { const d = addVia(s, via); this.bus.emit('viaChanged', { via: s.via, delta: d }); }
    if (rep) { const d = addRep(s, rep); this.bus.emit('repChanged', { rep: s.rep, delta: d }); }
    if (deo) {
      const before = s.deo;
      addDeo(s, deo);
      this.bus.emit('deoChanged', { deo: s.deo, delta: deo });
      for (const m of this.cfg.deoMilestones) if (before < m && s.deo >= m) this.bus.emit('deoMilestone', { deo: m });
    }
  }

  private removeFromQueue(c: QueuedCustomer): void {
    this.queue = this.queue.filter((q) => q.uid !== c.uid);
  }

  /** Cầm loa xả hàng: giá 60%, khách không trả giá, khách đến nhanh gấp đôi. */
  startClearance(): boolean {
    if (!this.canClearance) return false;
    this.clearance = true;
    this.nextSpawnIn = Math.min(this.nextSpawnIn, 1);
    this.bus.emit('clearanceStarted', {});
    return true;
  }

  /** Người chơi bấm "Dọn sạp về" (khi hết hàng). */
  endByPlayer(): boolean {
    if (!this.canClose || this.serving) return false;
    this.ended = true;
    this.bus.emit('dayClosing', { reason: 'player' });
    return true;
  }
}
