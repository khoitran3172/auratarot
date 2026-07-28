import type { ReactNode } from 'react';
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { cx } from './cx';
import { Button } from './Button';

type Tone = 'danger' | 'warning' | 'success' | 'info';

const tones: Record<Tone, { wrap: string; icon: ReactNode }> = {
  danger: {
    wrap: 'bg-danger/10 border-danger/25 text-danger',
    icon: <XCircle className="w-4 h-4 shrink-0 mt-px" aria-hidden />,
  },
  warning: {
    wrap: 'bg-warning/10 border-warning/25 text-warning',
    icon: <AlertTriangle className="w-4 h-4 shrink-0 mt-px" aria-hidden />,
  },
  success: {
    wrap: 'bg-success/10 border-success/25 text-success',
    icon: <CheckCircle2 className="w-4 h-4 shrink-0 mt-px" aria-hidden />,
  },
  info: {
    wrap: 'bg-accent-2/10 border-accent-2/25 text-accent-2',
    icon: <Info className="w-4 h-4 shrink-0 mt-px" aria-hidden />,
  },
};

export function Alert({ tone = 'danger', children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cx(
        'flex items-start gap-2 p-3 rounded-lg border font-sans text-xs leading-relaxed',
        tones[tone].wrap,
        className,
      )}
    >
      {tones[tone].icon}
      <div>{children}</div>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  body,
  actionLabel,
  onAction,
}: {
  icon?: ReactNode;
  title: string;
  body?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-14 px-6">
      {icon && <div className="text-accent/60 mb-1">{icon}</div>}
      <h3 className="font-serif text-xl font-bold text-ink-strong tracking-display">{title}</h3>
      {body && <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm">{body}</p>}
      {actionLabel && onAction && (
        <Button variant="secondary" mono onClick={onAction} className="mt-2">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cx('skeleton rounded-lg', className)} />;
}

/** Replaces the bare spinner used while the heavy interpretation datasets
 *  load — a shaped placeholder reads as progress instead of a stall. */
export function LoadingPanel({ label }: { label: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-10 space-y-6" role="status" aria-live="polite">
      <span className="sr-only">{label}</span>
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-9 w-72 max-w-full" />
        <Skeleton className="h-3 w-56" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
      <Skeleton className="h-24" />
    </div>
  );
}
