import { useState, useEffect } from 'react';
import { Sparkles, Star, Heart, Briefcase, Compass, RefreshCw, Copy, Check, Calendar, ChevronLeft, ArrowRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { tarotCards } from '../data/cards';
import { getLocalDateString } from '../utils/date';
import { TarotCard } from '../types';

interface SavedHoroscope {
  date: string;
  name: string;
  zodiacId: string;
  aspectId: string;
  cardId: string;
  orientation: 'upright' | 'reversed';
  horoscopeText: string;
}

const zodiacSigns = [
  { id: 'aries', name: 'Aries', viName: 'Bạch Dương', range: '21/3 - 19/4', icon: '♈', element: 'Lửa' },
  { id: 'taurus', name: 'Taurus', viName: 'Kim Ngưu', range: '20/4 - 20/5', icon: '♉', element: 'Đất' },
  { id: 'gemini', name: 'Gemini', viName: 'Song Tử', range: '21/5 - 20/6', icon: '♊', element: 'Khí' },
  { id: 'cancer', name: 'Cancer', viName: 'Cự Giải', range: '21/6 - 22/7', icon: '♋', element: 'Nước' },
  { id: 'leo', name: 'Leo', viName: 'Sư Tử', range: '23/7 - 22/8', icon: '♌', element: 'Lửa' },
  { id: 'virgo', name: 'Virgo', viName: 'Xử Nữ', range: '23/8 - 22/9', icon: '♍', element: 'Đất' },
  { id: 'libra', name: 'Libra', viName: 'Thiên Bình', range: '23/9 - 22/10', icon: '♎', element: 'Khí' },
  { id: 'scorpio', name: 'Scorpio', viName: 'Thiên Yết', range: '23/10 - 21/11', icon: '♏', element: 'Nước' },
  { id: 'sagittarius', name: 'Sagittarius', viName: 'Nhân Mã', range: '22/11 - 21/12', icon: '♐', element: 'Lửa' },
  { id: 'capricorn', name: 'Capricorn', viName: 'Ma Kết', range: '22/12 - 19/1', icon: '♑', element: 'Đất' },
  { id: 'aquarius', name: 'Aquarius', viName: 'Bảo Bình', range: '20/1 - 18/2', icon: '♒', element: 'Khí' },
  { id: 'pisces', name: 'Pisces', viName: 'Song Ngư', range: '19/2 - 20/3', icon: '♓', element: 'Nước' },
];

const aspects = [
  { id: 'general', name: 'Toàn cảnh ngày mới', desc: 'Năng lượng tổng quát vây quanh bạn.', icon: Star },
  { id: 'love', name: 'Duyên phận & Tình cảm', desc: 'Kết nối cảm xúc và các mối quan hệ.', icon: Heart },
  { id: 'career', name: 'Sự nghiệp & Tài lộc', desc: 'Học tập, công việc và cơ hội tài chính.', icon: Briefcase },
  { id: 'spirit', name: 'Nội tâm & Sức khỏe', desc: 'Trực giác, tâm hồn và thể chất.', icon: Compass },
];

const loadingTexts = [
  "Đang kết nối với dòng chảy vũ trụ...",
  "Đang dệt tinh cầu chiêm tinh năng lượng...",
  "Đang phân tích liên quan hành tinh chi phối ngày thiết kế...",
  "Tàng thư đang ghi lại mật ngữ của lá bài dành riêng cho bạn..."
];

/**
 * Generates the daily horoscope message offline from the drawn card,
 * the user's zodiac sign and the chosen aspect — no AI involved.
 */
const generateLocalHoroscope = (
  name: string,
  zodiac: { name: string; viName: string; icon: string; element: string },
  aspect: { id: string; name: string; desc: string },
  card: TarotCard,
  orientation: 'upright' | 'reversed'
): string => {
  const isRev = orientation === 'reversed';
  const meaning = isRev ? card.reversed : card.upright;
  const todayVi = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const elementNotes: Record<string, string> = {
    'Lửa': 'ngọn lửa nhiệt huyết trong bạn đang được các vì sao tiếp thêm sinh lực — hãy mạnh dạn hành động và dẫn dắt',
    'Đất': 'nguồn năng lượng vững chãi của Đất giúp bạn kiên định, thực tế và gặt hái thành quả hữu hình',
    'Khí': 'dòng khí linh hoạt khơi mở trí tuệ, giao tiếp và những ý tưởng mới mẻ đang chờ bạn nắm bắt',
    'Nước': 'dòng nước cảm xúc sâu lắng đưa trực giác của bạn lên cao — hãy lắng nghe tiếng nói từ nội tâm',
  };

  const aspectNotes: Record<string, string> = {
    general: 'Trong bức tranh toàn cảnh hôm nay, hãy để thông điệp của lá bài làm kim chỉ nam cho từng quyết định nhỏ.',
    love: 'Trong chuyện duyên phận và tình cảm, năng lượng lá bài nhắc bạn trân trọng sự kết nối chân thành và bày tỏ cảm xúc đúng lúc.',
    career: 'Trong công việc và tài lộc, lá bài soi rọi con đường tiến bước — hãy biến thông điệp của nó thành kế hoạch hành động cụ thể.',
    spirit: 'Với nội tâm và sức khỏe, lá bài mời gọi bạn chậm lại, chăm sóc thân - tâm và nuôi dưỡng nguồn năng lượng bên trong.',
  };

  return `## 🌅 Lời chào từ các Vì Sao

Chào **${name}**, người con của cung **${zodiac.viName} ${zodiac.icon} (${zodiac.name})** — hôm nay là *${todayVi}*, một ngày mới đang mở ra dưới sự dẫn lối của nguyên tố **${zodiac.element}**.

## 🃏 Sự kết giao giữa Cung Hoàng Đạo & Lá Bài

Lá bài đồng hành cùng bạn hôm nay là **${card.name} (${card.englishName})** — ở trạng thái **${isRev ? 'Nghịch Hành (Reversed)' : 'Hành Thuận (Upright)'}**.

> *${card.overview}*

Với cung ${zodiac.viName}, ${elementNotes[zodiac.element] || 'năng lượng bản mệnh của bạn đang hòa nhịp cùng lá bài'}. ${isRev
    ? 'Trạng thái nghịch hành nhắc bạn rằng nguồn năng lượng này đang hướng vào bên trong — đây là ngày để rà soát, điều chỉnh thay vì vội vã tiến bước.'
    : 'Trạng thái hành thuận cho thấy nguồn năng lượng này đang chảy thông suốt — hãy tự tin đón nhận và tận dụng nó.'}

## 🔮 Dự báo: ${aspect.name}

${aspectNotes[aspect.id] || aspectNotes.general}

**Thông điệp lá bài dành cho bạn:** ${meaning}

## ✨ Lời khuyên Ánh sáng (Celestial Guidance)

> *"${card.advice}"*

Hãy mang theo thông điệp này như một lá bùa hộ mệnh trong suốt ngày hôm nay. Chúc ${name} một ngày bình an và rực rỡ! 🌟`;
};

export default function DailyHoroscope() {
  const [selectedZodiac, setSelectedZodiac] = useState<string>('aries');
  const [selectedAspect, setSelectedAspect] = useState<string>('general');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const [horoscope, setHoroscope] = useState<SavedHoroscope | null>(null);
  const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
  const [orientation, setOrientation] = useState<'upright' | 'reversed'>('upright');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMess, setErrorMess] = useState<string | null>(null);

  // Today's date string YYYY-MM-DD (local timezone, resets at midnight)
  const getTodayString = () => {
    return getLocalDateString();
  };

  // Load saved horoscope if exists for today
  useEffect(() => {
    const saved = localStorage.getItem('aura_tarot_daily_horoscope');
    if (saved) {
      try {
        const parsed: SavedHoroscope = JSON.parse(saved);
        if (parsed.date === getTodayString()) {
          setHoroscope(parsed);
          const foundCard = tarotCards.find(c => c.id === parsed.cardId);
          if (foundCard) {
            setDrawnCard(foundCard);
            setOrientation(parsed.orientation);
            setIsFlipped(true);
          }
        }
      } catch (e) {
        console.error("Failed to load saved daily horoscope:", e);
      }
    }
  }, []);

  // Cycle loading texts
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingTextIndex(prev => (prev + 1) % loadingTexts.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleDrawCard = async () => {
    setLoading(true);
    setErrorMess(null);
    setIsFlipped(false);

    try {
      // Pick a random card
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const card = tarotCards[randomIndex];
      // Pick random orientation: 80% upright, 20% reversed for positive daily vibes by default
      const cardOrientation = Math.random() > 0.2 ? 'upright' : 'reversed';

      setDrawnCard(card);
      setOrientation(cardOrientation);

      const zodiacInfo = zodiacSigns.find(z => z.id === selectedZodiac);
      const aspectInfo = aspects.find(a => a.id === selectedAspect);

      if (!zodiacInfo || !aspectInfo) {
        throw new Error("Vui lòng chọn cung hoàng đạo và khía cạnh trước khi rút bài.");
      }

      // Simulate cosmic computation delay for immersive mystical feeling
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Generate the horoscope offline from the local template
      const horoscopeText = generateLocalHoroscope(
        "Kẻ Tìm Kiếm",
        zodiacInfo,
        aspectInfo,
        card,
        cardOrientation
      );

      const newHoroscope: SavedHoroscope = {
        date: getTodayString(),
        name: 'Kẻ Tìm Kiếm',
        zodiacId: selectedZodiac,
        aspectId: selectedAspect,
        cardId: card.id,
        orientation: cardOrientation,
        horoscopeText: horoscopeText,
      };

      setHoroscope(newHoroscope);
      localStorage.setItem('aura_tarot_daily_horoscope', JSON.stringify(newHoroscope));
      
      // Delay for card flip reveal
      setTimeout(() => {
        setIsFlipped(true);
        setLoading(false);
      }, 1000);

    } catch (err: any) {
      console.error(err);
      setErrorMess(err.message || "Sao Thủy nghịch hành! Không thể tải dự báo.");
      setLoading(false);
    }
  };

  const handleCopyText = () => {
    if (!horoscope) return;
    const shareText = `🔮 [AURA TAROT] DỰ BÁO NGÀY MỚI (${new Date().toLocaleDateString('vi-VN')})\n\n` +
      `Seeker: ${horoscope.name} | Cung: ${zodiacSigns.find(z => z.id === horoscope.zodiacId)?.viName}\n` +
      `Lá Bài Ngày: ${drawnCard?.name} (${drawnCard?.englishName}) - ${horoscope.orientation === 'upright' ? 'Hành Thuận' : 'Nghịch Hành'}\n\n` +
      `${horoscope.horoscopeText.replace(/[#*]/g, '')}`;

    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setHoroscope(null);
    setDrawnCard(null);
    setIsFlipped(false);
    localStorage.removeItem('aura_tarot_daily_horoscope');
  };

  const zInfo = zodiacSigns.find(z => z.id === (horoscope?.zodiacId || selectedZodiac));
  const aInfo = aspects.find(a => a.id === (horoscope?.aspectId || selectedAspect));

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6 relative z-10" id="daily-horoscope-section">
      
      {/* Container header with celestial design */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
          <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="font-mono text-[10px] uppercase text-brand-cyan tracking-wider font-semibold">
            Dự Báo Hàng Ngày • {new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-tight">
          Dự Báo Cung Hoàng Đạo
        </h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto font-sans leading-relaxed">
          Sự hòa quyện giữa thế giới linh ảnh lá bài Tarot và chu kỳ di chuyển các vì sao. Nhận thông điệp chỉ dẫn cá nhân hóa tức thì.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!horoscope && !loading ? (
          /* Step 1: Input controls */
          <motion.div
            key="input-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="glass-card rounded-2xl border border-brand-gold/15 p-6 md:p-8 bg-brand-purple/5 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient glows behind form */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="space-y-6">
              
              {/* Aspect selector */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-brand-gold font-bold tracking-wider">
                  Khía Cạnh Chiêm Nghiệm
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {aspects.map((asp) => {
                    const Icon = asp.icon;
                    return (
                      <button
                        key={asp.id}
                        onClick={() => setSelectedAspect(asp.id)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedAspect === asp.id
                            ? 'bg-brand-gold/10 border-brand-gold text-brand-gold'
                            : 'bg-brand-void/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <div className="truncate">
                          <p className="text-xs font-serif font-bold leading-none">{asp.name}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Box 2: Zodiac Sign select grid */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-brand-gold font-bold tracking-wider">
                  Chọn Cung Hoàng Đạo
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {zodiacSigns.map((z) => (
                    <button
                      key={z.id}
                      onClick={() => setSelectedZodiac(z.id)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer text-center relative overflow-hidden ${
                        selectedZodiac === z.id
                          ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-[0_0_12px_rgba(0,219,233,0.15)]'
                          : 'bg-brand-void/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span className="text-2xl mb-1 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">{z.icon}</span>
                      <span className="text-xs font-serif font-bold tracking-wide">{z.viName}</span>
                      <span className="text-[9px] font-mono text-gray-500 mt-0.5 leading-none">{z.range}</span>
                    </button>
                  ))}
                </div>
              </div>

              {errorMess && (
                <div className="p-3.5 bg-red-950/45 border border-red-500/20 text-red-300 rounded-xl text-xs font-sans">
                  ⚠️ {errorMess}
                </div>
              )}

              {/* Call to action launch drawing */}
              <div className="text-center pt-3">
                <button
                  onClick={handleDrawCard}
                  className="group relative px-10 py-4 bg-brand-cyan text-brand-void font-bold uppercase font-mono text-xs tracking-[0.2em] rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,219,233,0.25)] hover:shadow-[0_0_35px_rgba(0,219,233,0.45)] cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-void group-hover:animate-spin" />
                    Khởi Tạo Thông Điệp Ngày Mới
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </div>

            </div>
          </motion.div>
        ) : loading ? (
          /* Step 2: Mystic Shuffling & API generation loading state */
          <motion.div
            key="mystic-loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-card rounded-2xl border border-brand-cyan/20 p-12 text-center bg-brand-purple/10 flex flex-col items-center justify-center min-h-[420px]"
          >
            {/* Twinkling star layout background */}
            <div className="relative w-44 h-44 mb-8">
              <div className="absolute inset-0 rounded-full border border-brand-cyan/15 animate-ping opacity-35"></div>
              <div className="absolute inset-4 rounded-full border border-brand-gold/10 animate-spin opacity-50 duration-7000"></div>
              
              {/* Animated bouncing cards stacking back face */}
              <div className="absolute inset-10 w-24 h-36 border border-brand-cyan/40 bg-brand-void/80 rounded-xl p-1 shadow-[0_0_30px_rgba(0,219,233,0.15)] flex items-center justify-center transform -rotate-6 animate-pulse">
                <div className="w-full h-full border border-brand-cyan/10 rounded-lg flex items-center justify-center">
                  <span className="font-serif text-brand-cyan opacity-40 text-lg">AURA</span>
                </div>
              </div>
              <div className="absolute inset-10 w-24 h-36 border border-brand-gold/40 bg-brand-void/90 rounded-xl p-1 shadow-[0_0_30px_rgba(197,160,89,0.15)] flex items-center justify-center transform rotate-6 hover:-translate-y-2 transition-all duration-500">
                <div className="w-full h-full border border-brand-gold/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-brand-gold/40 animate-spin" />
                </div>
              </div>
            </div>

            <motion.p
              key={loadingTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-serif text-lg text-brand-cyan md:text-xl font-bold tracking-wide"
            >
              {loadingTexts[loadingTextIndex]}
            </motion.p>
            <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mt-4">
              Tàng Thư Aura • Dòng Sông Năng Lượng Vũ Trụ
            </p>
          </motion.div>
        ) : (
          /* Step 3: Reveal results with Drawn Card and dynamic Gemini-written Horoscope markdown output */
          <motion.div
            key="horoscope-result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            
            {/* Part A: Revealed Card layout (Col 4) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-56 h-92 md:w-64 md:h-[400px] relative perspective-1000 mb-6"
              >
                {/* Visual card item card frame */}
                <div className="w-full h-full rounded-2xl border border-brand-gold/30 bg-brand-void/95 p-1 flex flex-col overflow-hidden relative shadow-[0_0_35px_rgba(197,160,89,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-brand-void/10 pointer-events-none z-0"></div>
                  
                  {/* Card Main Image */}
                  <div className="relative flex-1 rounded-xl overflow-hidden border border-brand-gold/10">
                    <img
                      src={drawnCard?.image}
                      alt={drawnCard?.name}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        orientation === 'reversed' ? 'rotate-180' : ''
                      }`}
                    />
                    
                    {/* Zodiac / Astrology emblem badge over image */}
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between gap-1.5 z-10">
                      <span className="px-2 py-0.5 rounded backdrop-blur-md bg-brand-void/75 text-[9px] font-mono text-brand-gold border border-brand-gold/20 flex items-center gap-1 uppercase">
                        <Star className="w-2.5 h-2.5" />
                        Card of the Day
                      </span>

                      <span className="px-2 py-0.5 rounded backdrop-blur-md bg-brand-cyan/75 text-[9px] font-mono text-brand-cyan border border-brand-cyan/20 flex items-center uppercase">
                        {orientation === 'upright' ? 'Hành Thuận' : 'Nghịch Hành'}
                      </span>
                    </div>
                  </div>

                  {/* Card Title block */}
                  <div className="p-3 text-center bg-brand-void relative z-10 border-t border-brand-gold/10">
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">{drawnCard?.englishName}</span>
                    <h4 className="font-serif text-base text-brand-gold font-bold leading-tight mt-0.5">
                      {drawnCard?.name}
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* Little stats summary beneath card block */}
              <div className="glass-card w-full py-3.5 px-4 rounded-xl border border-white/5 text-center bg-brand-void/40">
                <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Tinh chiếu tương khắc</p>
                <div className="flex justify-center items-center gap-1.5 mt-1">
                  <span className="text-xl">{zInfo?.icon}</span>
                  <span className="font-serif font-bold text-sm text-gray-300">{zInfo?.viName} ({zInfo?.name})</span>
                  <span className="w-1.5 h-1.5 bg-brand-cyan/60 rounded-full mx-1"></span>
                  <span className="font-mono text-xs text-brand-cyan font-bold">{zInfo?.element}</span>
                </div>
              </div>
            </div>

            {/* Part B: Detailed Dynamic Written Output from AI (Col 8) */}
            <div className="lg:col-span-8 flex flex-col justify-between glass-card rounded-2xl border border-brand-gold/15 p-6 md:p-8 bg-brand-void/90 relative shadow-2xl">
              
              {/* Backlight layout style */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

              <div className="space-y-4">
                {/* Result header navigation bar details */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                      {aInfo ? <aInfo.icon className="w-5 h-5" /> : <Star className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Tuyển tập tiên tri</p>
                      <h4 className="font-serif text-lg font-bold text-white leading-none mt-1">
                        Dự báo: {aInfo?.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyText}
                      className="p-2 py-1.5 rounded-lg bg-brand-purple/10 border border-brand-gold/15 text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-gold/10 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                      title="Copy thông báo Horoscope"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span>Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Horoscope Text Wrapper scrolling container */}
                <div className="relative text-gray-200 font-sans text-sm md:text-base leading-relaxed max-h-[460px] overflow-y-auto pr-2 space-y-4 scrollbar-thin">
                  <div className="markdown-body prose prose-invert max-w-none">
                    <ReactMarkdown>{horoscope.horoscopeText}</ReactMarkdown>
                  </div>
                </div>

              </div>

              {/* Reset Draw trigger bottom bar */}
              <div className="border-t border-white/5 pt-6 mt-6 flex justify-between items-center bg-brand-void/30 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 rounded-b-2xl">
                <span className="text-[10px] font-mono text-gray-500 tracking-wider flex items-center gap-1 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                  Hào quang tinh tú dệt ban mai hôm nay
                </span>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-brand-cyan/80 hover:text-brand-cyan font-mono tracking-widest uppercase transition-all outline-none cursor-pointer hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Rút lá Tarot mới cho hôm nay
                </button>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
