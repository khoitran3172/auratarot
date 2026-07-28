/**
 * Visual direction switching.
 *
 * A direction is nothing but a `data-theme` value on <html>; all colour, type,
 * shape and elevation values come from `styles/themes.css`. Nothing here needs
 * to know what any direction looks like.
 */
import { useCallback, useEffect, useState } from 'react';

export const THEMES = [
  {
    id: 'obsidian',
    name: 'Obsidian & Brass',
    blurb: 'Tối, kính, nhấn đồng thau. Bản tinh chỉnh của hướng hiện tại.',
  },
  {
    id: 'parchment',
    name: 'Celestial Parchment',
    blurb: 'Sáng, giấy cũ, mực sâu. Dễ đọc nhất cho văn bản luận giải dài.',
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    blurb: 'Tối phẳng, một sắc nhấn tím, không glow. Kỷ luật kiểu editorial.',
  },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

export const DEFAULT_THEME: ThemeId = 'obsidian';
const STORAGE_KEY = 'aura_theme';

function isThemeId(value: unknown): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}

export function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isThemeId(stored)) return stored;
  } catch {
    // Private mode / storage disabled — fall through to the default.
  }
  return DEFAULT_THEME;
}

export function applyTheme(theme: ThemeId): void {
  document.documentElement.dataset.theme = theme;
}

/** Reads the direction the pre-paint script in index.html already applied. */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const applied = document.documentElement.dataset.theme;
    return isThemeId(applied) ? applied : DEFAULT_THEME;
  });

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Not being able to remember the choice is not worth failing over.
    }
  }, [theme]);

  return { theme, setTheme: useCallback((next: ThemeId) => setTheme(next), []) };
}
