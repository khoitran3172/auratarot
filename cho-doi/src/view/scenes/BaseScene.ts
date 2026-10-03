// Scene gốc: camera phóng RES lần để vẽ trong hệ toạ độ thiết kế 390×844, kèm một lớp UI DOM riêng.
import Phaser from 'phaser';
import { clearToasts } from '../ui/Toast';
import { Layer } from '../ui/dom';
import { H, RES, W } from '../palette';

export abstract class BaseScene extends Phaser.Scene {
  protected ui!: Layer;

  protected setup(): void {
    const cam = this.cameras.main;
    cam.setZoom(RES);
    cam.centerOn(W / 2, H / 2);
    this.ui = new Layer(this.scene.key);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.ui.destroy();
      clearToasts();
      this.teardown();
    });
  }

  /** Dọn listener riêng của scene khi tắt. */
  protected teardown(): void {}

  protected go(key: string, data?: object): void {
    this.scene.start(key, data);
  }
}
