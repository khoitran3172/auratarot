// Anh Hai Dây Chuyền thu phí trông sạp (hư cấu, hài, không bạo lực).
import { DATA, type GameData } from './Data';
import { addMoney, addRelation, addVia } from './GameState';
import type { GameState } from './types';

export type GangsterChoice = 'pay' | 'praise' | 'tea' | 'refuse';

/** Ngày chơi chia hết cho 3 thì Anh Hai ghé lúc dọn sạp. */
export function isCollectionDay(dayCount: number, data: GameData = DATA): boolean {
  return dayCount % data.config.gangster.everyNDays === 0;
}

export interface GangsterResult {
  choice: GangsterChoice;
  /** Khen thành công hay không (chỉ có nghĩa với 'praise') */
  success: boolean;
  paid: number;
  via: number;
  karaoke: boolean;
}

export function previewGangster(choice: GangsterChoice, deo: number, data: GameData = DATA): GangsterResult {
  const g = data.config.gangster;
  switch (choice) {
    case 'pay': return { choice, success: true, paid: g.fee, via: 0, karaoke: false };
    // Dẻo miệng ≥ 5 thì chỉ trả 18k, không đủ thì vẫn trả 20k kèm câu chê
    case 'praise': {
      const ok = deo >= g.praiseDeoMin;
      return { choice, success: ok, paid: ok ? g.praiseFee : g.fee, via: 0, karaoke: false };
    }
    // Trả 15k + 3k trà đá, Vía +3
    case 'tea': return { choice, success: true, paid: g.teaFee + g.teaCost, via: g.teaVia, karaoke: false };
    // Không trả: mai anh hát karaoke trước sạp
    case 'refuse': return { choice, success: true, paid: 0, via: 0, karaoke: true };
  }
}

export function resolveGangster(state: GameState, choice: GangsterChoice, data: GameData = DATA): GangsterResult {
  const r = previewGangster(choice, state.deo, data);
  addMoney(state, -r.paid); // Không đủ tiền thì đưa hết, không bao giờ âm
  addVia(state, r.via);
  state.karaokeTomorrow = r.karaoke;
  const rel: Record<GangsterChoice, number> = { pay: 2, praise: r.success ? 3 : 0, tea: 5, refuse: -10 };
  addRelation(state, 'anhhai', rel[choice]);
  return r;
}
