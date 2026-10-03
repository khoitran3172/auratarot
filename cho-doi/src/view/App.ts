// Điều phối giữa view và core: giữ GameState, DayRun của ngày hiện tại, event bus, lưu game, cài đặt.
import { DayRun } from '../core/Day';
import { EventBus, type GameEvents } from '../core/EventBus';
import type { GameState, Settings } from '../core/types';
import { audio } from '../services/AudioService';
import { saveService } from '../services/SaveService';

class AppImpl {
  state: GameState | null = null;
  run: DayRun | null = null;
  bus = new EventBus<GameEvents>();
  settings: Settings = saveService.loadSettings();
  private media = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : null;

  constructor() {
    this.media?.addEventListener?.('change', () => this.applyTheme());
  }

  get s(): GameState {
    if (!this.state) throw new Error('No game loaded');
    return this.state;
  }

  /** Bắt đầu ngày mới (hoặc ngày đang dở từ save). Event bus làm mới để không rò listener cũ. */
  startDay(): DayRun {
    this.bus.clear();
    this.run = DayRun.start(this.s, this.bus);
    return this.run;
  }

  async save(): Promise<void> {
    if (!this.state) return;
    this.state.settings = { ...this.settings };
    await saveService.save(this.state);
  }

  async loadSave(): Promise<boolean> {
    const s = await saveService.load();
    if (!s) return false;
    this.state = s;
    return true;
  }

  async wipe(): Promise<void> {
    await saveService.clear();
    this.state = null;
    this.run = null;
  }

  updateSettings(patch: Partial<Settings>): void {
    this.settings = { ...this.settings, ...patch };
    if (this.state) this.state.settings = { ...this.settings };
    saveService.saveSettings(this.settings);
    this.applySettings();
  }

  applySettings(): void {
    this.applyTheme();
    audio.setVolumes(this.settings.music, this.settings.sfx);
  }

  isDark(): boolean {
    return this.settings.theme === 'dark' || (this.settings.theme === 'auto' && !!this.media?.matches);
  }

  private applyTheme(): void {
    document.documentElement.dataset.theme = this.isDark() ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', this.isDark() ? '#0D2C45' : '#1F6FA8');
  }
}

export const App = new AppImpl();
