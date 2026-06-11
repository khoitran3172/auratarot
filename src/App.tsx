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
import { Compass, Sun, Orbit, BookOpen, NotebookPen, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Natal chart bundles the astronomy engine + a large interpretation dataset — load it on demand
const NatalChart = lazy(() => import('./components/NatalChart'));

type View = 'Reading' | 'Daily' | 'Chart' | 'Journal' | 'Library';

const navItems: { view: View; label: string; icon: typeof Compass }[] = [
  { view: 'Reading', label: 'Trải bài', icon: Compass },
  { view: 'Daily', label: 'Dự báo ngày', icon: Sun },
  { view: 'Chart', label: 'Bản đồ sao', icon: Orbit },
  { view: 'Journal', label: 'Nhật ký', icon: NotebookPen },
  { view: 'Library', label: 'Thư viện', icon: BookOpen },
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>('Reading');
  const [historyList, setHistoryList] = useState<ReadingHistory[]>([]);

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
    <div className="bg-brand-void text-on-background min-h-screen selection:bg-brand-gold/30 selection:text-white pb-24 md:pb-0">

      {/* Top Header Navigation bar */}
      <header className="fixed top-0 w-full z-40 bg-brand-void/40 backdrop-blur-xl border-b border-brand-gold/10 shadow-[0_0_20px_rgba(197,160,89,0.06)]">
        <div className="flex items-center justify-between gap-4 px-4 md:px-8 lg:px-12 h-16 w-full max-w-7xl mx-auto font-sans">

          {/* Logo Brand tag */}
          <div
            onClick={() => navigateTo('Reading')}
            className="flex items-center gap-3 text-brand-gold cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-full border border-brand-gold/50 flex items-center justify-center shrink-0">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-gold to-transparent"></div>
            </div>
            <h1 className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-gold whitespace-nowrap">
              AURA TAROT
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-5 lg:gap-10 items-center justify-center flex-1">
            {navItems.map(({ view, label }) => (
              <button
                key={view}
                onClick={() => navigateTo(view)}
                className={`tracking-wider text-[11px] uppercase whitespace-nowrap transition-all duration-300 outline-none cursor-pointer pb-1 border-b ${
                  currentView === view ? 'text-brand-gold border-brand-gold font-semibold' : 'text-white/60 hover:text-white border-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right section: Status indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden lg:inline text-[10px] text-gray-400 uppercase tracking-widest font-mono whitespace-nowrap">Ma thuật • Sẵn sàng</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
          </div>

        </div>
      </header>

      {/* Main content Router Stage */}
      <main className="pt-20 min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          {currentView === 'Reading' && (
            <motion.div
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ReadingRoom
                onSaveReading={handleSaveReading}
              />
            </motion.div>
          )}

          {currentView === 'Daily' && (
            <motion.div
              key="daily"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DailyHoroscope />
            </motion.div>
          )}

          {currentView === 'Chart' && (
            <motion.div
              key="chart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center py-32 gap-4">
                  <Sparkles className="w-8 h-8 text-brand-gold animate-pulse" />
                  <span className="font-mono text-xs text-brand-gold tracking-widest uppercase">Đang triệu hồi tinh bàn...</span>
                </div>
              }>
                <NatalChart />
              </Suspense>
            </motion.div>
          )}

          {currentView === 'Journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TarotJournal
                historyList={historyList}
                onUpdateHistory={handleUpdateHistory}
                onNavigateToDraw={() => navigateTo('Reading')}
              />
            </motion.div>
          )}

          {currentView === 'Library' && (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TarotEncyclopedia />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Fixed Sticky Mobile Bottom Navigation Bar (Visible only on mobile devices) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-45 bg-brand-void/80 backdrop-blur-2xl border-t border-brand-gold/15 shadow-[0_-4px_20px_rgba(233,195,73,0.08)] rounded-t-2xl h-18 flex justify-around items-center px-4 py-2 pb-safe select-none">
        {navItems.map(({ view, label, icon: Icon }) => (
          <button
            key={view}
            onClick={() => navigateTo(view)}
            className={`flex flex-col items-center justify-center p-2 outline-none transition-all ${
              currentView === view
                ? 'text-brand-gold scale-110 drop-shadow-[0_0_8px_rgba(233,195,73,0.4)]'
                : 'text-on-surface-variant/60 hover:text-brand-gold'
            }`}
          >
            <Icon className="w-5.5 h-5.5" />
            <span className="font-mono text-[9px] mt-1 font-semibold uppercase">{label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}
