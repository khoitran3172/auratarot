import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { THEMES, type ThemeId } from '../../theme';
import { cx } from './cx';

/**
 * Evaluation control for choosing a visual direction.
 *
 * This is scaffolding for the redesign, not a product feature: once a
 * direction is picked, keep that one block in `styles/themes.css`, drop the
 * others, and delete this component.
 */
export function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: ThemeId;
  onChange: (next: ThemeId) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="tap-target flex items-center gap-2 px-3 rounded-lg border border-line text-ink-muted hover:text-accent hover:border-line-strong transition-colors cursor-pointer"
      >
        <Palette className="w-4 h-4 shrink-0" aria-hidden />
        <span className="hidden lg:inline font-mono text-[10px] uppercase tracking-wider whitespace-nowrap">
          {current.name}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div
            role="menu"
            aria-label="Hướng thiết kế"
            className="absolute right-0 top-full mt-2 z-50 w-72 surface-overlay rounded-xl p-1.5"
          >
            <p className="eyebrow px-3 pt-2 pb-1.5 block">Hướng thiết kế</p>
            {THEMES.map((t) => {
              const selected = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => {
                    onChange(t.id);
                    setOpen(false);
                  }}
                  className={cx(
                    'w-full text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer',
                    selected ? 'bg-accent/12' : 'hover:bg-ink-strong/6',
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className={cx(
                        'font-sans text-sm font-semibold',
                        selected ? 'text-accent' : 'text-ink-strong',
                      )}
                    >
                      {t.name}
                    </span>
                    {selected && <Check className="w-4 h-4 text-accent shrink-0" aria-hidden />}
                  </span>
                  <span className="block font-sans text-xs text-ink-muted leading-relaxed mt-0.5">
                    {t.blurb}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
