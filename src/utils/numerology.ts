import { NumerologyNumber, ArrowId, KarmicDebtNumber } from '../data/numerology/types';

export interface CoreNumberResult {
  value: NumerologyNumber;
  karmicDebt: KarmicDebtNumber | null; // tổng trung gian rơi vào 13/14/16/19
}

export interface LoShuResult {
  counts: Record<number, number>; // 1-9 → số lần xuất hiện trong ngày sinh
  missing: number[];
  repeated: number[]; // xuất hiện ≥ 2 lần
  fullArrows: ArrowId[];
  emptyArrows: ArrowId[];
}

export interface PinnacleOrChallenge {
  value: number; // pinnacle: 1-9/11/22/33; challenge: 0-8
  fromAge: number;
  toAge: number | null; // null = đến cuối đời
}

export interface NumerologyResult {
  normalizedName: string;
  lifePath: CoreNumberResult;
  expression: CoreNumberResult;
  soulUrge: CoreNumberResult;
  personality: CoreNumberResult;
  birthday: CoreNumberResult;
  maturity: CoreNumberResult;
  loShu: LoShuResult;
  personalYear: number; // 1-9
  personalMonth: number;
  personalDay: number;
  pinnacles: PinnacleOrChallenge[]; // 4 đỉnh cao
  challenges: PinnacleOrChallenge[]; // 4 thách thức
}

const MASTER_NUMBERS = [11, 22, 33];
const KARMIC_DEBTS: KarmicDebtNumber[] = [13, 14, 16, 19];

// Pythagorean letter values: A J S=1, B K T=2, C L U=3, D M V=4, E N W=5, F O X=6, G P Y=7, H Q Z=8, I R=9
const LETTER_VALUES: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// Strip Vietnamese diacritics and normalize to uppercase A-Z words
export const normalizeName = (raw: string): string => {
  return raw
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // bỏ dấu thanh/mũ
    .replace(/[đĐ]/g, (c) => (c === 'đ' ? 'd' : 'D'))
    .toUpperCase()
    .replace(/[^A-Z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const sumDigits = (n: number): number =>
  String(n).split('').reduce((acc, d) => acc + Number(d), 0);

// Reduce to a single digit, optionally preserving master numbers at every stage
export const reduceNumber = (n: number, keepMaster = true): number => {
  let v = n;
  while (v > 9) {
    if (keepMaster && MASTER_NUMBERS.includes(v)) return v;
    v = sumDigits(v);
  }
  return v;
};

const detectKarmicDebt = (intermediate: number): KarmicDebtNumber | null =>
  KARMIC_DEBTS.includes(intermediate as KarmicDebtNumber) ? (intermediate as KarmicDebtNumber) : null;

const toCore = (intermediate: number, keepMaster = true): CoreNumberResult => ({
  value: reduceNumber(intermediate, keepMaster) as NumerologyNumber,
  karmicDebt: detectKarmicDebt(intermediate),
});

// In a word with no A/E/I/O/U, Y functions as the vowel (e.g. "LY", "MY")
const isVowelInWord = (letter: string, word: string): boolean => {
  if (VOWELS.has(letter)) return true;
  if (letter === 'Y' && ![...word].some(c => VOWELS.has(c))) return true;
  return false;
};

const sumName = (name: string, filter?: (letter: string, word: string) => boolean): number => {
  let total = 0;
  for (const word of name.split(' ')) {
    for (const letter of word) {
      const value = LETTER_VALUES[letter];
      if (!value) continue;
      if (filter && !filter(letter, word)) continue;
      total += value;
    }
  }
  return total;
};

// Arrows on the Lo Shu square
const ARROW_LINES: { id: ArrowId; digits: [number, number, number] }[] = [
  { id: 'determination', digits: [1, 5, 9] },
  { id: 'spirituality', digits: [3, 5, 7] },
  { id: 'intellect', digits: [3, 6, 9] },
  { id: 'emotionalBalance', digits: [2, 5, 8] },
  { id: 'practicality', digits: [1, 4, 7] },
  { id: 'planning', digits: [1, 2, 3] },
  { id: 'willpower', digits: [4, 5, 6] },
  { id: 'action', digits: [7, 8, 9] },
];

const computeLoShu = (day: number, month: number, year: number): LoShuResult => {
  const digits = `${day}${month}${year}`.split('').map(Number).filter(d => d > 0);
  const counts: Record<number, number> = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  for (const d of digits) counts[d]++;

  const missing = Object.keys(counts).map(Number).filter(d => counts[d] === 0);
  const repeated = Object.keys(counts).map(Number).filter(d => counts[d] >= 2);
  const fullArrows = ARROW_LINES.filter(a => a.digits.every(d => counts[d] > 0)).map(a => a.id);
  const emptyArrows = ARROW_LINES.filter(a => a.digits.every(d => counts[d] === 0)).map(a => a.id);

  return { counts, missing, repeated, fullArrows, emptyArrows };
};

/**
 * Computes a full Pythagorean numerology profile.
 * @param fullName họ tên khai sinh (tiếng Việt có dấu được tự chuẩn hóa)
 * @param birth ngày sinh
 * @param today ngày hiện tại (cho chu kỳ cá nhân)
 */
export function computeNumerology(
  fullName: string,
  birth: { day: number; month: number; year: number },
  today: { day: number; month: number; year: number }
): NumerologyResult {
  const name = normalizeName(fullName);
  const { day, month, year } = birth;

  // Life Path: reduce day/month/year separately, then sum — the standard method
  const dayR = reduceNumber(day);
  const monthR = reduceNumber(month);
  const yearR = reduceNumber(sumDigits(year));
  const lifePathIntermediate = dayR + monthR + yearR;
  const lifePath = toCore(lifePathIntermediate);
  // Karmic debt for life path is traditionally read from the raw birth day too
  if (!lifePath.karmicDebt && KARMIC_DEBTS.includes(day as KarmicDebtNumber)) {
    lifePath.karmicDebt = day as KarmicDebtNumber;
  }

  const expression = toCore(sumName(name));
  const soulUrge = toCore(sumName(name, isVowelInWord));
  const personality = toCore(sumName(name, (l, w) => !isVowelInWord(l, w)));
  const birthday = toCore(day);
  const maturity = toCore(lifePath.value + expression.value);

  const loShu = computeLoShu(day, month, year);

  // Personal cycles (no master numbers by convention)
  const personalYear = reduceNumber(reduceNumber(day, false) + reduceNumber(month, false) + reduceNumber(sumDigits(today.year), false), false);
  const personalMonth = reduceNumber(personalYear + reduceNumber(today.month, false), false);
  const personalDay = reduceNumber(personalMonth + reduceNumber(today.day, false), false);

  // Pinnacles: 4 life stages; the first ends at age 36 - lifePath, each next lasts 9 years
  const lifePathBase = reduceNumber(lifePath.value, false);
  const firstEnd = 36 - lifePathBase;
  const p1 = reduceNumber(dayR + monthR);
  const p2 = reduceNumber(dayR + yearR);
  const p3 = reduceNumber(p1 + p2);
  const p4 = reduceNumber(monthR + yearR);
  const pinnacles: PinnacleOrChallenge[] = [
    { value: p1, fromAge: 0, toAge: firstEnd },
    { value: p2, fromAge: firstEnd + 1, toAge: firstEnd + 9 },
    { value: p3, fromAge: firstEnd + 10, toAge: firstEnd + 18 },
    { value: p4, fromAge: firstEnd + 19, toAge: null },
  ];

  // Challenges: absolute differences (0-8, no master)
  const c1 = Math.abs(reduceNumber(month, false) - reduceNumber(day, false));
  const c2 = Math.abs(reduceNumber(day, false) - reduceNumber(sumDigits(year), false));
  const c3 = Math.abs(c1 - c2);
  const c4 = Math.abs(reduceNumber(month, false) - reduceNumber(sumDigits(year), false));
  const challenges: PinnacleOrChallenge[] = [
    { value: c1, fromAge: 0, toAge: firstEnd },
    { value: c2, fromAge: firstEnd + 1, toAge: firstEnd + 9 },
    { value: c3, fromAge: firstEnd + 10, toAge: firstEnd + 18 },
    { value: c4, fromAge: firstEnd + 19, toAge: null },
  ];

  return {
    normalizedName: name,
    lifePath, expression, soulUrge, personality, birthday, maturity,
    loShu, personalYear, personalMonth, personalDay,
    pinnacles, challenges,
  };
}
