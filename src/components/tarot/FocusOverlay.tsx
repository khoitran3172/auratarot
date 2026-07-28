import { useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { EASE, SPRING, useMotionEnabled } from '../../motion/anim';
import { ParticleDust } from './ParticleDust';

/**
 * Focus state for a revealed card: the backdrop blurs and dims, the card
 * travels from its slot to the centre of the screen and scales up, dust drifts
 * around it, and a halo pulses behind it.
 *
 * The travel is a shared-element transition — pass the same `layoutId` here and
 * on the card in its slot and the layout engine interpolates between the two
 * positions, so the card visibly flies out of the spread rather than fading in
 * somewhere else.
 */
export function FocusOverlay({
  open,
  onClose,
  layoutId,
  card,
  title,
  subtitle,
  children,
}: {
  open: boolean;
  onClose: () => void;
  layoutId: string;
  card: ReactNode;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  const motionOn = useMotionEnabled();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: EASE.out }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Đóng"
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-bg/85"
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: !motionOn ? 'blur(0px)' : 'blur(14px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.32 }}
          />

          {/* Dust drifting across the whole focus field */}
          <ParticleDust className="pointer-events-none absolute inset-0 w-full h-full" count={110} />

          <div className="relative flex flex-col items-center gap-5 max-w-md w-full">
            <div className="relative">
              {/* Halo pulsing behind the card */}
              {motionOn && (
                <motion.div
                  aria-hidden
                  className="absolute -inset-10 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, color-mix(in oklab, var(--t-accent) 34%, transparent) 0%, transparent 68%)',
                  }}
                  animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.94, 1.06, 0.94] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}

              <motion.div
                layoutId={layoutId}
                className="relative w-52 sm:w-60"
                transition={!motionOn ? { duration: 0 } : SPRING.heavy}
              >
                {card}
              </motion.div>
            </div>

            <motion.div
              className="text-center space-y-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4, ease: EASE.out }}
            >
              <h2 className="font-serif text-2xl font-bold text-ink-strong tracking-display">{title}</h2>
              {subtitle && <p className="eyebrow">{subtitle}</p>}
            </motion.div>

            {children && (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4, ease: EASE.out }}
              >
                {children}
              </motion.div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="absolute top-5 right-5 tap-target flex items-center justify-center rounded-lg text-ink-muted hover:text-ink-strong transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" aria-hidden />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
