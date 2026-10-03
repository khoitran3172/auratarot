// Lưu game. Interface chung để sau này thay bằng server (hoặc Capacitor Preferences) mà không sửa core.
import { DEFAULT_SETTINGS, migrate } from '../core/GameState';
import type { GameState, Settings } from '../core/types';

export interface SaveService {
  load(): Promise<GameState | null>;
  save(state: GameState): Promise<void>;
  clear(): Promise<void>;
  hasSave(): Promise<boolean>;
  loadSettings(): Settings;
  saveSettings(s: Settings): void;
}

/** Kho key-value tối thiểu: localStorage trên web, có thể bọc Capacitor Preferences cho mobile. */
export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const SAVE_KEY = 'chodoi.save';
const SETTINGS_KEY = 'chodoi.settings';

function memoryStore(): KeyValueStore {
  const m = new Map<string, string>();
  return { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => void m.set(k, v), removeItem: (k) => void m.delete(k) };
}

function defaultStore(): KeyValueStore {
  try {
    const ls = globalThis.localStorage;
    const probe = '__chodoi_probe__';
    ls.setItem(probe, '1');
    ls.removeItem(probe);
    return ls;
  } catch {
    return memoryStore(); // Chế độ ẩn danh / bị chặn lưu trữ: vẫn chơi được, chỉ không lưu
  }
}

export class LocalSaveService implements SaveService {
  constructor(private readonly store: KeyValueStore = defaultStore()) {}

  async load(): Promise<GameState | null> {
    const raw = this.safeGet(SAVE_KEY);
    if (!raw) return null;
    try {
      return migrate(JSON.parse(raw));
    } catch {
      return null;
    }
  }

  async save(state: GameState): Promise<void> {
    this.safeSet(SAVE_KEY, JSON.stringify(state));
  }

  async clear(): Promise<void> {
    try { this.store.removeItem(SAVE_KEY); } catch { /* bỏ qua */ }
  }

  async hasSave(): Promise<boolean> {
    return (await this.load()) !== null;
  }

  loadSettings(): Settings {
    try {
      const raw = this.safeGet(SETTINGS_KEY);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : { ...DEFAULT_SETTINGS };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  saveSettings(s: Settings): void {
    this.safeSet(SETTINGS_KEY, JSON.stringify(s));
  }

  private safeGet(k: string): string | null {
    try { return this.store.getItem(k); } catch { return null; }
  }

  private safeSet(k: string, v: string): void {
    try { this.store.setItem(k, v); } catch { /* hết dung lượng / bị chặn */ }
  }
}

export const saveService: SaveService = new LocalSaveService();
