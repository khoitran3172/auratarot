import { describe, expect, it } from 'vitest';
import { formatClock, formatDate, isEarlyMonth, isHoliday, isMidAutumn, nextDate } from '../src/core/Calendar';

describe('Calendar', () => {
  it('tháng nào cũng 30 ngày, qua tháng 12 thì về tháng Giêng', () => {
    expect(nextDate({ day: 13, month: 8 })).toEqual({ day: 14, month: 8 });
    expect(nextDate({ day: 30, month: 8 })).toEqual({ day: 1, month: 9 });
    expect(nextDate({ day: 30, month: 12 })).toEqual({ day: 1, month: 1 });
  });

  it('hiển thị Mùng X cho ngày 1–10, Rằm cho ngày 15', () => {
    expect(formatDate({ day: 1, month: 9 })).toBe('Mùng 1 tháng Chín');
    expect(formatDate({ day: 10, month: 9 })).toBe('Mùng 10 tháng Chín');
    expect(formatDate({ day: 15, month: 8 })).toBe('Rằm tháng Tám');
    expect(formatDate({ day: 15, month: 1 })).toBe('Rằm tháng Giêng');
    expect(formatDate({ day: 13, month: 8 })).toBe('13 tháng Tám');
  });

  it('Mùng 1 và Rằm là ngày lễ, Rằm tháng 8 là Trung Thu', () => {
    expect(isHoliday({ day: 1, month: 3 })).toBe(true);
    expect(isHoliday({ day: 15, month: 3 })).toBe(true);
    expect(isHoliday({ day: 14, month: 3 })).toBe(false);
    expect(isMidAutumn({ day: 15, month: 8 })).toBe(true);
    expect(isMidAutumn({ day: 15, month: 9 })).toBe(false);
  });

  it('Mùng 1–3 là đầu tháng kiêng trả nợ', () => {
    expect([1, 2, 3, 4].map((day) => isEarlyMonth({ day, month: 9 }))).toEqual([true, true, true, false]);
  });

  it('ngày bắt đầu 13/8 thì ngày chơi thứ 3 là Rằm Trung Thu', () => {
    let d = { day: 13, month: 8 };
    d = nextDate(nextDate(d));
    expect(isMidAutumn(d)).toBe(true);
  });

  it('đồng hồ', () => {
    expect(formatClock(360)).toBe('6:00');
    expect(formatClock(1025.7)).toBe('17:05');
  });
});
