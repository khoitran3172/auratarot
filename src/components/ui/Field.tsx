import { useId } from 'react';
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

const control =
  'w-full px-4 h-11 surface-sunken rounded-lg font-sans text-sm text-ink ' +
  'placeholder:text-ink-subtle transition-colors ' +
  'hover:border-line-strong disabled:opacity-50 disabled:cursor-not-allowed';

const invalid = 'border-danger/60 hover:border-danger';

/** Label + control + hint/error, wired together with real ids so screen
 *  readers announce them. The previous screens used bare inputs with the
 *  label as unassociated text. */
function Wrapper({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="eyebrow block">
          {label}
          {required && (
            <span className="text-danger ml-1" aria-hidden>
              *
            </span>
          )}
        </label>
      )}
      {children}
      {error ? (
        <p id={`${id}-msg`} role="alert" className="font-sans text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-msg`} className="font-sans text-xs text-ink-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className, required, ...rest }: InputProps) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} required={required}>
      <input
        {...rest}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? `${id}-msg` : undefined}
        className={cx(control, error && invalid, className)}
      />
    </Wrapper>
  );
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Select({ label, hint, error, className, required, children, ...rest }: SelectProps) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} required={required}>
      <select
        {...rest}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? `${id}-msg` : undefined}
        className={cx(control, 'cursor-pointer', error && invalid, className)}
      >
        {children}
      </select>
    </Wrapper>
  );
}

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, className, required, rows = 4, ...rest }: TextareaProps) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} required={required}>
      <textarea
        {...rest}
        id={id}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? `${id}-msg` : undefined}
        className={cx(control, 'h-auto py-3 leading-relaxed resize-y', error && invalid, className)}
      />
    </Wrapper>
  );
}
