import type { ReactNode } from 'react';
import { cx } from './cx';

type BadgeTone = 'accent' | 'accent-2' | 'neutral' | 'danger' | 'success' | 'warning';

const badgeTones: Record<BadgeTone, string> = {
  accent: 'bg-accent/12 text-accent border-accent/25',
  'accent-2': 'bg-accent-2/12 text-accent-2 border-accent-2/25',
  neutral: 'bg-ink-strong/6 text-ink-muted border-line',
  danger: 'bg-danger/12 text-danger border-danger/25',
  success: 'bg-success/12 text-success border-success/25',
  warning: 'bg-warning/12 text-warning border-warning/25',
};

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-md border',
        'font-mono text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap',
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

/**
 * Single-choice chip row (aspect pickers, spread pickers, filters).
 *
 * Uses radiogroup semantics rather than a row of buttons: arrow keys move
 * between options and the selected one is announced, which a plain button
 * row does not give you.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: ReadonlyArray<SegmentOption<T>>;
  value: T;
  onChange: (next: T) => void;
  label: string;
  className?: string;
}) {
  const move = (delta: number) => {
    const i = options.findIndex((o) => o.value === value);
    const next = options[(i + delta + options.length) % options.length];
    if (next) onChange(next.value);
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cx('flex flex-wrap gap-2', className)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          move(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          move(-1);
        }
      }}
    >
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(opt.value)}
            className={cx(
              'inline-flex items-center gap-1.5 h-9 px-4 rounded-full border cursor-pointer',
              'font-sans text-xs font-medium transition-colors duration-200',
              selected
                ? 'bg-accent/15 text-accent border-accent/50'
                : 'bg-transparent text-ink-muted border-line hover:text-ink-strong hover:border-line-strong',
            )}
          >
            {opt.icon}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

/** Section wrapper giving every screen the same measure and rhythm. */
export function PageSection({
  children,
  width = 'wide',
  className,
}: {
  children: ReactNode;
  width?: 'narrow' | 'wide' | 'full';
  className?: string;
}) {
  const widths = {
    narrow: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-7xl',
  } as const;
  return (
    <div className={cx('w-full mx-auto px-4 md:px-8 py-8 md:py-10', widths[width], className)}>
      {children}
    </div>
  );
}
