// Chương mở đầu (3 ngày đầu). Sau ngày 3 là chơi tự do.
import { DATA, type GameData } from './Data';
import { fmt } from './Text';
import type { GameState } from './types';

export type StoryPhase = 'wholesale' | 'market' | 'end';

export interface StoryLine { speaker: string; speakerName: string; text: string }

/** Cách NPC hàng xóm gọi người chơi (theo giới tính hiển thị). */
const NEIGHBOR_XUNG: Record<string, { m: string; f: string }> = {
  bachin: { m: 'con', f: 'con' },
  ongnam: { m: 'con', f: 'con' },
  anhhai: { m: 'chú em', f: 'cô em' },
};

export function xungFor(npc: string, state: GameState): string {
  return (NEIGHBOR_XUNG[npc] ?? { m: 'em', f: 'em' })[state.player.gender];
}

export function beatKey(state: GameState, phase: StoryPhase): string {
  return `day${state.dayCount}_${phase}`;
}

/** Trả về các câu thoại cốt truyện của pha này (nếu có và chưa xem). */
export function storyBeats(state: GameState, phase: StoryPhase, data: GameData = DATA): StoryLine[] {
  const key = beatKey(state, phase);
  if (state.storyFlags[key]) return [];
  const raw = (data.strings.story as unknown as Record<string, string[][]>)[key];
  if (!Array.isArray(raw)) return [];
  const speakers = data.strings.story.speakers as Record<string, string>;
  return raw.map(([speaker, text]) => ({
    speaker,
    speakerName: fmt(speakers[speaker] ?? speaker, { name: state.player.name }),
    text: fmt(text, { xung: xungFor(speaker, state), name: state.player.name }),
  }));
}

export function markBeatSeen(state: GameState, phase: StoryPhase): void {
  state.storyFlags[beatKey(state, phase)] = true;
  if (state.dayCount >= 3 && phase === 'end') state.storyFlags.chapter1Done = true;
}

/** Anh Hai chỉ bắt đầu thu phí sau khi đã ra mặt (ngày 2 trở đi). */
export function inTutorial(state: GameState): boolean {
  return state.dayCount === 1;
}
