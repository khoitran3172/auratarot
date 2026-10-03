// Mèo mướp nằm ngủ trên ghế nhựa đỏ, có chữ "z" bay lên.
import Phaser from 'phaser';
import { prefersReducedMotion } from '../ui/dom';
import { C, FONT_HAND, RES } from '../palette';

export class Pet {
  readonly container: Phaser.GameObjects.Container;
  private zs: Phaser.GameObjects.Text[] = [];
  private t = 0;

  constructor(scene: Phaser.Scene, x: number, y: number, name: string) {
    this.container = scene.add.container(x, y);
    const g = scene.add.graphics();
    // Ghế nhựa đỏ
    g.fillStyle(C.chair).fillRoundedRect(-24, -30, 48, 8, 3);
    g.fillStyle(0xb01f1f).fillRect(-22, -22, 5, 22).fillRect(17, -22, 5, 22).fillRect(-20, -12, 40, 3);
    g.fillStyle(C.chair).fillRoundedRect(-22, -62, 44, 32, 6);
    g.fillStyle(0xb01f1f).fillRect(-14, -54, 28, 4).fillRect(-14, -46, 28, 4);
    // Mèo mướp cuộn tròn
    g.fillStyle(0xc69c6d).fillEllipse(0, -38, 40, 18);
    g.fillStyle(0x8a6a45);
    for (const dx of [-12, -4, 4, 12]) g.fillRect(dx, -46, 3, 14);
    g.fillStyle(0xc69c6d).fillCircle(-16, -42, 9);
    g.fillTriangle(-24, -46, -19, -56, -15, -48).fillTriangle(-14, -48, -9, -56, -8, -45);
    g.lineStyle(1.5, 0x23324a).lineBetween(-20, -42, -16, -41).lineBetween(-14, -41, -10, -42);
    g.lineStyle(5, 0xc69c6d).beginPath().arc(14, -36, 9, -0.5, 1.8).strokePath();
    const label = scene.add.text(0, 4, name, { fontFamily: FONT_HAND, fontSize: '16px', color: '#FBF3D9', resolution: RES }).setOrigin(0.5, 0);
    label.setStroke('#23324A', 3);
    this.container.add([g, label]);
    for (let i = 0; i < 3; i++) {
      const z = scene.add.text(-10, -56, 'z', { fontFamily: FONT_HAND, fontSize: `${14 + i * 3}px`, color: '#FBF3D9', resolution: RES });
      z.setStroke('#23324A', 3);
      this.zs.push(z);
      this.container.add(z);
    }
    this.update(0);
  }

  update(dt: number): void {
    this.t += prefersReducedMotion() ? 0 : dt;
    this.zs.forEach((z, i) => {
      const p = (this.t * 0.35 + i / 3) % 1;
      z.setPosition(-12 + p * 18 + Math.sin(p * 6) * 3, -56 - p * 34);
      z.setAlpha(prefersReducedMotion() ? (i === 1 ? 1 : 0) : 1 - p);
    });
  }
}
