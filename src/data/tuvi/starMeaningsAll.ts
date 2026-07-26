import { STAR_MEANINGS, StarMeaning } from './starMeanings';
import { BASE_STAR_MEANINGS } from './starMeaningsBase';

/** Ý nghĩa toàn bộ sao phụ: 17 sao nền + 53 sao vòng/lẻ */
export const ALL_STAR_MEANINGS: Record<string, StarMeaning> = {
  ...BASE_STAR_MEANINGS,
  ...STAR_MEANINGS,
};

export type { StarMeaning };
