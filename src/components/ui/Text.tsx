import type { ReactNode } from 'react';
import { cx } from './cx';

/** Small mono all-caps label. The single most repeated pattern in the app —
 *  27 near-identical copies before this existed. */
export function Eyebrow({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span className={cx('eyebrow', icon && 'inline-flex items-center gap-1.5', className)}>
      {icon}
      {children}
    </span>
  );
}

type DisplaySize = 'sm' | 'md' | 'lg' | 'xl';

const displaySizes: Record<DisplaySize, string> = {
  sm: 'text-display-sm',
  md: 'text-display-sm md:text-display-md',
  lg: 'text-display-md md:text-display-lg',
  xl: 'text-display-lg md:text-display-xl',
};

export function DisplayTitle({
  children,
  size = 'lg',
  as: Tag = 'h2',
  className,
}: {
  children: ReactNode;
  size?: DisplaySize;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  return <Tag className={cx('display-title font-bold', displaySizes[size], className)}>{children}</Tag>;
}

/** Eyebrow + title + optional lede, centred. The standard screen opener. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  size = 'lg',
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  size?: DisplaySize;
  align?: 'center' | 'start';
  className?: string;
}) {
  return (
    <header
      className={cx(
        'space-y-3',
        align === 'center' ? 'text-center flex flex-col items-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <DisplayTitle size={size}>{title}</DisplayTitle>
      {lede && (
        <p className={cx('font-sans text-sm md:text-base text-ink-muted leading-relaxed prose-measure')}>
          {lede}
        </p>
      )}
    </header>
  );
}

/** Long interpretation copy, capped at a readable measure. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx('font-sans text-sm text-ink leading-relaxed prose-measure space-y-3', className)}>
      {children}
    </div>
  );
}
