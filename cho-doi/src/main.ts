import '@fontsource/patrick-hand/400.css';
import '@fontsource/bungee/400.css';
import './view/styles.css';
import Phaser from 'phaser';
import { audio } from './services/AudioService';
import { App } from './view/App';
import { H, RES, W } from './view/palette';
import { BootScene } from './view/scenes/Boot';
import { CharacterCreateScene } from './view/scenes/CharacterCreate';
import { EndOfDayScene } from './view/scenes/EndOfDay';
import { MarketScene } from './view/scenes/Market';
import { TitleScene } from './view/scenes/Title';
import { WholesaleScene } from './view/scenes/Wholesale';

App.applySettings();

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: W * RES,
  height: H * RES,
  backgroundColor: '#1F6FA8',
  scale: { mode: Phaser.Scale.NONE },
  render: { antialias: true, powerPreference: 'low-power' },
  fps: { target: 60 },
  disableContextMenu: true,
  banner: false,
  scene: [BootScene, TitleScene, CharacterCreateScene, WholesaleScene, MarketScene, EndOfDayScene],
});

/** Khung thiết kế 390×844, scale FIT vào vùng an toàn (đã trừ tai thỏ / thanh điều hướng). */
function fitStage(): void {
  const vp = document.getElementById('viewport') as HTMLElement;
  const stage = document.getElementById('stage') as HTMLElement;
  const cs = getComputedStyle(vp);
  const padL = parseFloat(cs.paddingLeft), padT = parseFloat(cs.paddingTop);
  const availW = vp.clientWidth - padL - parseFloat(cs.paddingRight);
  const availH = vp.clientHeight - padT - parseFloat(cs.paddingBottom);
  const k = Math.min(availW / W, availH / H);
  stage.style.transform = `scale(${k})`;
  stage.style.left = `${padL + (availW - W * k) / 2}px`;
  stage.style.top = `${padT + (availH - H * k) / 2}px`;
  game.scale.refresh();
}

window.addEventListener('resize', fitStage);
window.visualViewport?.addEventListener('resize', fitStage);
new ResizeObserver(fitStage).observe(document.getElementById('viewport') as HTMLElement);
fitStage();

// Âm thanh chỉ mở được sau thao tác đầu tiên
const unlock = () => { audio.unlock(); };
window.addEventListener('pointerdown', unlock, { passive: true });
window.addEventListener('keydown', unlock);

// Ẩn app (chuyển tab / tắt màn hình) thì tạm dừng game và nhạc
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { game.loop.sleep(); audio.stopMusic(); }
  else { game.loop.wake(); audio.startMusic(); }
});

if (import.meta.env.DEV) (window as unknown as { __game: Phaser.Game; __app: typeof App }).__game = game;
if (import.meta.env.DEV) (window as unknown as { __app: typeof App }).__app = App;
