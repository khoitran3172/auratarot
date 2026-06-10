import { useState } from 'react';
import { tarotCards } from '../data/cards';
import { TarotCard } from '../types';
import { Search, Sparkles, Filter, X, Eye, Compass, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TarotEncyclopedia() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Major Arcana' | 'Suit of Cups' | 'Suit of Wands' | 'Suit of Swords' | 'Suit of Pentacles'>('All');
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  const filteredCards = tarotCards.filter((card) => {
    const matchesSearch =
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.englishName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter =
      activeFilter === 'All' || card.group === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const categories: ('All' | 'Major Arcana' | 'Suit of Cups' | 'Suit of Wands' | 'Suit of Swords' | 'Suit of Pentacles')[] = [
    'All',
    'Major Arcana',
    'Suit of Cups',
    'Suit of Wands',
    'Suit of Swords',
    'Suit of Pentacles',
  ];

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'All': return 'Tất cả lá bài';
      case 'Major Arcana': return 'Bộ Ẩn Chính';
      case 'Suit of Cups': return 'Bộ Cups (Cúp)';
      case 'Suit of Wands': return 'Bộ Wands (Gậy)';
      case 'Suit of Swords': return 'Bộ Swords (Kiếm)';
      case 'Suit of Pentacles': return 'Bộ Pentacles (Tiền)';
      default: return filter;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6" id="tarot-encyclopedia">
      {/* Search and Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold flex items-center gap-2 mb-2">
            <Sparkles className="w-4.5 h-4.5 text-brand-gold animate-pulse" />
            THƯ VIỆN CỔ XƯA
          </span>
          <h2 className="font-serif text-3xl md:text-4.5xl text-brand-gold font-bold tracking-tight">
            Tarot Encyclopedia
          </h2>
          <p className="text-on-surface-variant font-sans text-sm md:text-base mt-2 max-w-2xl">
            Tra cứu chi tiết ý nghĩa huyền học, chiêm tinh học và những lời khuyên tâm linh từ 78 lá bài vũ trụ được lưu truyền ngàn đời.
          </p>
        </div>

        {/* Custom Search Box */}
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/70 group-focus-within:text-brand-cyan transition-colors" />
          <input
            type="text"
            className="w-full bg-brand-purple/20 border border-outline/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 text-on-background placeholder-on-surface-variant/50 font-sans text-sm px-12 py-3.5 rounded-xl backdrop-blur-md outline-none transition-all"
            placeholder="Tìm kiếm lá bài (ví dụ: Pháp Sư, Lovers)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Horizontal categories list */}
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-${cat.toLowerCase().replace(/ /g, '-')}`}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full border text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-300 ${
              activeFilter === cat
                ? 'border-brand-gold text-brand-gold bg-brand-gold/10 shadow-[0_0_15px_rgba(233,195,73,0.15)] font-semibold'
                : 'border-outline/30 text-on-surface-variant hover:border-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5'
            }`}
          >
            {getFilterLabel(cat)}
          </button>
        ))}
      </div>

      {/* Tarot Grid view */}
      {filteredCards.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredCards.map((card, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer bg-brand-purple/10 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 hover:scale-[1.03] hover:z-20 shadow-md hover:shadow-[0_0_20px_rgba(233,195,73,0.15)] flex flex-col justify-end"
            >
              {/* Background gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity z-10" />

              {/* Card Artwork Image */}
              <img
                src={card.image}
                alt={card.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Information Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-20 transition-transform group-hover:translate-y-[-2px] duration-300">
                <span className="font-mono text-[10px] text-brand-cyan tracking-wider block mb-1">
                  {card.number} · {card.group === 'Major Arcana' ? 'Ẩn Chính' : 'Ẩn Phụ'}
                </span>
                <h3 className="font-serif text-lg text-brand-gold font-bold line-clamp-1 group-hover:text-white transition-colors duration-300">
                  {card.name}
                </h3>
                <p className="font-mono text-[11px] text-on-surface-variant italic line-clamp-1">
                  {card.englishName}
                </p>
              </div>

              {/* Micro-sparkle glow on hover */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-brand-gold/5 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Info className="w-12 h-12 text-on-surface-variant/40 mb-3 animate-bounce" />
          <p className="font-serif text-xl text-on-surface mb-1">Không tìm thấy lá bài nào</p>
          <p className="text-on-surface-variant text-sm max-w-sm">Hãy thử tìm kiếm bằng một từ khóa hoặc chuyển nhóm lọc khác nhé.</p>
        </div>
      )}

      {/* Detailed Modal Popup for Card Info */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-brand-void/80 backdrop-blur-xl"
            />

            {/* Modal Panel content */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-4xl bg-brand-void/90 border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(233,195,73,0.15)] z-10 select-none flex flex-col max-h-[90vh] md:max-h-none md:h-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-30 p-2 text-on-surface-variant hover:text-white bg-brand-purple/40 hover:bg-brand-purple/70 rounded-full transition-colors"
                aria-label="Đóng bảng chi tiết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto w-full custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-12 md:h-auto">
                  
                  {/* Left Column: Visual Image with Glow */}
                  <div className="md:col-span-5 relative bg-brand-purple/20 min-h-[350px] md:min-h-[500px] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-brand-gold/10">
                    <div className="absolute inset-0 bg-radial-gradient from-brand-gold/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    <div className="tarot-float w-52 sm:w-60 md:w-64 aspect-[2/3] rounded-2xl overflow-hidden border border-brand-gold/50 shadow-[0_0_35px_rgba(233,195,73,0.25)] relative p-1 bg-brand-purple/30">
                      <img
                        src={selectedCard.image}
                        alt={selectedCard.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Right Column: Mystical Tarot details list */}
                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      {/* Subtitle information */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                          Thẻ Số {selectedCard.number}
                        </span>
                        <span className="font-mono text-xs text-on-surface-variant">
                          {selectedCard.group}
                        </span>
                      </div>

                      {/* Header Title */}
                      <h3 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-1">
                        {selectedCard.name}
                      </h3>
                      <p className="font-mono text-sm text-brand-cyan italic mb-6">
                        {selectedCard.englishName}
                      </p>

                      <div className="space-y-6">
                        {/* 1. Overview */}
                        <div>
                          <h4 className="font-mono text-xs text-brand-gold tracking-wider flex items-center gap-2 mb-2 uppercase font-semibold">
                            <Info className="w-4 h-4 text-brand-gold" />
                            Ý nghĩa tổng quan
                          </h4>
                          <p className="text-sm text-on-surface/90 leading-relaxed font-sans">
                            {selectedCard.overview}
                          </p>
                        </div>

                        {/* Upright & Reversed dual column */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-3.5 rounded-xl bg-green-500/5 border border-green-500/20">
                            <h4 className="font-mono text-xs text-green-400 tracking-wider flex items-center gap-1.5 mb-1.5 uppercase font-semibold">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Nghĩa xuôi
                            </h4>
                            <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                              {selectedCard.upright}
                            </p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20">
                            <h4 className="font-mono text-xs text-red-400 tracking-wider flex items-center gap-1.5 mb-1.5 uppercase font-semibold">
                              <AlertTriangle className="w-3.5 h-3.5" />
                              Nghĩa ngược
                            </h4>
                            <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                              {selectedCard.reversed}
                            </p>
                          </div>
                        </div>

                        {/* Astrology */}
                        <div>
                          <h4 className="font-mono text-xs text-brand-cyan tracking-wider flex items-center gap-2 mb-2 uppercase font-semibold">
                            <Compass className="w-4 h-4 text-brand-cyan" />
                            Yếu tố chiêm tinh
                          </h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
                            {selectedCard.astrology}
                          </p>
                        </div>

                        {/* Divine Advice */}
                        <div className="p-4 rounded-xl relative border border-brand-gold/20 overflow-hidden bg-brand-gold/5">
                          <h4 className="font-mono text-xs text-brand-gold tracking-wider flex items-center gap-2 mb-2 uppercase font-semibold">
                            <Sparkles className="w-4 h-4 text-brand-gold" />
                            Thông điệp lời khuyên từ vũ trụ
                          </h4>
                          <p className="text-xs md:text-sm text-on-surface italic font-sans leading-relaxed">
                            "{selectedCard.advice}"
                          </p>
                        </div>
                      </div>
                    </div>
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
