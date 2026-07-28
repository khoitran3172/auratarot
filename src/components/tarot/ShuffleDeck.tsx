import { motion } from 'motion/react';
import { DURATION, EASE, useMotionEnabled } from '../../motion/anim';

/**
 * Riffle shuffle.
 *
 * The deck splits in two, each half bows and lifts, then the halves interleave
 * back into a squared stack — the cycle repeats until the user stops it. The
 * previous version jittered five cards with `Math.sin(counter + i)` on a
 * 150ms interval, which read as vibration rather than shuffling.
 *
 * Cards are plain DOM, so `back` renders exactly the same card artwork the
 * rest of the app uses.
 */
export function ShuffleDeck({
  back,
  count = 16,
  className,
}: {
  back: React.ReactNode;
  count?: number;
  className?: string;
}) {
  const motionOn = useMotionEnabled();

  return (
    <div className={className} style={{ perspective: 1400 }}>
      <div className="relative w-full h-full flex items-center justify-center">
        {Array.from({ length: count }).map((_, i) => {
          // Alternating cards belong to opposite halves, which is what makes
          // the recombination read as an interleave.
          const half = i % 2 === 0 ? -1 : 1;
          const depth = Math.floor(i / 2);
          const t = depth / Math.max(1, count / 2 - 1);

          if (!motionOn) {
            return (
              <div
                key={i}
                className="absolute w-36 h-60 rounded-xl overflow-hidden"
                style={{ transform: `translateY(${-i * 1.5}px)`, zIndex: i }}
              >
                {back}
              </div>
            );
          }

          return (
            <motion.div
              key={i}
              className="absolute w-36 h-60 rounded-xl overflow-hidden will-change-transform"
              style={{ zIndex: i, transformStyle: 'preserve-3d' }}
              animate={{
                // split apart → bow upward → fall back into a single stack
                x: [0, half * 62, half * 40, 0, 0],
                y: [-i * 1.5, -i * 1.5 - 10, -i * 1.5 - 34 - t * 10, -i * 1.5, -i * 1.5],
                rotate: [0, half * 9, half * 5, 0, 0],
                rotateY: [0, half * -22, half * -10, 0, 0],
                rotateX: [0, 6, 12, 0, 0],
              }}
              transition={{
                duration: DURATION.shuffleCycle,
                times: [0, 0.28, 0.52, 0.82, 1],
                ease: EASE.inOut,
                repeat: Infinity,
                // The cascade down the deck: deeper cards release later, which
                // is what makes the riffle sound-like visually.
                delay: t * 0.16,
                repeatDelay: 0.05,
              }}
            >
              {back}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
