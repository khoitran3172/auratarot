/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import ReadingRoom from './components/ReadingRoom';
import DailyHoroscope from './components/DailyHoroscope';
import TarotJournal from './components/TarotJournal';
import TarotEncyclopedia from './components/TarotEncyclopedia';
import { ReadingHistory } from './types';
import { Compass, Sun, Orbit, Hash, Grid3x3, BookOpen, NotebookPen } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './theme';
import { LoadingPanel, ThemeSwitcher } from './components/ui';

// Heavy features bundle large interpretation datasets — load them on demand
const NatalChart = lazy(() => import('./components/NatalChart'));
const Numerology = lazy(() => import('./components/Numerology'));
const TuViChart = lazy(() => import('./components/TuViChart'));

type View = 'Reading' | 'Daily' | 'Chart' | 'Numerology' | 'TuVi' | 'Journal' | 'Library';

const navItems: { view: View; label: string; icon: typeof Compass }[] = [
  { view: 'Reading', label: 'Trải bài', icon: Compass },
  { view: 'Daily', label: 'Dự báo ngày', icon: Sun },
  { view: 'Chart', label: 'Bản đồ sao', icon: Orbit },
  { view: 'Numerology', label: 'Thần số', icon: Hash },
  { view: 'TuVi', label: 'Tử vi', icon: Grid3x3 },
  { view: 'Journal', label: 'Nhật ký', icon: NotebookPen },
  { view: 'Library', label: 'Thư viện', icon: BookOpen },
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>('Reading');
  const [historyList, setHistoryList] = useState<ReadingHistory[]>([]);
  const { theme, setTheme } = useTheme();

  // Load reading history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aura_tarot_history_db');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setHistoryList(parsed);
        }
      } catch (e) {
        console.error('Failed to load user history:', e);
      }
    }
  }, []);

  // Save new reading history item
  const handleSaveReading = (newReading: ReadingHistory) => {
    setHistoryList(prev => {
      const updated = [newReading, ...prev];
      localStorage.setItem('aura_tarot_history_db', JSON.stringify(updated));
      return updated;
    });
  };

  // Update user notes on an existing reading
  const handleUpdateHistory = (id: string, updatedNotes: string) => {
    setHistoryList(prev => {
      const updated = prev.map(item =>
        item.id === id ? { ...item, userNotes: updatedNotes } : item
      );
      localStorage.setItem('aura_tarot_history_db', JSON.stringify(updated));
      return updated;
    });
  };

  // Navigate function helper
  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg text-ink min-h-screen pb-24 md:pb-0">

      {/* Top Header Navigation bar */}
      <header className="fixed top-0 w-full z-40 bg-bg-elevated/70 backdrop-blur-xl border-b border-line">
        <div className="flex items-center justify-between gap-4 px-4 md:px-8 lg:px-12 h-16 w-full max-w-7xl mx-auto font-sans">

          {/* Logo — a real button, so it is reachable and operable by keyboard.
              It was a div with an onClick before. */}
          <button
            type="button"
            onClick={() => navigateTo('Reading')}
            aria-label="Về phòng trải bài"
            className="flex items-center gap-3 cursor-pointer shrink-0 rounded-lg"
          >
            <span className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center shrink-0" aria-hidden>
              <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-accent to-transparent" />
            </span>
            <span className="font-serif text-lg md:text-xl font-bold tracking-display text-accent whitespace-nowrap">
              AURA TAROT
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Điều hướng chính" className="hidden md:flex gap-5 lg:gap-8 items-center justify-center flex-1">
            {navItems.map(({ view, label }) => (
              <button
                key={view}
                onClick={() => navigateTo(view)}
                aria-current={currentView === view ? 'page' : undefined}
                className={`tracking-wider text-[11px] uppercase whitespace-nowrap transition-colors duration-200 cursor-pointer pb-1 border-b ${
                  currentView === view ? 'text-accent border-accent font-semibold' : 'text-ink-muted hover:text-ink-strong border-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right section: visual-direction picker (redesign scaffolding) */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeSwitcher theme={theme} onChange={setTheme} />
          </div>

        </div>
      </header>

      {/* Main content Router Stage.
          KHÔNG bọc AnimatePresence ở tầng router: với các view nặng (lazy + dataset lớn),
          AnimatePresence mode="wait" bị treo ở view cũ khiến điều hướng chết hẳn.
          Chỉ cần motion.div có key đổi theo view là đủ hiệu ứng fade khi vào. */}
      <main className="pt-20 min-h-[calc(100vh-4rem)]">
        {/* The document had no h1 at all: every screen starts its own outline
            at h2. Until the screens adopt SectionHeader (which can render h1),
            this names the current view for assistive tech and search. */}
        <h1 className="sr-only">
          Aura Tarot — {navItems.find((n) => n.view === currentView)?.label ?? 'Trải bài'}
        </h1>
        <motion.div
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
            {currentView === 'Reading' && <ReadingRoom onSaveReading={handleSaveReading} />}

            {currentView === 'Daily' && <DailyHoroscope />}

            {currentView === 'Chart' && (
              <Suspense fallback={<LoadingPanel label="Đang triệu hồi tinh bàn..." />}>
                <NatalChart />
              </Suspense>
            )}

            {currentView === 'Numerology' && (
              <Suspense fallback={<LoadingPanel label="Đang giải mã những con số..." />}>
                <Numerology />
              </Suspense>
            )}

            {currentView === 'TuVi' && (
              <Suspense fallback={<LoadingPanel label="Đang an sao lập lá số..." />}>
                <TuViChart />
              </Suspense>
            )}

            {currentView === 'Journal' && (
              <TarotJournal
                historyList={historyList}
                onUpdateHistory={handleUpdateHistory}
                onNavigateToDraw={() => navigateTo('Reading')}
              />
            )}

            {currentView === 'Library' && <TarotEncyclopedia />}
        </motion.div>
      </main>

      {/* Fixed Sticky Mobile Bottom Navigation Bar (Visible only on mobile devices) */}
      <nav
        aria-label="Điều hướng chính"
        className="md:hidden fixed bottom-0 left-0 w-full z-45 bg-bg-elevated/90 backdrop-blur-2xl border-t border-line rounded-t-2xl flex justify-around items-stretch px-1 pb-safe select-none"
      >
        {navItems.map(({ view, label, icon: Icon }) => (
          <button
            key={view}
            onClick={() => navigateTo(view)}
            aria-current={currentView === view ? 'page' : undefined}
            className={`flex-1 min-w-0 tap-target flex flex-col items-center justify-start gap-1 pt-2 transition-colors ${
              currentView === view ? 'text-accent' : 'text-ink-subtle hover:text-accent'
            }`}
          >
            <Icon className="w-5 h-5 shrink-0" aria-hidden />
            {/* 10px is the floor for a legible label at this width; the
                previous 9px sat below it. Two of the seven labels wrap to two
                lines, so the row is top-aligned to keep the icons on one line
                — the real fix is fewer top-level destinations. */}
            <span className="font-mono text-[10px] font-semibold uppercase leading-tight text-center px-0.5">
              {label}
            </span>
          </button>
        ))}
      </nav>

    </div>
  );
}
