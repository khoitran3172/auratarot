import { useState, useRef, useEffect } from 'react';
import { tarotCards } from '../data/cards';
import { getLocalDateString } from '../utils/date';
import { TarotCard, ChatMessage, ReadingHistory } from '../types';
import { Sparkles, Brain, ArrowRight, RefreshCw, Layers, Check, Send, AlertCircle, HelpCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

interface ReadingRoomProps {
  onSaveReading: (reading: ReadingHistory) => void;
}

const CARD_BACK_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDEksTacBFqLO079ouUC5XRH2G8JfCNH4ZhLCcrJL6joiyeHhvoPZg2vJ0beTv6Tnp1hQZbdd94T8FLa2PJaJxl_V4Yx0FSbi1xat6Ku2XUdMEhPU5mr-j4xk81Sz2il94koBoIK98fYrBDe9E3Rjm7Pykln3OiHSFPquKEhwCd1P1L6bcQifSupbL3zJrB8FVWZ7JP9GKz7lxQwx2sfX1FJIeKcfyhD9rySUFG4CvZKIp9nZ5o38TE05Y1Z8BaC2jon60oF9uxLvk";

// Number of face-down cards shown in the pick fan
const FAN_SIZE = 52;

const aspects = [
  { id: 'Tình yêu', label: 'Tình yêu' },
  { id: 'Sự nghiệp', label: 'Sự nghiệp' },
  { id: 'Bản thân', label: 'Bản thân' },
  { id: 'Tài chính', label: 'Tài chính' },
  { id: 'Sức khỏe', label: 'Sức khỏe' },
];

/**
 * Generates an extremely detailed and mystically profound local Tarot reading description
 */
const generateLocalTarotReading = (
  question: string,
  aspect: string,
  cards: TarotCard[],
  orientations: ('upright' | 'reversed')[],
  isResonant: boolean
): string => {
  const count = cards.length;
  let spreadTypeName = "Trải bài 3 lá (Quá khứ - Hiện tại - Tương lai)";
  if (count === 1) {
    spreadTypeName = "Trải bài 1 lá (Lời khuyên tức thời)";
  } else if (count === 10) {
    spreadTypeName = "Trải bài 10 lá (Celtic Cross)";
  }

  const getPositionName = (idx: number): string => {
    if (count === 1) {
      return "Năng lượng chủ đạo & Lời khuyên Vũ trụ";
    }
    if (count === 3) {
      return idx === 0 ? "Quá khứ ảnh hưởng" : idx === 1 ? "Hiện tại thực tế" : "Tương lai dịch chuyển";
    }
    const positions = [
      "Hiện tại thực tại (The Present)",
      "Thử thách / Trở ngại chắn lối (The Obstacle)",
      "Ý thức / Mục tiêu hướng tới (The Conscious)",
      "Tiềm thức / Nền tảng gốc rễ (The Unconscious)",
      "Quá khứ đã qua ảnh hưởng (The Past)",
      "Tương lai gần đón đợi (The Near Future)",
      "Thái độ / Trọng tâm bản thân (Your Attitude)",
      "Môi trường / Tác động ngoại cảnh (The Environment)",
      "Hy vọng & Lo lắng ẩn thầm (Hopes & Fears)",
      "Kết quả tối hậu sau cùng (The Outcome)"
    ];
    return positions[idx] || `Vị trí thứ ${idx + 1}`;
  };

  let opening = `## 🌌 THÔNG ĐIỆP TỪ TINH CẦU AURA

Chào mừng người tìm kiếm đến với không gian linh thiêng. Ánh sáng từ các tinh vân đang chuyển dịch năng lượng xung quanh băn khoăn của bạn về khía cạnh **${aspect}**.

`;

  if (isResonant) {
    opening += `✨ **Cộng Hưởng Đồng Điệu (Soul Resonance Active):** *Vũ Trụ nhận diện linh lực tâm thức tương khớp từ phiên trải trước đó. Năng lượng Tarot tiếp tục liên kết nhất quán, cho thấy một dòng chảy nhân duyên vô cùng bền vững và đáng chú ý đang hướng vào cuộc đời bạn.*\n\n`;
  }

  opening += `Dưới sơ đồ **${spreadTypeName}**, các vì sao lật mở thông điện số phận của bạn như sau:\n\n---\n\n`;

  let analysis = `### 🔮 CHIÊM NGHIỆM VỊ TRÍ TRẢI BÀI\n\n`;
  cards.forEach((c, idx) => {
    const position = getPositionName(idx);
    const orientation = orientations[idx] || 'upright';
    const isRev = orientation === 'reversed';
    const definition = isRev ? c.reversed : c.upright;
    analysis += `#### 📍 Vị trí: **${position}**\n`;
    analysis += `- **Lá bài:** **${c.name} (${c.englishName})** — *${isRev ? 'Chiều Ngược (Reversed)' : 'Chiều Xuôi (Upright)'}*\n`;
    analysis += `- **Chiêm tinh / Nguyên tố:** \`${c.astrology}\`\n`;
    analysis += `- **Nguồn năng lượng chủ đạo:** *${c.overview}*\n`;
    analysis += `- **Luận giải chi tiết:** ${definition}\n`;
    analysis += `- **Lời nhắn gửi từ tinh tú:** *${c.advice}*\n\n`;
  });

  analysis += `---\n\n`;

  let synthesis = `### 🌀 MỐI TƠ DUYÊN VÀ DỊCH CHUYỂN NĂNG LƯỢNG\n\n`;
  const majorCount = cards.filter(c => c.group === 'Major Arcana').length;
  const wandsCount = cards.filter(c => c.group === 'Suit of Wands').length;
  const cupsCount = cards.filter(c => c.group === 'Suit of Cups').length;
  const swordsCount = cards.filter(c => c.group === 'Suit of Swords').length;
  const pentaclesCount = cards.filter(c => c.group === 'Suit of Pentacles').length;

  synthesis += `Khi nhìn tổng thể bản đồ trải bài này, sự phân bố năng lượng biểu đạt các khía cạnh:\n\n`;
  if (majorCount > 0) {
    synthesis += `- **Lá bài Đại Ẩn (Major Arcana) [${majorCount}/${count} lá]:** `;
    if (majorCount >= count / 2) {
      synthesis += `Sự áp đảo của các lá Đại Ẩn thể hiện đây là một chu kỳ thay đổi mang tính định mệnh lâu dài, những biến động lớn trong tâm thức mà các yếu tố ngoại cảnh bình thường khó lòng làm lệch hướng. Bạn buộc phải trải qua hành trình này để tiến hóa tinh thần.\n`;
    } else {
      synthesis += `Sự xuất hiện của các lá bài Đại Ẩn cho thấy có những yếu tố nguyên lý vũ trụ lớn đang tác động trực tiếp vào cuộc sống của bạn, vạch ra những bài học trường tồn cần ghi nhớ sâu sắc.\n`;
    }
  }

  const suitExplanations: string[] = [];
  if (wandsCount > 0) {
    suitExplanations.push(`- **Hỏa năng - Wands (${wandsCount} lá):** Thúc đẩy bởi ngọn lửa nhiệt huyết, đam mê dồi dào, sự tiên phong đột phá và hành động mãnh liệt. Nó khuyên bạn hãy dũng cảm chủ động.`);
  }
  if (cupsCount > 0) {
    suitExplanations.push(`- **Thủy năng - Cups (${cupsCount} lá):** Phản chiếu thế giới nội tâm rực rỡ cảm xúc, kết nối nhân duyên giao hòa, tình cảm sâu đậm và tiếng gọi trực giác thiêng liêng.`);
  }
  if (swordsCount > 0) {
    suitExplanations.push(`- **Phong năng - Swords (${swordsCount} lá):** Biểu trưng của sức mạnh trí tuệ, lý tính sắc bén, sự phán đoán khách quan nhưng luôn đi kèm cảnh báo về mâu thuẫn nội tâm, nỗi lo âu hay quyết định dứt khoát.`);
  }
  if (pentaclesCount > 0) {
    suitExplanations.push(`- **Địa năng - Pentacles (${pentaclesCount} lá):** Gắn liền với sự vững vàng ổn định của vật chất, tiền bạc, năng lực thực tế kiên định và những thành tựu hữu hình theo thời gian.`);
  }

  synthesis += suitExplanations.join("\n") + "\n\n";
  synthesis += `**Tiến trình dịch chuyển:** Các dòng năng lượng đang nỗ lực tự thiết lập trạng thái cân bằng. Hãy chú ý rằng những lá bài ngược (Reversed) chỉ ra những nút thắt năng lượng bị trì trệ từ bên trong tâm lý của bạn chưa được giải phóng, trong khi các lá bài xuôi (Upright) đang chiếu rọi cơ hội và con đường thông thoáng để hành động ngay lập tức.\n\n---\n\n`;

  let adviceSection = `### 🌌 LỜI NHẮN CELESTIAL & HƯỚNG ĐI SÁNG SUỐT\n\n`;
  const randomAdvice = cards[Math.floor(Math.random() * cards.length)]?.advice;
  adviceSection += `Trọng tâm thông điệp mà các tinh vân Aura Tarot muốn gửi gắm đến bạn về khía cạnh **${aspect}** lúc này là:\n\n`;
  adviceSection += `> *" ${randomAdvice} "*\n\n`;
  adviceSection += `Hành động cụ thể dành cho bạn:\n`;
  adviceSection += `1. **Quay về nội tâm:** Lắng nghe kỹ tiếng vang trực giác để hóa giải các trăn trở và nhìn thấu khó khăn.\n`;
  adviceSection += `2. **Tận dụng cơ hội:** Biến những thông tin lý trí thành kế hoạch thực tế, kiên định dấn bước.\n`;
  adviceSection += `3. **Tin tưởng dòng chảy:** Hãy nhớ rằng mỉm cười đón nhận sự biến đổi của số phận chính là cách làm chủ vận mệnh trọn vẹn nhất.\n\n`;
  adviceSection += `*Chúc tâm trí của người tìm kiếm luôn bình yên và sáng suốt trên mọi dặm đường của cuộc sống.* 🌟`;

  return opening + analysis + synthesis + adviceSection;
};

/**
 * Generates highly interactive, mystically-accurate and context-aware responses offline
 */
const generateLocalFollowUpResponse = (
  userInput: string,
  cards: TarotCard[],
  orientations: ('upright' | 'reversed')[],
  aspect: string
): string => {
  const query = userInput.toLowerCase();
  
  let referencedCard: TarotCard | null = null;
  let cardIndex = -1;
  
  cards.forEach((c, idx) => {
    if (query.includes(c.name.toLowerCase()) || 
        query.includes(c.englishName.toLowerCase()) || 
        query.includes(`lá ${idx + 1}`) ||
        query.includes(`lá thứ ${idx + 1}`) ||
        (idx === 0 && query.includes("quá khứ")) ||
        (idx === 1 && query.includes("hiện tại") && cards.length === 3) ||
        (idx === 2 && query.includes("tương lai") && cards.length === 3)
    ) {
      referencedCard = c;
      cardIndex = idx;
    }
  });

  if (referencedCard) {
    const card: TarotCard = referencedCard;
    const isRev = orientations[cardIndex] === 'reversed';
    const orientationText = isRev ? 'Chiều Ngược (Reversed)' : 'Chiều Xuôi (Upright)';
    const meaning = isRev ? card.reversed : card.upright;
    
    return `### 🔮 Luận giải sâu về lá bài **${card.name} (${card.englishName})** tại trải bài của bạn

Về thắc mắc của bạn đối với lá bài này, hãy lưu ý các chi tiết thâm sâu sau đây:

- **Trạng thái:** Lá bài đang ở **${orientationText}**, biểu thị năng lượng ${isRev ? 'đang bị trì hoãn, mưu cầu dồn nén chưa thông, hoặc cần sự cẩn trọng rà soát tâm lý từ bên trong bản thân.' : 'đang chiếu sáng rực rỡ, thông đạt và sẵn sàng biểu hiện tích cực ra bên ngoài.'}
- **Chi tiết Luận giải vị trí:** ${meaning}
- **Liên hệ Khía cạnh ${aspect}:** Điểm tựa quan trọng ở đây là bạn cần thực chứng hành động thực tế dựa trên thông điệp cốt lõi của lá bài này. Hãy vững lòng!
- **Lời khuyên sâu sắc:** *"${card.advice}"*

Bạn có cảm kích với thông điệp này của tinh tú không? Hãy hỏi thêm tôi bất kỳ chi tiết nào khác nhé!`;
  }

  if (query.includes("lời khuyên") || query.includes("khuyên") || query.includes("làm gì") || query.includes("hành động") || query.includes("giúp tôi")) {
    const adviceList = cards.map((c) => `- **Lá ${c.name}:** *"${c.advice}"*`).join("\n");
    return `### 🌌 LỜI KHUYÊN PHƯƠNG HƯỚNG TỪ CÁC VÌ SAO

Đối với mong mỏi tìm kiếm giải pháp và hướng đi cụ thể cho khía cạnh **${aspect}** của bạn lúc này, các vì tinh tú đúc kết những lời khuyên then chốt sau:

${adviceList}

**Lưu ý hành động khuyến nghị:**
1. Hãy loại bỏ những suy nghĩ tiêu cực hoặc lo âu vô cớ về sự tương lai.
2. Thiết lập cấu trúc kế hoạch rõ ràng để chuyển dịch năng lượng tích cực của lá bài.
3. Đón nhận thử thách với một cơ chế tâm thức linh hoạt và cởi mở.`;
  }

  if (query.includes("ngược") || query.includes("reversal")) {
    const revCards = cards.filter((_, i) => orientations[i] === 'reversed');
    if (revCards.length > 0) {
      const names = revCards.map(c => `**${c.name}**`).join(", ");
      return `### 🌀 Ý NGHĨA KHI CÓ LÁ BÀI CHIỀU NGƯỢC (REVERSED)

Trong phiên trải bài vừa xóc, bạn rút được lá chiều ngược là: ${names}.

Theo thuật Tarot học huyền học cổ điển, lá bài ngược **không** thể hiện hung hiểm hay tai ương đáng sợ. Thay vào đó, nó đại diện cho:
1. **Sức mạnh nội tâm dồn nén:** Năng lượng vốn có của lá bài đang bị đóng chặt bên trong và chưa tìm được lối phóng xuất thông thường.
2. **Yêu cầu nội soi bản thân:** Vũ Trụ muốn bạn tĩnh tâm rà soát tư duy trước khi vội vàng hành động hướng ngoại.
3. **Cơ hội hóa giải:** Khi đã nhận diện điểm nghẽn ấy, bạn sẽ khai thông được nguồn sức mạnh to lớn vượt ngoài mong đợi.`;
    } else {
      return `### 🌀 CHIỀU NGƯỢC TAROT CHUYÊN SÂU

Trong lượt trải bài này, tất cả các lá bài của bạn đều đang ở **Chiều Xuôi (Upright)**. Điều này đại diện cho sự thuận dòng năng lượng, không có chướng ngại lớn hay bóng tối vô thức ngăn trở. Con đường trước mắt đã rạch ròi, bạn hãy vững lòng bước đi!`;
    }
  }

  const cardNamesText = cards.map(c => `**${c.name}**`).join(", ");
  return `### 🌌 TIẾNG VỌNG CHIÊM NGHIỆM ĐỊNH MỆNH

Ghi nhận băn khoăn thấu đáo của bạn: *"${userInput}"*.

Liên kết các lá bài đã rút (${cardNamesText}), có thể thấy năng lượng của khía cạnh **${aspect}** đang vây quanh hành trình của bạn với nhiều màu sắc linh hoạt.

Để giải mã thấu đáo thắc mắc này của bạn:
- Hãy đặc biệt lưu tâm đến lá bài mang năng lượng rực rỡ nhất trong trải bài, đó chính là nguồn lực cốt lõi giúp bạn tự tin bứt phá.
- Hãy hít một hơi thật sâu và tạm thả lỏng tư duy lo âu bề mặt. Mọi chuyển động của vũ trụ luôn xoay quanh bài học tiến hóa của riêng linh hồn bạn.

Bạn có muốn tôi luận giải chi tiết hơn về riêng một lá bài cụ thể nào trong lượt trải này không? Hãy nhập chính xác tên lá bài đó nhé!`;
};

export default function ReadingRoom({ onSaveReading }: ReadingRoomProps) {
  // Reading States: setup, shuffle, draw, reading
  const [step, setStep] = useState<'setup' | 'shuffle' | 'draw' | 'reading'>('setup');
  const [aspect, setAspect] = useState('Tình yêu');
  const [question, setQuestion] = useState('');
  const [spreadType, setSpreadType] = useState<'1-card' | '3-cards' | '10-cards'>('3-cards');
  
  // Card Selection & Draw States
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [orientations, setOrientations] = useState<('upright' | 'reversed')[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>([]);
  // Fan indices the user has picked, in pick order — slot i shows the card picked i-th
  const [pickedFan, setPickedFan] = useState<number[]>([]);
  const [shufflingCount, setShufflingCount] = useState(0);
  const [remainingSlots, setRemainingSlots] = useState<number>(3);
  const [isResonantSession, setIsResonantSession] = useState(false);
  
  // API & Conversation states
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isFollowUpLoading, setIsFollowUpLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Helper to load remaining slots
  const updateSlots = () => {
    const today = getLocalDateString();
    const stored = localStorage.getItem('aura_tarot_daily_limit');
    if (!stored) {
      setRemainingSlots(3);
      return;
    }
    try {
      const parsed = JSON.parse(stored);
      if (parsed.date !== today) {
        setRemainingSlots(3);
      } else {
        setRemainingSlots(Math.max(0, 3 - parsed.count));
      }
    } catch (e) {
      setRemainingSlots(3);
    }
  };

  // Consume daily limit slot
  const consumeSlot = () => {
    const today = getLocalDateString();
    const stored = localStorage.getItem('aura_tarot_daily_limit');
    let count = 0;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.date === today) {
          count = parsed.count;
        }
      } catch (e) {}
    }
    localStorage.setItem('aura_tarot_daily_limit', JSON.stringify({ date: today, count: count + 1 }));
    updateSlots();
  };

  useEffect(() => {
    updateSlots();
  }, [step]);
  
  // Auto-scroll chat history
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isFollowUpLoading]);

  // Handle Shuffling Effect loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'shuffle') {
      interval = setInterval(() => {
        setShufflingCount((c) => c + 1);
      }, 150);
    }
    return () => clearInterval(interval);
  }, [step]);

  // Aspect helper
  const selectAspect = (asp: string) => {
    setAspect(asp);
  };

  // Launch Shuffling Phase
  const handleShuffleStart = (e: React.FormEvent) => {
    e.preventDefault();
    // Automate a premium query based on the selected aspect
    const automatedQuestion = `Mở ra một trạng thái dự đoán tổng quan sâu rộng nhất, chỉ dẫn sáng suốt và khai thông tinh thần về khía cạnh ${aspect || 'Cuộc sống'}`;
    setQuestion(automatedQuestion);
    setErrorText('');
    setStep('shuffle');
  };

  // End Shuffling and spread face-down cards with smart resonance synchronicity.
  // The resonance anchor only lives for ONE day: the first draw of the day is fully
  // random and becomes the anchor; the remaining draws of that same day resonate
  // with it (similar meaning cards). At midnight local time everything resets.
  const stopShufflingAndSpread = () => {
    const cardCount = spreadType === '1-card' ? 1 : spreadType === '3-cards' ? 3 : 10;
    const today = getLocalDateString();

    // Check if there is a valid resonance anchor for today in localStorage
    const savedAnchor = localStorage.getItem('aura_tarot_resonance_anchor');
    let anchorCardIds: string[] = [];
    if (savedAnchor) {
      try {
        const anchorData = JSON.parse(savedAnchor);
        if (anchorData.date === today && Array.isArray(anchorData.cards)) {
          anchorCardIds = anchorData.cards;
        }
      } catch (e) {
        console.error("Error reading resonance anchor:", e);
      }
    }

    let selected: TarotCard[] = [];

    if (anchorCardIds.length > 0) {
      // Draws 2-3 of the day: resonate with the first draw of the day
      setIsResonantSession(true);

      const anchorCards = tarotCards.filter(c => anchorCardIds.includes(c.id));
      const selectedIds = new Set<string>();

      for (let i = 0; i < cardCount; i++) {
        let nextCard: TarotCard | null = null;

        // 50% chance to draw an exact card from the anchor if any are left
        if (Math.random() < 0.5 && anchorCards.length > 0) {
          const availableAnchor = anchorCards.filter(c => !selectedIds.has(c.id));
          if (availableAnchor.length > 0) {
            nextCard = availableAnchor[Math.floor(Math.random() * availableAnchor.length)];
          }
        }

        // 80% chance to draw a card of the same group/suit as a corresponding anchor card
        if (!nextCard && Math.random() < 0.8) {
          const anchorCellId = anchorCardIds[i % anchorCardIds.length];
          const anchorCellCard = tarotCards.find(c => c.id === anchorCellId);
          if (anchorCellCard) {
            const sameGroupCards = tarotCards.filter(c => c.group === anchorCellCard.group && !selectedIds.has(c.id));
            if (sameGroupCards.length > 0) {
              nextCard = sameGroupCards[Math.floor(Math.random() * sameGroupCards.length)];
            }
          }
        }

        // Fallback: draw standard random
        if (!nextCard) {
          const available = tarotCards.filter(c => !selectedIds.has(c.id));
          if (available.length > 0) {
            nextCard = available[Math.floor(Math.random() * available.length)];
          }
        }

        if (nextCard) {
          selected.push(nextCard);
          selectedIds.add(nextCard.id);
        }
      }
    } else {
      // First draw of the day: fully random, then becomes today's anchor
      setIsResonantSession(false);
      const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
      selected = shuffled.slice(0, cardCount);

      localStorage.setItem('aura_tarot_resonance_anchor', JSON.stringify({
        cards: selected.map(c => c.id),
        date: today,
      }));
    }

    setDrawnCards(selected);
    const generatedOrientations = new Array(cardCount).fill(null).map(() => Math.random() > 0.25 ? 'upright' : 'reversed');
    setOrientations(generatedOrientations);
    setFlipped(new Array(cardCount).fill(false));
    setPickedFan([]);
    setStep('draw');
  };

  // Pick a face-down card from the fan — it flies into the next empty slot
  const handleFanPick = (fanIndex: number) => {
    if (step !== 'draw') return;
    if (pickedFan.includes(fanIndex)) return;
    if (pickedFan.length >= drawnCards.length) return;
    setPickedFan(prev => [...prev, fanIndex]);
  };

  // Once every slot is filled, flip the cards one by one
  useEffect(() => {
    if (step !== 'draw' || drawnCards.length === 0) return;
    if (pickedFan.length !== drawnCards.length) return;
    const timers = drawnCards.map((_, i) =>
      setTimeout(() => {
        setFlipped(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 700 + i * 400)
    );
    return () => timers.forEach(clearTimeout);
  }, [pickedFan, step, drawnCards.length]);

  const allCardsFlipped = flipped.length > 0 && flipped.every(f => f === true);

  // Position Labels mapping
  const getPositionLabel = (idx: number): string => {
    if (spreadType === '1-card') {
      return 'Năng lượng chủ đạo';
    }
    if (spreadType === '3-cards') {
      return idx === 0 ? 'Quá khứ' : idx === 1 ? 'Hiện tại' : 'Tương lai';
    }
    const celticLabels = [
      '1. Hiện tại bản chất',
      '2. Thử thách chướng ngại',
      '3. Điểm tựa ý thức',
      '4. Căn nguyên tiềm thức',
      '5. Quá khứ ảnh hưởng',
      '6. Tương lai gần',
      '7. Tâm thế bản thân',
      '8. Ngoại cảnh môi trường',
      '9. Hy vọng & Lo sợ',
      '10. Kết quả tối hậu'
    ];
    return celticLabels[idx] || `Vị trí thứ ${idx + 1}`;
  };

  // Invoke local offline high-vibe tarot interpreter
  const requestAiTarotReading = async () => {
    setIsAiLoading(true);
    setErrorText('');
    setStep('reading');

    // Create placeholder empty chat list
    setChatHistory([]);

    try {
      // Simulate cosmic computation delay for immersive mystical feeling (1.2 seconds)
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Generate standard high-quality offline Markdown interpretation
      const readingText = generateLocalTarotReading(question, aspect, drawnCards, orientations, isResonantSession);

      const newAiMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: readingText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatHistory([newAiMessage]);

      // Reduce daily connections count
      consumeSlot();

      // Save to Journal database auto-save in localStorage
      const newRecord: ReadingHistory = {
        id: `reading_${Date.now()}`,
        date: new Date().toLocaleDateString('vi-VN'),
        isoDate: getLocalDateString(),
        aspect: aspect,
        question: question,
        drawnCards: drawnCards.map(c => c.id),
        aiResponse: readingText,
        userNotes: '',
      };
      
      onSaveReading(newRecord);

    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || 'Lỗi bất định khi nhận thông điệp từ vũ trụ.');
    } finally {
      setIsAiLoading(false);
    }
  };

  // Handle subsequent offline local chat questions inside the Reading Room
  const handleSendFollowUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isFollowUpLoading || isAiLoading) return;

    const userMessageText = userInput;
    setUserInput('');

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: userMessageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);
    setIsFollowUpLoading(true);

    try {
      // Mystical computing timeout (850ms)
      await new Promise(resolve => setTimeout(resolve, 850));

      // Synthesize custom offline response based on user input keywords
      const aiReplyText = generateLocalFollowUpResponse(userMessageText, drawnCards, orientations, aspect);

      const aiMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatHistory(prev => [...prev, aiMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: `### Thất bại khi đồng bộ với Vũ Trụ \n*Lỗi kết nối sao trời.*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsFollowUpLoading(false);
    }
  };

  // Reset to draw another tarot quẻ
  const handleResetSession = () => {
    setStep('setup');
    setQuestion('');
    setDrawnCards([]);
    setOrientations([]);
    setFlipped([]);
    setPickedFan([]);
    setChatHistory([]);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 flex flex-col min-h-[calc(100vh-10rem)] justify-center" id="reading-room">
      <AnimatePresence mode="wait">
        
        {/* Step 1: Setup Question and Aspect */}
        {step === 'setup' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="w-full max-w-2xl mx-auto space-y-8"
          >
            <div className="text-center space-y-3">
              <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
                Phòng Giải Bài Tâm Linh
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-gold font-bold">
                The Reading Room
              </h2>
              <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-md mx-auto">
                Trước khi kết nối tâm thức với ngôi đền Aura Tarot Reader, hãy tập trung tinh thần, hít một hơi thật sâu.
              </p>
            </div>

            <form onSubmit={handleShuffleStart} className="glass-card p-6 md:p-8 rounded-3xl border border-brand-gold/15 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Aspect selection */}
              <div className="space-y-3">
                <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold block">
                  1. Chọn khía cạnh sự việc chiêm bói
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {aspects.map((asp) => (
                    <button
                      key={asp.id}
                      type="button"
                      onClick={() => selectAspect(asp.id)}
                      className={`px-5 py-2.5 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 ${
                        aspect === asp.id
                          ? 'border-brand-gold text-brand-gold bg-brand-gold/10 font-bold shadow-[0_0_15px_rgba(233,195,73,0.15)] scale-105'
                          : 'border-outline/20 text-on-surface-variant hover:border-brand-cyan hover:text-brand-cyan'
                      }`}
                    >
                      {asp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spread Type selection */}
              <div className="space-y-3">
                <label className="font-mono text-xs text-brand-gold tracking-wider uppercase font-semibold block">
                  2. Chọn sơ đồ trải bài từ Thượng cổ
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Option 1: 1-card */}
                  <button
                    type="button"
                    onClick={() => setSpreadType('1-card')}
                    className={`text-left cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-36 relative ${
                      spreadType === '1-card'
                        ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(233,195,73,0.1)]'
                        : 'border-outline/20 hover:border-brand-cyan hover:bg-white/5 bg-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full mb-1">
                      <span className="font-serif text-base font-bold text-white">Trải bài 1 Lá</span>
                      <span className="font-mono text-[9px] bg-brand-gold/10 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/15 shrink-0">1 Lá</span>
                    </div>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      Thông điệp tức thời &amp; định hướng tương lai nhanh gọn từ Vũ Trụ. Phù hợp cho câu trả lời cô đọng, dứt khoát.
                    </p>
                  </button>

                  {/* Option 2: 3-cards */}
                  <button
                    type="button"
                    onClick={() => setSpreadType('3-cards')}
                    className={`text-left cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-36 relative ${
                      spreadType === '3-cards'
                        ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(233,195,73,0.1)]'
                        : 'border-outline/20 hover:border-brand-cyan hover:bg-white/5 bg-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full mb-1">
                      <span className="font-serif text-base font-bold text-white">Trải bài 3 Lá</span>
                      <span className="font-mono text-[9px] bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/15 shrink-0">3 Lá</span>
                    </div>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      Quá khứ - Hiện tại - Tương lai. Ba dòng thời gian kinh điển giúp kết nối sự dịch chuyển nhân duyên.
                    </p>
                  </button>

                  {/* Option 3: 10-cards */}
                  <button
                    type="button"
                    onClick={() => setSpreadType('10-cards')}
                    className={`text-left cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-36 relative ${
                      spreadType === '10-cards'
                        ? 'border-brand-gold bg-brand-gold/5 shadow-[0_0_15px_rgba(233,195,73,0.1)]'
                        : 'border-outline/20 hover:border-brand-cyan hover:bg-white/5 bg-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full mb-1">
                      <span className="font-serif text-base font-bold text-white">Celtic Cross</span>
                      <span className="font-mono text-[9px] bg-purple-500/15 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/15 shrink-0">10 Lá</span>
                    </div>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      Thập tự Celtic - Sơ đồ uy quyền giải đoán 10 phương diện cuộc đời: tâm thế, thử thách, ý thức, lo sợ và kết quả tối hậu.
                    </p>
                  </button>
                </div>
              </div>

              {errorText && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-sans flex items-center gap-2">
                  <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                  <span>{errorText}</span>
                </div>
              )}

              {/* Alchemy Limit Control Check */}
              {remainingSlots === 0 ? (
                <div className="p-6 rounded-2xl border border-brand-gold/30 bg-brand-purple/10 space-y-3 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-gold"></div>
                  <Sparkles className="w-6 h-6 text-brand-gold mx-auto animate-pulse" />
                  <h3 className="font-serif text-lg text-brand-gold font-bold">Giới Hạn Năng Lượng Hôm Nay Đã Đạt</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-md mx-auto">
                    Mỗi ngày linh khí sao trời chỉ cho phép kết nối tối đa **3 lượt giải bài** để tránh nhiễu loạn tâm thức. Bạn đã sử dụng hết lượt hôm nay (không cộng dồn).
                  </p>
                  <p className="font-mono text-[10px] text-brand-cyan/80">
                    Hãy quay lại vào ngày mai khi các vì sao thiết lập lại quỹ đạo mới thú vị hơn!
                  </p>
                </div>
              ) : (
                /* Submit to shuffle */
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-mono text-xs tracking-[0.2em] font-semibold text-brand-gold hover:text-brand-cyan border border-brand-gold/20 hover:border-brand-cyan bg-brand-gold/5 hover:bg-brand-cyan/5 transition-all outline-none duration-300 transform active:scale-[0.98] select-none flex items-center justify-center gap-2 cursor-pointer uppercase"
                >
                  Kết nối &amp; Trải Bài ({remainingSlots}/3 lượt hôm nay)
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </form>
          </motion.div>
        )}

        {/* Step 2: Shuffling animation stage */}
        {step === 'shuffle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-xl mx-auto text-center space-y-8"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-cyan tracking-widest font-semibold block">
                NĂNG LƯỢNG ĐANG KẾT NỐI
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
                Xóc &amp; Thanh tẩy bộ bài
              </h2>
              <p className="font-sans text-sm text-on-surface-variant max-w-sm mx-auto">
                Nguyện lực của bạn đang dung hòa vào linh khí 78 lá bài. Hãy bấm dừng khi bạn cảm thấy sẵn sàng.
              </p>
            </div>

            {/* Simulated interactive Card shuffle block */}
            <div className="relative h-64 flex items-center justify-center overflow-visible py-12">
              <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
              
              {/* Overlapping Shuffling cards */}
              {[0, 1, 2, 3, 4].map((i) => {
                const rotation = Math.sin(shufflingCount + i) * 15;
                const offset = Math.cos(shufflingCount + i) * 40;
                return (
                  <motion.div
                    key={i}
                    animate={{ rotate: rotation, x: offset, y: i * -4 }}
                    transition={{ ease: 'easeInOut', duration: 0.15 }}
                    className="absolute w-36 h-60 rounded-xl border border-brand-gold/25 bg-brand-purple/40 shadow-xl p-1 overflow-hidden pointer-events-none"
                    style={{ zIndex: 10 + i }}
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEksTacBFqLO079ouUC5XRH2G8JfCNH4ZhLCcrJL6joiyeHhvoPZg2vJ0beTv6Tnp1hQZbdd94T8FLa2PJaJxl_V4Yx0FSbi1xat6Ku2XUdMEhPU5mr-j4xk81Sz2il94koBoIK98fYrBDe9E3Rjm7Pykln3OiHSFPquKEhwCd1P1L6bcQifSupbL3zJrB8FVWZ7JP9GKz7lxQwx2sfX1FJIeKcfyhD9rySUFG4CvZKIp9nZ5o38TE05Y1Z8BaC2jon60oF9uxLvk"
                      alt="Shuffling card back"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-lg opacity-80"
                    />
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={stopShufflingAndSpread}
              className="px-10 py-4 rounded-full font-mono text-xs tracking-widest font-bold text-brand-gold hover:text-brand-cyan border border-brand-gold/45 hover:border-brand-cyan bg-brand-gold/10 hover:bg-brand-cyan/10 transition-colors cursor-pointer uppercase shadow-[0_0_15px_rgba(233,195,73,0.15)] animate-bounce"
            >
              Chia bài &amp; Trải bài
            </button>
          </motion.div>
        )}

        {/* Step 3: Fan-pick drawing phase — pick your own cards from the fanned deck */}
        {step === 'draw' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full text-center space-y-8"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-gold tracking-[0.2em] font-semibold uppercase block">
                CƠ HỘI CHẠM ĐỊNH MỆNH
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold">
                Tự tay chọn {drawnCards.length} lá bài định mệnh
              </h2>
              <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto">
                {pickedFan.length < drawnCards.length
                  ? `Hãy để trực giác dẫn lối — chạm vào ${drawnCards.length - pickedFan.length} lá bài còn lại trong quạt bài bên dưới.`
                  : 'Các lá bài đã an vị. Vũ trụ đang lật mở thông điệp của bạn...'}
              </p>
              {isResonantSession && (
                <div className="max-w-md mx-auto px-4 py-2.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(233,195,73,0.06)] animate-pulse">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_6px_#c5a059]"></span>
                  <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase font-semibold">✨ Đã kích hoạt cộng hưởng tâm linh (Trùng tần số cũ)</span>
                </div>
              )}
            </div>

            {/* Destination slots */}
            <div className={`grid gap-3 md:gap-5 max-w-5xl mx-auto justify-items-center ${
              drawnCards.length === 1 ? 'grid-cols-1' : drawnCards.length === 3 ? 'grid-cols-3' : 'grid-cols-3 sm:grid-cols-5'
            }`}>
              {drawnCards.map((card, idx) => {
                const isFilled = idx < pickedFan.length;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 w-full">
                    <span className="font-mono text-[9px] md:text-[10px] text-brand-gold tracking-wider truncate max-w-full text-center block bg-brand-void/80 border border-brand-gold/15 py-1 px-2 rounded">
                      {getPositionLabel(idx)}
                    </span>
                    <div className={`${drawnCards.length === 10 ? 'w-20 h-32 md:w-24 md:h-40' : 'w-24 h-40 md:w-36 md:h-60'} perspective-1000`}>
                      {isFilled ? (
                        <motion.div
                          initial={{ y: 180, scale: 0.5, opacity: 0, rotate: -8 }}
                          animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                          className="w-full h-full"
                        >
                          <div className={`card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d ${flipped[idx] ? 'rotate-y-180' : ''}`}>
                            {/* Back */}
                            <div className="absolute inset-0 backface-hidden rounded-xl glass-card border border-brand-gold/40 p-1 shadow-[0_0_20px_rgba(233,195,73,0.15)]">
                              <img src={CARD_BACK_URL} alt="Card back" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-[#09091d] border border-brand-gold/45 p-1 shadow-[0_0_25px_rgba(197,160,89,0.2)] flex flex-col items-center justify-between">
                              <img src={card.image} alt={card.name} referrerPolicy="no-referrer" className="w-full h-[72%] object-cover rounded-lg" />
                              <div className="pb-1 w-full text-center font-sans">
                                <h4 className="font-serif text-white text-[10px] md:text-xs font-bold truncate px-1">{card.name}</h4>
                                <span className="font-mono text-[8px] text-brand-gold block leading-none">
                                  {orientations[idx] === 'reversed' ? 'Ngược (Rev)' : 'Xuôi (Upr)'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="w-full h-full rounded-xl border-2 border-dashed border-brand-gold/25 bg-brand-gold/[0.03] flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-brand-gold/25" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card fan */}
            {pickedFan.length < drawnCards.length && (
              <div className="relative h-44 md:h-52 max-w-4xl mx-auto overflow-visible select-none" style={{ touchAction: 'manipulation' }}>
                {Array.from({ length: FAN_SIZE }).map((_, j) => {
                  if (pickedFan.includes(j)) return null;
                  const t = j / (FAN_SIZE - 1);
                  const ang = -62 + 124 * t;
                  const rad = (ang * Math.PI) / 180;
                  const lift = (Math.cos(rad) - Math.cos((62 * Math.PI) / 180)) * 130;
                  return (
                    <div
                      key={j}
                      onClick={() => handleFanPick(j)}
                      className="absolute w-14 h-24 md:w-16 md:h-28 cursor-pointer group/fan"
                      style={{
                        left: `calc(50% + ${(Math.sin(rad) * 44).toFixed(2)}% - 28px)`,
                        bottom: `${lift.toFixed(1)}px`,
                        transform: `rotate(${(ang * 0.55).toFixed(1)}deg)`,
                        zIndex: 10 + j,
                      }}
                    >
                      <div className="w-full h-full rounded-lg border border-brand-gold/30 bg-brand-purple/40 shadow-md overflow-hidden group-hover/fan:border-brand-gold group-hover/fan:shadow-[0_0_15px_rgba(233,195,73,0.35)] group-hover/fan:-translate-y-4 transition-all duration-200">
                        <img src={CARD_BACK_URL} alt="Card back" referrerPolicy="no-referrer" className="w-full h-full object-cover pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {allCardsFlipped && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pt-4"
              >
                <button
                  onClick={requestAiTarotReading}
                  className="px-12 py-4 rounded-xl font-mono text-xs tracking-[0.25em] font-bold text-brand-gold hover:text-brand-cyan border border-brand-gold/30 hover:border-brand-cyan bg-brand-gold/10 hover:bg-brand-cyan/10 transition-colors cursor-pointer shadow-[0_0_20px_rgba(233,195,73,0.15)] uppercase"
                >
                  Giải mã chiêm bói từ Tàng Thư
                </button>
              </motion.div>
            )}
          </motion.div>
        )}


        {/* Step 4: Split-screen Reading Room & Follow-up Conversation */}
        {step === 'reading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full space-y-8"
          >
            {/* Header reset button */}
            <div className="flex justify-between items-center border-b border-brand-gold/10 pb-4">
              <div>
                <span className="font-mono text-xs text-brand-gold">TÀNG THƯ CHIÊM BÓI</span>
                <h3 className="font-serif text-xl text-white font-bold">{aspect} - Seeker Reading</h3>
              </div>
              <button
                onClick={handleResetSession}
                className="flex items-center gap-2 px-4 py-2 border border-brand-gold/20 rounded-xl font-mono text-xs text-brand-gold hover:text-white hover:bg-brand-gold/5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Trải Quẻ Mới</span>
              </button>
            </div>

            {/* Display Drawn Cards Row with subtle overlay descriptions */}
            <div className={`grid gap-3 md:gap-6 bg-brand-purple/5 p-4 md:p-6 rounded-2xl border border-brand-gold/10 ${
              drawnCards.length === 1 ? 'grid-cols-1 max-w-[180px] mx-auto' : drawnCards.length === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-5'
            }`}>
              {drawnCards.map((card, index) => {
                const stepName = getPositionLabel(index);
                return (
                  <div key={card.id} className="text-center space-y-2">
                    <span className="font-mono text-[9px] text-brand-gold/80 tracking-wider uppercase block truncate max-w-full px-1">
                      {stepName}
                    </span>
                    <div className="w-full aspect-[2/3] max-w-[110px] sm:max-w-[130px] mx-auto rounded-xl overflow-hidden border border-brand-gold/20 shadow-md relative group">
                      <img
                        src={card.image}
                        alt={card.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Hover Info Tag */}
                      <div className="absolute inset-0 bg-brand-void/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 z-10">
                        <h4 className="font-serif text-brand-gold text-[11px] font-bold truncate w-full">{card.name}</h4>
                        <p className="font-mono text-[8px] text-brand-gold/80 truncate w-full">{card.englishName}</p>
                        <p className="font-mono text-[8.5px] text-brand-cyan truncate w-full mt-0.5">
                          {orientations[index] === 'reversed' ? 'Chiều Ngược' : 'Chiều Xuôi'}
                        </p>
                        <p className="text-[9px] text-on-surface-variant line-clamp-3 mt-1.5 font-sans px-1 leading-normal">{card.overview}</p>
                      </div>
                    </div>
                    <div className="text-center font-sans">
                      <h4 className="font-serif text-[11px] md:text-xs text-brand-gold font-bold truncate max-w-[120px] mx-auto">
                        {card.name}
                      </h4>
                      <span className="font-mono text-[8px] text-gray-400 block">
                        {orientations[index] === 'reversed' ? 'Chiều Ngược' : 'Chiều Xuôi'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Split Screen layout: Left-bottom / Right AI Reader messages chat panel */}
            <div className="w-full glass-card p-4 md:p-8 rounded-3xl border border-brand-gold/15 shadow-2 w-full flex flex-col min-h-[400px] h-[600px] relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-24 -mt-24 w-48 h-48 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Messages Flow Area */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar no-scrollbar">
                
                {/* Visual Initial Loading effect or Chat list */}
                {isAiLoading ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full border-2 border-brand-gold/20 border-t-brand-gold animate-spin"></div>
                      <Sparkles className="w-6 h-6 text-brand-gold absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-serif text-lg text-brand-gold">Đang luận giải từ Tàng Thư...</p>
                      <p className="text-on-surface-variant text-xs font-sans max-w-sm">
                        Hệ thống đang truy lục tàng thư luận giải chi tiết khía cạnh {aspect} của Seeker. Quá trình khai thông tinh thần có thể mất ít giây.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {chatHistory.map((msg, index) => (
                      index === 0 ? (
                        /* The main reading interpretation block */
                        <div key={msg.id} className="rounded-2xl p-6 md:p-8 bg-brand-purple/5 border border-brand-gold/10 shadow-[0_0_15px_rgba(233,195,73,0.03)] markdown-body text-on-background leading-relaxed">
                          <Markdown>{msg.text}</Markdown>
                          <span className="block font-mono text-[9px] text-brand-gold/50 mt-6 text-right uppercase tracking-wider">
                            Chiêm bói hoàn tất • Tinh vân Aura Tarot
                          </span>
                        </div>
                      ) : (
                        /* Follow-up chat bubbles */
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] rounded-2xl p-4 md:p-5 text-sm leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-brand-gold/10 border border-brand-gold/25 text-on-background'
                              : 'bg-brand-purple/10 border border-brand-cyan/15 markdown-body text-on-background'
                          }`}>
                            {msg.sender === 'user' ? (
                              <p className="font-sans">{msg.text}</p>
                            ) : (
                              <Markdown>{msg.text}</Markdown>
                            )}
                            <span className="block font-mono text-[8px] text-on-surface-variant/50 mt-2 text-right">
                              {msg.timestamp}
                            </span>
                          </div>
                        </div>
                      )
                    ))}

                    {isFollowUpLoading && (
                      <div className="flex justify-start">
                        <div className="rounded-2xl p-4 bg-brand-purple/10 border border-brand-cyan/15 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
                          <span className="font-mono text-[10px] text-on-surface-variant tracking-wider">Tàng thư đang chiêm nghiệm...</span>
                        </div>
                      </div>
                    )}

                    <div ref={chatEndRef} />
                  </div>
                )}

              </div>

              {/* Follow-up question input */}
              {!isAiLoading && chatHistory.length > 0 && (
                <form onSubmit={handleSendFollowUp} className="mt-4 pt-4 border-t border-brand-gold/10 flex items-center gap-3">
                  <HelpCircle className="w-4.5 h-4.5 text-brand-gold/50 shrink-0 hidden sm:block" />
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Hỏi thêm về một lá bài, lời khuyên, hay ý nghĩa lá ngược..."
                    maxLength={500}
                    className="flex-1 bg-brand-void border border-brand-gold/20 focus:border-brand-gold text-on-background font-sans text-xs md:text-sm px-4 py-3 rounded-xl outline-none transition-colors placeholder:text-on-surface-variant/40"
                  />
                  <button
                    type="submit"
                    disabled={!userInput.trim() || isFollowUpLoading}
                    className="p-3 rounded-xl border border-brand-gold/30 text-brand-gold hover:text-brand-cyan hover:border-brand-cyan bg-brand-gold/5 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
