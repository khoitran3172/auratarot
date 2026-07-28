import { useEffect, useRef } from 'react';
import { useMotionEnabled } from '../../motion/anim';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
}

/**
 * Golden dust drifting around a revealed card.
 *
 * Canvas 2D rather than a particle library: a few hundred additive sprites is
 * well within 2D's budget, and it keeps the bundle unchanged. Colour is read
 * from the live `--t-accent` token so the dust follows the theme.
 */
export function ParticleDust({
  count = 90,
  className,
  intensity = 1,
}: {
  count?: number;
  className?: string;
  intensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motionOn = useMotionEnabled();

  useEffect(() => {
    if (!motionOn) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const accent =
      getComputedStyle(canvas).getPropertyValue('--t-accent').trim() || '#d8b36a';

    let w = 0;
    let h = 0;
    let dpr = 1;
    const particles: Particle[] = [];

    const spawn = (initial: boolean): Particle => ({
      x: Math.random() * w,
      // Start below the frame so dust rises into view, except on first fill.
      y: initial ? Math.random() * h : h + Math.random() * 20,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(0.12 + Math.random() * 0.42),
      r: 0.6 + Math.random() * 1.9,
      life: initial ? Math.random() * 200 : 0,
      maxLife: 160 + Math.random() * 220,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < count; i++) particles.push(spawn(true));

    let raf = 0;
    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = accent;

      for (const p of particles) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        // Slow lateral sway so the dust does not read as falling snow.
        p.vx += Math.sin(p.life * 0.02) * 0.004;

        if (p.life > p.maxLife || p.y < -10) Object.assign(p, spawn(false));

        // Fade in over the first fifth of life, out over the last third.
        const t = p.life / p.maxLife;
        const alpha = (t < 0.2 ? t / 0.2 : t > 0.66 ? (1 - t) / 0.34 : 1) * 0.75 * intensity;

        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count, intensity, motionOn]);

  if (!motionOn) return null;

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
