// Nhân vật placeholder: thân chữ nhật bo góc, đầu tròn, nón lá tam giác. Sau thay sprite chỉ sửa file này.
import Phaser from 'phaser';
import type { CustomerDef } from '../../core/types';
import { prefersReducedMotion } from '../ui/dom';
import { C, FONT_HAND, FONT_SIGN, hex, RES } from '../palette';

export interface Look { bodyColor: string; hat: 'non' | 'cap' | 'helmet' | 'none'; scale?: number; chain?: boolean }

/** Vẽ một người, gốc toạ độ ở chân. */
export function drawPerson(g: Phaser.GameObjects.Graphics, look: Look): void {
  const body = hex(look.bodyColor);
  // Chân
  g.fillStyle(0x3b3b3b).fillRect(-10, -14, 7, 14).fillRect(3, -14, 7, 14);
  g.fillStyle(0x222222).fillRect(-12, -3, 10, 3).fillRect(2, -3, 10, 3);
  // Thân
  g.fillStyle(body).fillRoundedRect(-17, -60, 34, 48, 9);
  g.fillStyle(0x000000, 0.12).fillRoundedRect(-17, -24, 34, 12, { tl: 0, tr: 0, bl: 9, br: 9 });
  // Tay
  g.fillStyle(body).fillRoundedRect(-23, -56, 8, 30, 4).fillRoundedRect(15, -56, 8, 30, 4);
  g.fillStyle(C.skin).fillCircle(-19, -25, 4).fillCircle(19, -25, 4);
  // Đầu
  g.fillStyle(C.skin).fillCircle(0, -74, 13);
  g.fillStyle(0x23324a).fillCircle(-4, -75, 1.6).fillCircle(4, -75, 1.6);
  g.lineStyle(1.5, 0x23324a).beginPath().arc(0, -71, 4, 0.2, Math.PI - 0.2).strokePath();
  if (look.chain) {
    g.lineStyle(3, 0xffd23f).beginPath().arc(0, -60, 10, 0.3, Math.PI - 0.3).strokePath();
    g.fillStyle(0x111111).fillRoundedRect(-11, -80, 22, 6, 2); // kính đen
  }
  switch (look.hat) {
    case 'non':
      g.fillStyle(C.straw).fillTriangle(-24, -80, 24, -80, 0, -102);
      g.lineStyle(1, 0xb9a46a).lineBetween(-12, -86, 12, -86).lineBetween(-6, -93, 6, -93);
      break;
    case 'cap':
      g.fillStyle(0x264653).fillEllipse(0, -84, 28, 14).fillRect(0, -84, 20, 4);
      break;
    case 'helmet':
      g.fillStyle(0xe76f51).slice(0, -80, 16, Math.PI, 0, false).fillPath();
      g.fillStyle(0x23324a).fillRect(-16, -81, 32, 3);
      break;
    default:
      g.fillStyle(0x2b2b2b).fillEllipse(0, -84, 26, 10);
  }
}

export class CustomerActor {
  readonly container: Phaser.GameObjects.Container;
  private bubble: Phaser.GameObjects.Container;
  private patience: Phaser.GameObjects.Graphics;
  private nameTag: Phaser.GameObjects.Text;
  private bob = Math.random() * Math.PI * 2;

  constructor(private scene: Phaser.Scene, readonly uid: number, readonly def: CustomerDef, x: number, y: number) {
    const s = def.look.scale ?? 1;
    this.container = scene.add.container(x, y);
    const g = scene.add.graphics();
    drawPerson(g, def.look);
    g.setScale(s);
    const name = this.nameTag = scene.add.text(0, 6, def.name, { fontFamily: FONT_HAND, fontSize: '16px', color: '#23324A', backgroundColor: '#FBF3D9', padding: { x: 4, y: 0 }, resolution: RES }).setOrigin(0.5, 0);
    this.patience = scene.add.graphics();
    // Bong bóng "!" cho khách đầu hàng
    this.bubble = scene.add.container(16, -112 * s);
    const bg = scene.add.graphics();
    bg.fillStyle(C.white).fillCircle(0, 0, 13).fillTriangle(-6, 9, 4, 10, -10, 18);
    bg.lineStyle(2, C.ink).strokeCircle(0, 0, 13);
    const mark = scene.add.text(0, 1, '!', { fontFamily: FONT_SIGN, fontSize: '17px', color: '#D62828', resolution: RES }).setOrigin(0.5);
    this.bubble.add([bg, mark]).setVisible(false);
    this.container.add([g, this.patience, name, this.bubble]);
    // Vùng bấm tối thiểu 44×44
    this.container.setSize(60, 110 * s + 20);
    this.container.setInteractive(new Phaser.Geom.Rectangle(-30, -110 * s, 60, 110 * s + 28), Phaser.Geom.Rectangle.Contains);
    this.container.input!.cursor = 'pointer';
  }

  setHead(isHead: boolean): void {
    this.bubble.setVisible(isHead);
    // Chỉ hiện tên khách đầu hàng để không đè chữ
    this.nameTag.setVisible(isHead);
  }

  /** Vòng kiên nhẫn dưới chân (chỉ khách đầu hàng). */
  setPatience(frac: number | null): void {
    const g = this.patience;
    g.clear();
    if (frac === null) return;
    const w = 44;
    g.fillStyle(0x000000, 0.25).fillRoundedRect(-w / 2, 2, w, 5, 2);
    g.fillStyle(frac > 0.35 ? C.leaf : C.chair).fillRoundedRect(-w / 2, 2, w * Math.max(0, 1 - frac), 5, 2);
  }

  walkTo(x: number, duration = 600): void {
    if (prefersReducedMotion()) { this.container.x = x; return; }
    this.scene.tweens.add({ targets: this.container, x, duration, ease: 'Sine.easeInOut' });
  }

  /** Rời đi về bên phải rồi biến mất. */
  leave(onDone?: () => void): void {
    this.container.disableInteractive();
    this.bubble.setVisible(false);
    this.setPatience(null);
    if (prefersReducedMotion()) { this.container.destroy(); onDone?.(); return; }
    this.scene.tweens.add({
      targets: this.container, x: 440, duration: 900, ease: 'Sine.easeIn',
      onComplete: () => { this.container.destroy(); onDone?.(); },
    });
  }

  update(dt: number): void {
    if (prefersReducedMotion() || !this.container.active) return;
    this.bob += dt * 4;
    const first = this.container.list[0] as Phaser.GameObjects.Graphics;
    first.y = Math.sin(this.bob) * 1.2;
  }
}
