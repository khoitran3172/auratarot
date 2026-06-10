export interface TarotCard {
  id: string;
  number: string;
  name: string;
  englishName: string;
  image: string;
  group: 'Major Arcana' | 'Suit of Wands' | 'Suit of Cups' | 'Suit of Swords' | 'Suit of Pentacles';
  upright: string;
  reversed: string;
  astrology: string;
  advice: string;
  overview: string;
}

export interface ReadingHistory {
  id: string;
  date: string; // localized display date, e.g. "10/6/2026"
  isoDate?: string; // YYYY-MM-DD (local timezone) — used for heatmap & streak math
  aspect: string; // Tình yêu, Sự nghiệp, Bản thân, Tài chính, vv.
  question: string;
  drawnCards: string[]; // Card IDs in order: Past, Present, Future
  aiResponse: string;
  userNotes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
