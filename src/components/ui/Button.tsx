import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cx } from './cx';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-contrast border border-accent hover:bg-accent-strong hover:border-accent-strong',
  secondary:
    'bg-accent/8 text-accent border border-accent/30 hover:bg-accent/15 hover:border-accent/60',
  ghost: 'bg-transparent text-ink-muted border border-transparent hover:text-ink-strong hover:bg-ink-strong/6',
  danger: 'bg-danger/12 text-danger border border-danger/35 hover:bg-danger/20 hover:border-danger/60',
};

// Every size clears the 44px minimum touch target at md and lg; sm is for
// inline controls inside already-tappable rows.
const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-xs gap-1.5 rounded-md',
  md: 'h-11 px-5 text-sm gap-2 rounded-lg',
  lg: 'h-13 px-7 text-sm gap-2.5 rounded-xl',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Renders a spinner, disables the button, and marks it busy for AT. */
  loading?: boolean;
  fullWidth?: boolean;
  /** Mono + wide tracking, matching the app's ritual-button voice. */
  mono?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  mono = false,
  iconLeft,
  iconRight,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx(
        'inline-flex items-center justify-center font-semibold cursor-pointer select-none',
        'transition-colors duration-200 active:scale-[0.985]',
        'disabled:opacity-45 disabled:cursor-not-allowed disabled:active:scale-100',
        mono ? 'font-mono uppercase tracking-eyebrow' : 'font-sans',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
    >
      {loading ? <Loader2 className="w-4 h-4 shrink-0 animate-spin" aria-hidden /> : iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  );
}
