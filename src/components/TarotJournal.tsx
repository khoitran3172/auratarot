import { useState, useEffect } from 'react';
import { ReadingHistory, TarotCard } from '../types';
import { tarotCards } from '../data/cards';
import { Calendar, Filter, Sparkles, BookOpen, Plus, Info, Edit3, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';

interface TarotJournalProps {
  historyList: ReadingHistory[];
  onUpdateHistory: (id: string, updatedNotes: string) => void;
  onNavigateToDraw: () => void;
}

// Format a Date object as YYYY-MM-DD in local timezone
const toLocalKey = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Resolve the YYYY-MM-DD key of a history item. Newer records carry isoDate;
// older ones only have the vi-VN display date ("d/m/yyyy") which we parse.
const getItemDateKey = (item: ReadingHistory): string | null => {
  if (item.isoDate) return item.isoDate;
  const parts = item.date?.split('/');
  if (parts?.length === 3) {
    const [day, month, year] = parts;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  return null;
};

export default function TarotJournal({ historyList, onUpdateHistory, onNavigateToDraw }: TarotJournalProps) {
  const [selectedReading, setSelectedReading] = useState<ReadingHistory | null>(null);
  const [notesInput, setNotesInput] = useState('');
  const [filterAspect, setFilterAspect] = useState<string>('All');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Count real readings per day for the heatmap & streak
  const countsByDay = new Map<string, number>();
  historyList.forEach(item => {
    const key = getItemDateKey(item);
    if (key) countsByDay.set(key, (countsByDay.get(key) || 0) + 1);
  });

  // Heatmap: the last 84 days (12 weeks), oldest first, today in the last cell
  const heatmapDays: { key: string; label: string; count: number }[] = [];
  for (let i = 83; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = toLocalKey(d);
    heatmapDays.push({
      key,
      label: d.toLocaleDateString('vi-VN'),
      count: countsByDay.get(key) || 0,
    });
  }

  // Streak: consecutive days with at least one reading, counting back from
  // today (or yesterday, so an unfinished day doesn't break the chain)
  let streak = 0;
  {
    const cursor = new Date();
    if (!countsByDay.has(toLocalKey(cursor))) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (countsByDay.has(toLocalKey(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
  }

  // Collect unique aspects for filter dropdown
  const uniqueAspects = ['All', ...Array.from(new Set(historyList.map(h => h.aspect)))];

  // Map card thumbnails by ID
  const getCardById = (id: string): TarotCard | undefined => {
    return tarotCards.find(c => c.id === id);
  };

  const handleOpenDetailModal = (reading: ReadingHistory) => {
    setSelectedReading(reading);
    setNotesInput(reading.userNotes || '');
  };

  const handleSaveNotes = () => {
    if (!selectedReading) return;
    onUpdateHistory(selectedReading.id, notesInput);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 2000);
  };

  // Filtered readings list
  const filteredList = historyList.filter(item => {
    return filterAspect === 'All' || item.aspect === filterAspect;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6" id="tarot-journal">
      {/* Header section with personal greeting */}
      <section className="mb-10 space-y-3">
        <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
          Nhật ký tâm linh
        </span>
        <h2 className="font-serif text-3.5xl md:text-5xl text-brand-gold font-bold">
          Chào buổi sáng, <span className="italic block sm:inline">Kẻ Tìm Kiếm</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Những trang nhật ký chiêm nghiệm chính là cánh cửa, là tấm gương phản chiếu chân thật nhất linh hồn của chính bạn. Hãy tĩnh tâm chiêm nghiệm lại hành trình tâm linh suốt tuần qua.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heatmap and Statistics metrics */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Calendar Draw Frequency Heatmap container */}
          <div className="glass-card p-6 rounded-2xl border border-brand-gold/15 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-xs text-brand-gold tracking-wider font-bold uppercase">
                Tần suất trải bài
              </h3>
              <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
            </div>

            {/* Real activity heatmap: last 84 days of readings, today last */}
            <div className="grid grid-cols-12 gap-1.5" id="frequency-map">
              {heatmapDays.map((day) => {
                const intensity = Math.min(day.count, 4);
                let bgClass = 'bg-brand-purple/10 border-white/5';
                if (intensity === 1) bgClass = 'bg-brand-gold/30 border-brand-gold/15';
                else if (intensity === 2) bgClass = 'bg-brand-gold/55 border-brand-gold/25';
                else if (intensity === 3) bgClass = 'bg-brand-gold/80 border-brand-gold/35';
                else if (intensity === 4) bgClass = 'bg-brand-gold border-brand-gold/45';

                return (
                  <div
                    key={day.key}
                    className={`aspect-square rounded-[3px] border ${bgClass} transition-all duration-300 hover:scale-110 cursor-pointer`}
                    title={`${day.label}: ${day.count} lượt trải bài`}
                  />
                );
              })}
            </div>

            {/* Heatmap legends and footnotes */}
            <div className="mt-5 flex justify-between text-[10px] text-on-surface-variant font-mono tracking-wider">
              <span>ÍT HƠN</span>
              <div className="flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-purple/10 border border-white/5"></div>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-gold/20"></div>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-gold/40"></div>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-gold/70"></div>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-gold"></div>
              </div>
              <span>NHIỀU HƠN</span>
            </div>
          </div>

          {/* Quick Metrics columns block */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl border border-brand-gold/10 text-center space-y-1">
              <span className="block text-brand-gold font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
                {historyList.length < 10 ? `0${historyList.length}` : historyList.length}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant tracking-widest uppercase">
                Bản ghi quẻ
              </span>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-brand-cyan/10 text-center space-y-1">
              <span className="block text-brand-cyan font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
                {streak < 10 ? `0${streak}` : streak}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] text-on-surface-variant tracking-widest uppercase">
                Chuỗi ngày
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: History List grid cards */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b border-brand-gold/5 pb-3">
            <h3 className="font-mono text-xs text-brand-gold tracking-widest uppercase font-bold">
              Lịch sử hành trình
            </h3>
            
            {/* Filter by aspect criteria */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase">Lọc khía cạnh:</span>
              <select
                className="bg-brand-purple/40 border border-outline/20 text-on-background font-mono text-[10px] rounded-full px-3 py-1.5 focus:border-brand-gold focus:ring-0 outline-none transition-colors"
                value={filterAspect}
                onChange={(e) => setFilterAspect(e.target.value)}
              >
                {uniqueAspects.map(asp => (
                  <option key={asp} value={asp} className="bg-brand-void text-on-background text-xs">
                    {asp === 'All' ? 'TẤT CẢ' : asp.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Journal card objects list */}
            {filteredList.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleOpenDetailModal(item)}
                className="glass-card rounded-2xl p-5 hover:border-brand-gold/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5 shadow-sm hover:shadow-[0_0_15px_rgba(233,195,73,0.1)] hover:scale-[1.01]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-mono text-[10px] text-brand-magenta text-brand-cyan tracking-wider block uppercase">
                        {item.date}
                      </span>
                      <h4 className="font-serif text-xl text-on-background font-bold group-hover:text-brand-gold transition-colors mt-1">
                        {item.aspect}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0" />
                  </div>

                  {/* Draw card thumbnail images row */}
                  <div className="flex gap-2.5 mb-4 overflow-x-auto no-scrollbar py-1">
                    {item.drawnCards.map((cardId, index) => {
                      const card = getCardById(cardId);
                      return card ? (
                        <div
                          key={cardId}
                          className="w-12 h-20 rounded-lg border border-brand-gold/25 overflow-hidden shrink-0 shadow-sm relative group-hover:scale-105 transition-transform duration-300"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <img
                            src={card.image}
                            alt={card.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div key={cardId} className="w-12 h-20 bg-brand-purple/20 border border-brand-gold/10 shrink-0 flex items-center justify-center rounded-lg text-xs font-mono text-brand-gold/50">
                          -
                        </div>
                      );
                    })}
                  </div>

                  {/* Preview of AI explanation excerpt */}
                  <div className="text-xs text-on-surface-variant font-sans italic line-clamp-2 leading-relaxed bg-brand-purple/5 p-3 rounded-xl border border-brand-gold/5">
                     {item.aiResponse.replace(/[#*`_]/g, '').slice(0, 150)}...
                  </div>
                </div>

                {item.userNotes && (
                  <div className="text-[10px] font-sans text-brand-cyan truncate flex items-center gap-1 bg-brand-cyan/10 py-1 px-2 rounded-md border border-brand-cyan/10">
                    <Edit3 className="w-3 h-3 text-brand-cyan" />
                    <span>Đã ghi lại cảm nghiệm</span>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Dotted border trigger button "TẠO BẢN GHI MỚI" */}
            <div
              onClick={onNavigateToDraw}
              className="border border-dashed border-brand-gold/30 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:bg-brand-gold/5 hover:border-brand-gold transition-all duration-300 cursor-pointer h-48 group text-center"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-brand-gold tracking-[0.25em] font-bold uppercase block">
                Tạo bản ghi mới
              </span>
              <p className="text-[10px] text-on-surface-variant font-sans max-w-[180px]">
                Hỏi Vũ Trụ một quẻ Tarot 3 lá mới để ghi chép vào hành trình.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Detial popup modal view */}
      <AnimatePresence>
        {selectedReading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal glass back drop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReading(null)}
              className="absolute inset-0 bg-brand-void/80 backdrop-blur-xl"
            />

            {/* Modal Panel Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-3xl bg-brand-void border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(233,195,73,0.15)] z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header inside detail popup modal */}
              <div className="p-5 border-b border-brand-gold/10 flex justify-between items-center bg-brand-purple/5">
                <div>
                  <span className="font-mono text-[9px] md:text-xs text-brand-cyan uppercase block">{selectedReading.date} · Khía cạnh {selectedReading.aspect}</span>
                  <h4 className="font-serif text-lg md:text-xl text-brand-gold font-bold truncate max-w-md">Q: {selectedReading.question}</h4>
                </div>
                <button
                  onClick={() => setSelectedReading(null)}
                  className="p-2 text-on-surface-variant hover:text-white bg-brand-purple/40 rounded-full transition-colors outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main detail content scrollpane */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar text-sm md:text-base leading-relaxed">
                
                {/* 1. Drawn Cards thumbs on top detail modal */}
                <div className="space-y-3 p-4 bg-brand-purple/5 border border-brand-gold/10 rounded-2xl">
                  <span className="font-mono text-xs text-brand-gold uppercase block tracking-wider">Các lá bài đã rút:</span>
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    {selectedReading.drawnCards.map((cardId, index) => {
                      const card = getCardById(cardId);
                      const stepName = selectedReading.drawnCards.length === 3
                        ? (index === 0 ? 'Quá Khứ' : index === 1 ? 'Hiện Tại' : 'Tương Lai')
                        : `Lá ${index + 1}`;
                      return card ? (
                        <div key={cardId} className="flex items-center gap-3 bg-brand-void p-2 rounded-xl border border-brand-gold/15 shadow-sm">
                          <img
                            src={card.image}
                            alt={card.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-16 object-cover rounded-md border border-brand-gold/10 shrink-0"
                          />
                          <div>
                            <span className="font-mono text-[9px] text-brand-cyan tracking-wider uppercase block">{stepName}</span>
                            <span className="font-serif text-xs text-white font-bold">{card.name}</span>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* 2. AI reading response container text */}
                <div className="markdown-body p-4 bg-brand-purple/10 border border-white/5 rounded-2xl text-on-background">
                  <Markdown>{selectedReading.aiResponse}</Markdown>
                </div>

                {/* 3. Seeker custom note editor container */}
                <div className="space-y-3 p-4 bg-brand-cyan/5 border border-brand-cyan/15 rounded-2xl">
                  <label htmlFor="user-meditation" className="font-mono text-xs text-brand-cyan tracking-wider uppercase flex items-center gap-1.5 font-bold">
                    <Edit3 className="w-4.5 h-4.5 text-brand-cyan" />
                    Bút ký chiêm bói cá nhân (Nghiệm lý của riêng bạn)
                  </label>
                  <textarea
                    id="user-meditation"
                    className="w-full bg-brand-void border border-brand-cyan/25 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 text-on-background font-sans text-xs md:text-sm p-3.5 rounded-xl outline-none min-h-[100px] leading-relaxed transition-colors"
                    placeholder="Hãy tự ghi thêm những diễn tiến sự kiện thực tế, linh cảm cá nhân, hoặc cảm nhận nghiệm lý sau những ngày trải quẻ đề chiêm nghiệm lại..."
                    value={notesInput}
                    onChange={(e) => setNotesInput(e.target.value)}
                  />
                  
                  {/* Actions inside form note custom notes */}
                  <div className="flex justify-end gap-3 items-center">
                    {saveSuccess && (
                      <span className="text-xs text-green-400 font-mono flex items-center gap-1 animate-pulse">
                        <Check className="w-4 h-4" /> Đã lưu thành công
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={handleSaveNotes}
                      className="px-5 py-2.5 bg-brand-cyan text-brand-void text-xs font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-all outline-none cursor-pointer"
                    >
                      LƯU BÚT KÝ
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
