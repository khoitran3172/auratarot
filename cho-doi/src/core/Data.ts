// Gom toàn bộ JSON cấu hình. Designer sửa số trong src/data/*.json là game đổi theo.
import items from '../data/items.json';
import customers from '../data/customers.json';
import dialogues from '../data/dialogues.json';
import events from '../data/events.json';
import news from '../data/news.json';
import config from '../data/config.json';
import strings from '../data/strings.vi.json';
import type { CustomerDef, DialogueSet, ItemDef, NewsDef, OriginDef } from './types';

export type Config = Omit<typeof config, 'origins'> & { origins: OriginDef[] };

export interface GameData {
  items: ItemDef[];
  customers: CustomerDef[];
  dialogues: {
    playerLines: Record<string, string[]>;
    customers: Record<string, DialogueSet>;
    clearanceGreet: string[];
    clearanceThanks: string[];
  };
  events: typeof events;
  news: NewsDef[];
  config: Config;
  strings: typeof strings;
}

export const DATA: GameData = {
  items: items as ItemDef[],
  customers: customers as CustomerDef[],
  dialogues: dialogues as unknown as GameData['dialogues'],
  events,
  news: news as NewsDef[],
  config: config as Config,
  strings,
};

export function itemById(data: GameData, id: string): ItemDef {
  const it = data.items.find((i) => i.id === id);
  if (!it) throw new Error(`Unknown item ${id}`);
  return it;
}

export function customerById(data: GameData, id: string): CustomerDef {
  const c = data.customers.find((i) => i.id === id);
  if (!c) throw new Error(`Unknown customer ${id}`);
  return c;
}

export function originById(data: GameData, id: string): OriginDef {
  return data.config.origins.find((o) => o.id === id) ?? data.config.origins[0];
}
