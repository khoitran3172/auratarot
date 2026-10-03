// Pet. MVP: mèo mướp ngủ trên ghế nhựa, buff khách VIP +20%.
import { DATA, type GameData } from './Data';
import type { GameState } from './types';

export interface PetDef { id: string; kind: 'cat'; buff: 'vip' }

export const PETS: PetDef[] = [{ id: 'cat', kind: 'cat', buff: 'vip' }];

export function hasPet(state: GameState): boolean {
  return !!state.player.petName;
}

export function petVipMultiplier(state: GameState, data: GameData = DATA): number {
  return hasPet(state) ? data.config.pet.vipMul : 1;
}
