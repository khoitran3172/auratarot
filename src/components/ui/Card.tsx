import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

type Surface = 'card' | 'raised' | 'sunken';
type Pad = 'none' | 'sm' | 'md' | 'lg';

const surfaces: Record<Surface, string> = {
  card: 'surface-card',
  raised: 'surface-raised',
  sunken: 'surface-sunken',
};

const pads: Record<Pad, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-5 md:p-6',
  lg: 'p-6 md:p-8',
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  surface?: Surface;
  pad?: Pad;
  /** Soft accent bloom in the top corner. Renders as nothing in the flat
   *  directions, since they set --t-glow-accent to none. */
  bloom?: boolean;
  interactive?: boolean;
}

export function Card({
  surface = 'card',
  pad = 'md',
  bloom = false,
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={cx(
        'relative rounded-2xl',
        surfaces[surface],
        pads[pad],
        bloom && 'overflow-hidden',
        interactive && 'transition-colors duration-200 hover:border-line-strong cursor-pointer',
        className,
      )}
    >
      {bloom && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/8 blur-3xl"
        />
      )}
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cx('font-serif text-lg font-bold text-ink-strong tracking-display', className)}>
      {children}
    </h3>
  );
}
