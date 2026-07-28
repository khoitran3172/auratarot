import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { DURATION, EASE, SPRING, useMotionEnabled } from '../../motion/anim';

/**
 * A card that flips face-up in 3D.
 *
 * `front` and `back` are rendered verbatim, so the card artwork is unchanged —
 * this only supplies the motion around it:
 *   · rotateY flip on a spring with slight overshoot
 *   · a foil sheen that sweeps the face once it lands
 *   · an accent bloom that pulses out on reveal
 *   · a small parallax tilt toward the pointer once face-up
 *
 * The tilt lives on an outer wrapper and the flip on an inner one, so the two
 * rotations compose instead of overwriting each other.
 */
export function FlipCard({
  front,
  back,
  flipped,
  onActivate,
  label,
  layoutId,
  className,
  tilt = true,
}: {
  front: ReactNode;
  back: ReactNode;
  flipped: boolean;
  onActivate?: () => void;
  label?: string;
  layoutId?: string;
  className?: string;
  tilt?: boolean;
}) {
  const motionOn = useMotionEnabled();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tiltY = useSpring(useTransform(px, [-1, 1], [-11, 11]), SPRING.snappy);
  const tiltX = useSpring(useTransform(py, [-1, 1], [9, -9]), SPRING.snappy);

  const interactive = Boolean(onActivate);
  const allowTilt = tilt && motionOn && flipped;

  return (
    <motion.div
      ref={ref}
      layoutId={layoutId}
      // `relative` is required here: the bloom and the hit-test button below
      // are absolutely positioned against this element.
      className={`relative ${className ?? ''}`}
      style={{ perspective: 1100 }}
      onPointerMove={(e) => {
        if (!allowTilt) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set(((e.clientX - r.left) / r.width) * 2 - 1);
        py.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: allowTilt ? tiltX : 0,
          rotateY: allowTilt ? tiltY : 0,
        }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={!motionOn ? { duration: 0 } : SPRING.flip}
        >
          {/* Back face */}
          <div className="absolute inset-0 backface-hidden">{back}</div>

          {/* Front face, pre-rotated so it faces out after the flip */}
          <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
            {front}

            {/* Foil sheen — a single pass across the face as the card lands. */}
            {motionOn && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
              >
                <motion.div
                  className="absolute top-0 bottom-0 w-1/2"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 0%, color-mix(in oklab, var(--t-text-strong) 40%, transparent) 50%, transparent 100%)',
                    filter: 'blur(3px)',
                  }}
                  initial={{ x: '-160%' }}
                  animate={flipped ? { x: '260%' } : { x: '-160%' }}
                  transition={
                    flipped
                      ? { duration: DURATION.sheenSweep, ease: EASE.out, delay: 0.32 }
                      : { duration: 0 }
                  }
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Interaction sits on a real button layered over the card rather than on
          the rotating element — keeps hit-testing out of the 3D subtree and
          gives keyboard users a proper control. */}
      {interactive && (
        <button
          type="button"
          aria-label={label}
          onClick={onActivate}
          className="absolute inset-0 z-10 rounded-xl cursor-pointer"
        />
      )}

      {/* Accent bloom pulsing outward on reveal. Sits outside the 3D subtree so
          the flip rotation does not turn it edge-on. */}
      {motionOn && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{ boxShadow: '0 0 34px 4px var(--t-accent)' }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={flipped ? { opacity: [0, 0.55, 0], scale: [0.92, 1.12, 1.2] } : { opacity: 0 }}
          transition={flipped ? { duration: 1.1, ease: EASE.out, delay: 0.3 } : { duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
