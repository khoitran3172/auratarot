// Boot: chờ font tiếng Việt tải xong (tối đa 2.5s), đọc save, sang màn Title.
import Phaser from 'phaser';
import { App } from '../App';

export class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  async create(): Promise<void> {
    const fonts = document.fonts
      ? Promise.all([
        document.fonts.load('18px "Patrick Hand"', 'Chợ Đời ắ ễ ượ'),
        document.fonts.load('18px "Bungee"', 'Chợ Đời'),
      ]).catch(() => undefined)
      : Promise.resolve();
    await Promise.race([fonts, new Promise((r) => setTimeout(r, 2500))]);
    await App.loadSave();
    this.scene.start('Title');
  }
}
