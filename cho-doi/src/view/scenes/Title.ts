// Màn Title: bảng hiệu "Chợ Đời" treo trên sạp, tiếng rao nền.
import { t } from '../../core/Text';
import { audio } from '../../services/AudioService';
import { App } from '../App';
import { Backdrop } from '../actors/Backdrop';
import { Pet } from '../actors/Pet';
import { Stall } from '../actors/Stall';
import { Button } from '../ui/Button';
import { confirmDialog } from '../ui/Dialog';
import { h } from '../ui/dom';
import { openSettings } from '../ui/Sheets';
import { BaseScene } from './BaseScene';

export class TitleScene extends BaseScene {
  private stall!: Stall;
  private pet!: Pet;
  private raoTimer = 0;

  constructor() { super('Title'); }

  create(): void {
    this.setup();
    const bd = new Backdrop(this, { top: 0, groundY: 360, bottom: 844 });
    bd.setMinute(420);
    this.stall = new Stall(this, { cx: 195, roofY: 210, tableY: 400 }, t('title.sign'));
    this.stall.setStock({ rau: 40, ca: 14, thit: 6 });
    this.stall.setIncense(true);
    this.pet = new Pet(this, 350, 470, App.state?.player.petName ?? 'Mướp');
    this.renderMenu();
    audio.startMusic();
    // Tiếng rao nền thỉnh thoảng vang lên
    this.raoTimer = window.setInterval(() => audio.rao(), 9000);
  }

  protected teardown(): void {
    window.clearInterval(this.raoTimer);
  }

  update(_t: number, delta: number): void {
    this.stall.update(delta / 1000);
    this.pet.update(delta / 1000);
  }

  private renderMenu(): void {
    this.ui.clear();
    const hasSave = !!App.state;
    const menu = h('div', { class: 'title-menu' },
      h('p', { class: 'sub', style: 'text-align:center;color:#FBF3D9;font-size:20px;margin:0 0 4px;text-shadow:0 1px 2px #000', text: t('title.sub') }),
      hasSave ? Button({ label: t('title.continue'), kind: 'primary', block: true, onClick: () => this.continueGame() }) : null,
      Button({ label: t('title.new'), kind: hasSave ? 'secondary' : 'primary', block: true, onClick: () => this.newGame() }),
      Button({ label: t('title.settings'), kind: 'sun', block: true, onClick: () => openSettings({ onWiped: () => this.renderMenu() }) }),
    );
    this.ui.add(menu);
  }

  private continueGame(): void {
    App.startDay();
    this.go('Wholesale');
  }

  private async newGame(): Promise<void> {
    if (App.state && !(await confirmDialog(t('title.confirmNew'), t('title.new'), t('settings.no')))) return;
    this.go('CharacterCreate');
  }
}
