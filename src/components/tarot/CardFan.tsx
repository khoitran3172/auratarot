import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react';
import { DURATION, EASE, SPRING, falloff, useMotionEnabled } from '../../motion/anim';

/** Arc geometry — the same layout the fan already used, so the deck sits
 *  exactly where it did; only the motion layered on top is new. */
function arcAt(index: number, total: number) {
  const t = index / Math.max(1, total - 1);
  const ang = -62 + 124 * t;
  const rad = (ang * Math.PI) / 180;
  return {
    /** horizontal centre as a fraction of container width */
    cx: 0.5 + Math.sin(rad) * 0.44,
    leftCss: `calc(50% + ${(Math.sin(rad) * 44).toFixed(2)}% - 28px)`,
    bottom: (Math.cos(rad) - Math.cos((62 * Math.PI) / 180)) * 130,
    rotate: ang * 0.55,
  };
}

function FanCard({
  index,
  total,
  pointer,
  focused,
  onPick,
  onFocus,
  back,
  motionOn,
}: {
  index: number;
  total: number;
  pointer: MotionValue<number>;
  focused: boolean;
  onPick: () => void;
  onFocus: () => void;
  back: React.ReactNode;
  motionOn: boolean;
}) {
  const geo = arcAt(index, total);

  // Pointer proximity drives every live effect. Deriving these through
  // useTransform keeps them off the React render path — 52 cards
  // re-rendering on every pointermove would drop frames.
  // `pointer < 0` means the pointer is away from the fan.
  const lift = useTransform(pointer, (px) =>
    px < 0 ? 0 : -falloff(Math.abs(px - geo.cx)) * 34,
  );
  const part = useTransform(pointer, (px) =>
    px < 0 ? 0 : -Math.sign(px - geo.cx) * falloff(Math.abs(px - geo.cx)) * 26,
  );
  const grow = useTransform(pointer, (px) =>
    px < 0 ? 1 : 1 + falloff(Math.abs(px - geo.cx)) * 0.12,
  );
  const glow = useTransform(pointer, (px) => (px < 0 ? 0 : falloff(Math.abs(px - geo.cx))));

  const y = useSpring(lift, SPRING.snappy);
  const x = useSpring(part, SPRING.snappy);
  const scale = useSpring(grow, SPRING.snappy);

  return (
    <motion.button
      type="button"
      data-fan={index}
      aria-label={`Lá bài úp số ${index + 1}`}
      tabIndex={focused ? 0 : -1}
      onFocus={onFocus}
      onClick={onPick}
      className="absolute w-14 h-24 md:w-16 md:h-28 cursor-pointer rounded-lg"
      style={{
        left: geo.leftCss,
        bottom: geo.bottom,
        zIndex: 10 + index,
        // Driven by motion values, so hover/tap variants must not also claim
        // these properties — the motion value would win silently.
        x: !motionOn ? 0 : x,
        y: !motionOn ? 0 : y,
        scale: !motionOn ? 1 : scale,
      }}
      // Deal-in: transform-only (rise + settle into the arc angle), staggered
      // down the deck. Animating `left`/`bottom` here would fight the static
      // layout above and cost a layout pass per frame.
      initial={!motionOn ? false : { opacity: 0, rotate: 0, translateY: 90 }}
      animate={{ opacity: 1, rotate: geo.rotate, translateY: 0 }}
      transition={{ duration: 0.55, ease: EASE.out, delay: index * DURATION.dealStagger }}
      whileTap={{ opacity: 0.9 }}
    >
      <span className="relative block w-full h-full rounded-lg border border-brand-gold/30 bg-brand-purple/40 shadow-md overflow-hidden">
        {back}
        {/* Rim light tied to proximity rather than a hover switch — this is
            what makes the fan feel responsive as the cursor sweeps it. */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            opacity: !motionOn ? 0 : glow,
            boxShadow: 'inset 0 0 0 1px var(--t-accent), 0 0 20px var(--t-accent)',
          }}
        />
      </span>
    </motion.button>
  );
}

/**
 * Face-down deck fanned into an arc.
 *
 * Motion over the previous static arc: staggered deal-in, pointer-proximity
 * spread and gather, rim light on approach, and horizontal drag so a 52-card
 * fan stays browsable on touch where there is no hover.
 */
export function CardFan({
  total,
  taken,
  onPick,
  back,
  className,
}: {
  total: number;
  taken: number[];
  onPick: (index: number) => void;
  back: React.ReactNode;
  className?: string;
}) {
  const motionOn = useMotionEnabled();
  const ref = useRef<HTMLDivElement>(null);
  const pointer = useMotionValue(-1);
  const [focusIndex, setFocusIndex] = useState(0);

  const available = Array.from({ length: total }, (_, j) => j).filter((j) => !taken.includes(j));

  const moveFocus = (delta: number) => {
    const pos = available.indexOf(focusIndex);
    const next = available[Math.min(available.length - 1, Math.max(0, pos + delta))];
    if (next === undefined) return;
    setFocusIndex(next);
    ref.current?.querySelector<HTMLElement>(`button[data-fan="${next}"]`)?.focus();
  };

  return (
    <div
      ref={ref}
      className={className}
      role="group"
      aria-label="Quạt bài úp — chọn lá bài của bạn"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.set((e.clientX - r.left) / r.width);
      }}
      onPointerLeave={() => pointer.set(-1)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          moveFocus(e.key === 'ArrowRight' ? 1 : -1);
        }
      }}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Drag shifts the whole arc so the fan can be browsed by thumb. */}
      <motion.div
        className="relative w-full h-full"
        drag={!motionOn ? false : 'x'}
        dragConstraints={{ left: -90, right: 90 }}
        dragElastic={0.12}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 28 }}
      >
        {available.map((j) => (
          <FanCard
            key={j}
            index={j}
            total={total}
            pointer={pointer}
            focused={j === focusIndex}
            onPick={() => onPick(j)}
            onFocus={() => setFocusIndex(j)}
            back={back}
            motionOn={motionOn}
          />
        ))}
      </motion.div>
    </div>
  );
}
