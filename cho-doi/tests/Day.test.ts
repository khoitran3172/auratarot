import { describe, expect, it } from 'vitest';
import { DayRun } from '../src/core/Day';
import { DATA } from '../src/core/Data';
import { EventBus, type GameEvents } from '../src/core/EventBus';
import { migrate, totalStock } from '../src/core/GameState';
import type { GangsterChoice } from '../src/core/Gangster';
import { Rng } from '../src/core/Rng';
import type { GameState } from '../src/core/types';
import { newState } from './helpers';

/** Bot mua hàng tham lam vừa sức, đủ để chạy hết vòng ngày. */
function botBuy(run: DayRun): void {
  const s = run.state;
  const cart: Record<string, number> = { rau: 0, ca: 0, thit: 0 };
  const budget = s.money * 0.8;
  let spent = 0;
  let added = true;
  while (added) {
    added = false;
    for (const it of DATA.items) {
      const cost = run.ctx.buyPrice[it.id] * it.buyStep;
      if (spent + cost <= budget && cart[it.id] < 20) { cart[it.id] += it.buyStep; spent += cost; added = true; }
    }
  }
  expect(run.buy(cart)).toBe(true);
}

function playDay(state: GameState, rng: Rng, bus = new EventBus<GameEvents>()): DayRun {
  const run = DayRun.start(state, bus);
  botBuy(run);
  run.lightIncense();
  const m = run.openMarket();
  let guard = 0;
  while (!m.ended) {
    if (++guard > 100000) throw new Error('Kẹt trong phiên chợ');
    m.tick(0.1);
    if (m.queue.length && rng.chance(0.5)) {
      const sv = m.serve();
      if (sv) {
        const opts = sv.options.filter((o) => o.enabled);
        m.choose(rng.pick(opts).id);
      }
    }
    if (m.canClearance && rng.chance(0.5)) m.startClearance();
    if (m.outOfStock && !m.inDialogue) m.endByPlayer();
  }
  run.close();
  if (run.needsGangster()) run.payGangster(rng.pick<GangsterChoice>(['pay', 'praise', 'tea', 'refuse']));
  return run;
}

describe('Vòng lặp ngày', () => {
  it('chơi liên tục 10 ngày không kẹt, lưu/đọc giữa các ngày', () => {
    for (const seed of [1, 2, 3, 4, 5]) {
      let state = newState({ seed });
      const rng = new Rng(seed * 101);
      for (let i = 0; i < 10; i++) {
        const run = playDay(state, rng);
        const rep = run.report();
        expect(rep.money).toBeGreaterThanOrEqual(0);
        expect(Number.isFinite(rep.profit)).toBe(true);
        run.sleep();
        state = migrate(JSON.parse(JSON.stringify(state)))!;
      }
      expect(state.dayCount).toBe(11);
      expect(state.day).toBe(23);
      expect(state.via).toBeGreaterThanOrEqual(0);
      expect(state.rep).toBeLessThanOrEqual(100);
    }
  });

  it('hết tiền hết hàng thì bà Chín cho mượn, luôn có đường đi tiếp', () => {
    const s = newState({ money: 5 });
    const run = DayRun.start(s);
    expect(run.ledger.loanTaken).toBe(100);
    expect(s.money).toBe(105);
  });

  it('mở lại save đầu ngày ra đúng tin loa phường', () => {
    const s = newState({ seed: 77 });
    const a = DayRun.start(JSON.parse(JSON.stringify(s)));
    const b = DayRun.start(JSON.parse(JSON.stringify(s)));
    expect(a.ctx.news.id).toBe(b.ctx.news.id);
  });

  it('khách mở hàng bỏ đi thì Vía −12', () => {
    const s = newState({ via: 50 });
    const run = DayRun.start(s);
    run.buy({ rau: 10 });
    const m = run.openMarket();
    let opening: boolean | null = null;
    run.bus.on('openingResult', (e) => (opening = e.success));
    while (opening === null && !m.ended) m.tick(0.1); // không tiếp khách nào
    expect(opening).toBe(false);
    expect(s.via).toBe(38);
  });

  it('khách mở hàng mua thì Vía +8', () => {
    const s = newState({ via: 50 });
    const run = DayRun.start(s);
    run.buy({ rau: 10, ca: 4 });
    const m = run.openMarket();
    while (!m.queue.length) m.tick(0.1);
    const sv = m.serve()!;
    const out = m.choose(sv.options[0].id === 'cash' ? 'credit' : sv.options[0].id);
    expect(out.wasOpening).toBe(true);
    expect(s.via).toBeGreaterThanOrEqual(58);
  });

  it('đồng hồ dừng khi đang hội thoại', () => {
    const run = DayRun.start(newState());
    run.buy({ rau: 10 });
    const m = run.openMarket();
    while (!m.queue.length) m.tick(0.1);
    m.serve();
    const t = m.minute;
    m.tick(5);
    expect(m.minute).toBe(t);
  });

  it('1 giây thật = 6 phút game, nhân tốc độ', () => {
    const s = newState();
    s.settings.speed = 2;
    const run = DayRun.start(s);
    const m = run.openMarket();
    m.tick(1);
    expect(m.minute).toBe(360 + 12);
  });

  it('18h tự dọn sạp; hàng hư, phí ban quản lý 10k', () => {
    const s = newState({ money: 200 });
    const run = DayRun.start(s);
    run.buy({ rau: 10, thit: 1 });
    const m = run.openMarket();
    m.paused = false;
    // Không tiếp ai, cho thời gian chạy hết ngày
    while (!m.ended) m.tick(0.5);
    expect(m.minute).toBe(1080);
    const before = s.money;
    run.close();
    expect(s.stock.rau).toBe(0);
    expect(s.money).toBe(before - 10);
    expect(run.report().feeBreakdown.market).toBe(10);
  });

  it('không trả phí Anh Hai thì hôm sau lượng khách ×0.6', () => {
    const s = newState({ dayCount: 3 });
    const run = DayRun.start(s);
    run.close();
    expect(run.needsGangster()).toBe(true);
    run.payGangster('refuse');
    run.sleep();
    const next = DayRun.start(s);
    expect(next.karaoke).toBe(true);
    expect(s.karaokeTomorrow).toBe(false);
  });

  it('xả hàng chỉ mở từ 17h', () => {
    const run = DayRun.start(newState());
    const m = run.openMarket();
    expect(m.startClearance()).toBe(false);
    m.minute = 1020;
    expect(m.startClearance()).toBe(true);
    expect(m.clearance).toBe(true);
  });

  it('hết hàng thì cho dọn sạp sớm', () => {
    const run = DayRun.start(newState());
    const m = run.openMarket();
    expect(totalStock(run.state)).toBe(0);
    expect(m.endByPlayer()).toBe(true);
  });
});
