/**
 * Shared motion vocabulary.
 *
 * One place for easings, springs and timings so the shuffle, the fan, the flip
 * and the reveal feel like one system instead of four separately-tuned effects.
 */
import { useReducedMotion } from 'motion/react';
import type { Transition } from 'motion/react';

/** `?motion=always` forces the full choreography on even when the OS asks for
 *  reduced motion — for demoing and reviewing the animations. Read once. */
const FORCED =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('motion') === 'always';

/**
 * Whether to play the full motion design.
 *
 * Every animated component asks this rather than calling `useReducedMotion`
 * directly, so the accessibility default and the override live in one place.
 * Note that `MotionConfig reducedMotion` does not affect `useReducedMotion` —
 * that hook reads the media query directly — which is why this exists.
 */
export function useMotionEnabled(): boolean {
  const reduced = useReducedMotion();
  return FORCED || !reduced;
}

/** Cubic-bezier curves. `spring` overshoots slightly — the card-flip feel. */
export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  overshoot: [0.175, 0.885, 0.32, 1.2],
} as const;

export const SPRING = {
  /** Card landing in a slot: weighty, settles fast. */
  card: { type: 'spring', stiffness: 240, damping: 22 } as Transition,
  /** UI response to a pointer: near-instant, no wobble. */
  snappy: { type: 'spring', stiffness: 420, damping: 34 } as Transition,
  /** Large elements moving a long distance: slow, heavy. */
  heavy: { type: 'spring', stiffness: 120, damping: 20 } as Transition,
  /** The flip itself — a touch of overshoot reads as physical. */
  flip: { type: 'spring', stiffness: 180, damping: 17 } as Transition,
} as const;

export const DURATION = {
  /** One full riffle cycle. */
  shuffleCycle: 1.15,
  /** Per-card delay while the fan deals in. */
  dealStagger: 0.014,
  /** Gap between consecutive cards flipping face-up. */
  flipStagger: 0.4,
  sheenSweep: 0.9,
} as const;

/**
 * Gaussian falloff, used to make the fan respond to pointer proximity: the
 * card under the cursor moves most, its neighbours progressively less.
 * `d` is a normalised distance, `width` how far the influence reaches.
 */
export function falloff(d: number, width = 0.14): number {
  return Math.exp(-(d * d) / (2 * width * width));
}
