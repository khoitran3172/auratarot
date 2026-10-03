// Cảnh nền chợ: trời đổi màu theo giờ, mái tôn, dãy sạp hàng xóm, lồng đèn Trung Thu.
import Phaser from 'phaser';
import { C, skyColor, W } from '../palette';

export interface BackdropOpts {
  top: number;
  groundY: number;
  bottom: number;
  lanterns?: boolean;
}

export class Backdrop {
  private sky: Phaser.GameObjects.Rectangle;
  private sun: Phaser.GameObjects.Arc;
  readonly container: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene, private o: BackdropOpts) {
    this.container = scene.add.container(0, 0);
    this.sky = scene.add.rectangle(0, o.top, W, o.groundY - o.top, skyColor(360)).setOrigin(0, 0);
    this.sun = scene.add.circle(320, o.top + 40, 16, 0xfff1b8, 0.9);
    const g = scene.add.graphics();
    this.drawCity(g);
    this.drawNeighbors(g);
    this.drawGround(g);
    this.container.add([this.sky, this.sun, g]);
    if (o.lanterns) this.container.add(this.drawLanterns(scene));
  }

  setMinute(minute: number): void {
    this.sky.fillColor = skyColor(minute);
    // Mặt trời đi từ trái sang phải trong ngày
    const t = Phaser.Math.Clamp((minute - 330) / (1110 - 330), 0, 1);
    this.sun.x = 30 + t * (W - 60);
    this.sun.y = this.o.top + 70 - Math.sin(t * Math.PI) * 50;
    this.sun.fillColor = minute < 420 || minute > 1000 ? 0xffb35c : 0xfff1b8;
  }

  private drawCity(g: Phaser.GameObjects.Graphics): void {
    // Dãy nhà phố phía xa
    const y = this.o.groundY - 110;
    const blocks = [[0, 60, 70], [55, 45, 95], [95, 70, 60], [160, 50, 110], [205, 65, 75], [265, 55, 90], [315, 75, 65]];
    for (const [x, w, hgt] of blocks) {
      g.fillStyle(0x6d7f8f, 0.55).fillRect(x, y + 110 - hgt - 30, w, hgt);
      g.fillStyle(0xfff1b8, 0.35);
      for (let wy = y + 110 - hgt - 22; wy < y + 70; wy += 16) for (let wx = x + 8; wx < x + w - 8; wx += 14) g.fillRect(wx, wy, 6, 8);
    }
  }

  private drawNeighbors(g: Phaser.GameObjects.Graphics): void {
    const y = this.o.groundY - 70;
    const stalls: [number, number][] = [[-10, 0xd62828], [100, 0x3e8e41], [210, 0xf4a261], [310, 0x1f6fa8]];
    for (const [x, color] of stalls) {
      // Mái tôn + bạt
      g.fillStyle(C.tin).fillRect(x, y - 6, 100, 6);
      for (let i = 0; i < 5; i++) g.fillStyle(i % 2 ? C.white : color).fillRect(x + i * 20, y, 20, 18);
      g.fillStyle(C.woodDark).fillRect(x + 6, y + 18, 4, 52).fillRect(x + 90, y + 18, 4, 52);
      g.fillStyle(C.wood).fillRect(x + 4, y + 50, 92, 12);
      // Hàng bày lổn nhổn
      const goods = [0xe76f51, 0xf4a261, 0x2a9d8f, 0xe9c46a];
      for (let i = 0; i < 6; i++) g.fillStyle(goods[(i + x) % goods.length]).fillCircle(x + 14 + i * 14, y + 46, 6);
    }
  }

  private drawGround(g: Phaser.GameObjects.Graphics): void {
    const { groundY, bottom } = this.o;
    g.fillStyle(C.ground).fillRect(0, groundY, W, bottom - groundY);
    g.lineStyle(1, C.groundDark, 0.6);
    for (let y = groundY + 18; y < bottom; y += 22) g.lineBetween(0, y, W, y);
    for (let i = 0; i < 18; i++) g.fillStyle(C.groundDark, 0.5).fillCircle((i * 97) % W, groundY + 10 + ((i * 53) % (bottom - groundY - 10)), 2);
  }

  private drawLanterns(scene: Phaser.Scene): Phaser.GameObjects.GameObject[] {
    const g = scene.add.graphics();
    const y = this.o.top + 14;
    g.lineStyle(2, 0x4a2d19).beginPath().moveTo(0, y).lineTo(W, y + 6).strokePath();
    const out: Phaser.GameObjects.GameObject[] = [g];
    for (let i = 0; i < 6; i++) {
      const x = 30 + i * 66;
      const color = i % 2 ? 0xd62828 : 0xffd23f;
      g.lineStyle(1, 0x4a2d19).lineBetween(x, y + 2, x, y + 12);
      g.fillStyle(color).fillEllipse(x, y + 24, 22, 26);
      g.fillStyle(0x4a2d19).fillRect(x - 6, y + 10, 12, 3).fillRect(x - 6, y + 36, 12, 3);
      g.lineStyle(1, 0x4a2d19, 0.5).lineBetween(x, y + 12, x, y + 36);
    }
    return out;
  }
}
