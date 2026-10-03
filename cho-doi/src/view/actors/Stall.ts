// Sạp của người chơi: mái tôn, bạt xanh sọc trắng, bảng hiệu sơn tay, bàn gỗ, hàng hóa giảm theo tồn kho,
// bàn thờ ông Địa. Vẽ bằng hình khối, sau thay sprite chỉ cần sửa file này.
import Phaser from 'phaser';
import type { ItemId } from '../../core/types';
import { prefersReducedMotion } from '../ui/dom';
import { C, FONT_SIGN, RES } from '../palette';

export interface StallLayout { cx: number; roofY: number; tableY: number }

export class Stall {
  readonly container: Phaser.GameObjects.Container;
  private goods: Phaser.GameObjects.Graphics;
  private smoke: Phaser.GameObjects.Graphics;
  private incenseLit = false;
  private smokeT = 0;

  constructor(scene: Phaser.Scene, private L: StallLayout, signText: string) {
    this.container = scene.add.container(0, 0);
    const g = scene.add.graphics();
    const { cx, roofY, tableY } = L;
    const half = 135;

    // Cột tre
    g.fillStyle(C.woodDark).fillRect(cx - half + 8, roofY, 7, tableY - roofY + 50).fillRect(cx + half - 15, roofY, 7, tableY - roofY + 50);
    // Mái tôn
    g.fillStyle(C.tin).fillRect(cx - half - 6, roofY - 10, half * 2 + 12, 10);
    g.lineStyle(1, 0x7d878e);
    for (let x = cx - half; x < cx + half; x += 12) g.lineBetween(x, roofY - 10, x, roofY);
    // Bạt xanh sọc trắng, mép dưới lượn sóng
    const stripes = 10;
    const sw = (half * 2) / stripes;
    for (let i = 0; i < stripes; i++) {
      g.fillStyle(i % 2 ? C.white : C.tarp).fillRect(cx - half + i * sw, roofY, sw, 34);
      g.fillStyle(i % 2 ? C.white : C.tarp).fillCircle(cx - half + i * sw + sw / 2, roofY + 34, sw / 2);
    }
    // Bàn gỗ
    g.fillStyle(C.wood).fillRect(cx - 125, tableY, 250, 14);
    g.fillStyle(C.woodDark).fillRect(cx - 118, tableY + 14, 236, 44);
    g.lineStyle(2, C.wood, 0.6);
    for (let x = cx - 100; x < cx + 118; x += 40) g.lineBetween(x, tableY + 16, x, tableY + 56);

    // Bảng hiệu: chữ đỏ trên nền vàng — điểm nổi bật duy nhất
    const sign = scene.add.container(cx, roofY + 62);
    const board = scene.add.graphics();
    board.fillStyle(C.sun).fillRoundedRect(-92, -17, 184, 34, 6);
    board.lineStyle(3, C.chair).strokeRoundedRect(-92, -17, 184, 34, 6);
    const label = scene.add.text(0, 1, signText, { fontFamily: FONT_SIGN, fontSize: '17px', color: '#D62828', resolution: RES }).setOrigin(0.5);
    if (label.width > 172) label.setScale(172 / label.width);
    sign.add([board, label]);
    g.lineStyle(2, C.woodDark).lineBetween(cx - 70, roofY + 40, cx - 70, roofY + 46).lineBetween(cx + 70, roofY + 40, cx + 70, roofY + 46);

    // Bàn thờ ông Địa dưới chân cột trái
    const altar = scene.add.graphics();
    const ax = cx - half - 20, ay = tableY + 22;
    altar.fillStyle(C.chair).fillRect(ax - 18, ay - 30, 36, 30);
    altar.fillStyle(0x9e1b1b).fillTriangle(ax - 22, ay - 30, ax + 22, ay - 30, ax, ay - 44);
    altar.fillStyle(C.sun).fillRect(ax - 9, ay - 24, 18, 14);
    altar.fillStyle(C.woodDark).fillRect(ax - 22, ay, 44, 6);
    altar.fillStyle(0xb08850).fillRect(ax - 6, ay - 8, 12, 8);
    this.smoke = scene.add.graphics();
    this.smoke.setPosition(ax, ay - 8);

    this.goods = scene.add.graphics();
    this.container.add([g, this.goods, altar, this.smoke, sign]);
  }

  /** Hàng hóa trên bàn giảm dần theo tồn kho. */
  setStock(stock: Record<ItemId, number>): void {
    const g = this.goods;
    const { cx, tableY } = this.L;
    g.clear();
    // Rau muống: bó xanh (1 bó vẽ cho mỗi 5 bó)
    const rau = Math.min(8, Math.ceil((stock.rau ?? 0) / 5));
    for (let i = 0; i < rau; i++) {
      const x = cx - 112 + (i % 4) * 18, y = tableY - 4 - Math.floor(i / 4) * 9;
      g.fillStyle(0x2d6a2f).fillRoundedRect(x, y - 12, 16, 14, 4);
      g.fillStyle(0x5fb760).fillEllipse(x + 4, y - 14, 9, 7).fillEllipse(x + 12, y - 15, 9, 7);
      g.fillStyle(0xc9a227).fillRect(x + 6, y - 6, 4, 5);
    }
    // Cà chua: mỗi ký một trái
    const ca = Math.min(14, stock.ca ?? 0);
    for (let i = 0; i < ca; i++) {
      const x = cx - 22 + (i % 5) * 12 + (Math.floor(i / 5) % 2) * 6, y = tableY - 6 - Math.floor(i / 5) * 9;
      g.fillStyle(C.chair).fillCircle(x, y, 6);
      g.fillStyle(0x2d6a2f).fillRect(x - 1, y - 7, 3, 3);
    }
    // Thịt heo: mỗi ký một miếng
    const thit = Math.min(6, stock.thit ?? 0);
    for (let i = 0; i < thit; i++) {
      const x = cx + 50 + (i % 3) * 24, y = tableY - 8 - Math.floor(i / 3) * 10;
      g.fillStyle(0xe8a0a0).fillRoundedRect(x, y - 6, 22, 12, 5);
      g.fillStyle(0xfbe3e3).fillRoundedRect(x + 2, y - 5, 18, 4, 2);
    }
  }

  setIncense(lit: boolean): void {
    this.incenseLit = lit;
    this.drawSmoke();
  }

  update(dt: number): void {
    if (!this.incenseLit || prefersReducedMotion()) return;
    this.smokeT += dt;
    this.drawSmoke();
  }

  private drawSmoke(): void {
    const g = this.smoke;
    g.clear();
    // Ba cây nhang, đầu đỏ khi đang cháy
    for (const dx of [-4, 0, 4]) {
      g.fillStyle(0x8b5a2b).fillRect(dx - 0.5, -14, 1.5, 14);
      if (this.incenseLit) g.fillStyle(0xff5a1f).fillCircle(dx + 0.25, -14, 1.6);
    }
    if (!this.incenseLit) return;
    for (let i = 0; i < 5; i++) {
      const p = (this.smokeT * 0.5 + i / 5) % 1;
      g.fillStyle(0xdddddd, 0.5 * (1 - p)).fillCircle(Math.sin(p * 6 + i) * 5, -18 - p * 40, 2 + p * 4);
    }
  }

}
