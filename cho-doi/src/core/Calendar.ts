// Lịch âm đơn giản hóa: tháng nào cũng 30 ngày, 12 tháng một năm.
import { DATA, type GameData } from './Data';
import { fmt } from './Text';

export const DAYS_PER_MONTH = 30;

export interface LunarDate { day: number; month: number }

export function nextDate(d: LunarDate): LunarDate {
  if (d.day < DAYS_PER_MONTH) return { day: d.day + 1, month: d.month };
  return { day: 1, month: d.month === 12 ? 1 : d.month + 1 };
}

/** Mùng 1 và Rằm: giá bán rau tăng, Bà Bảy Chùa xuất hiện. */
export function isHoliday(d: LunarDate, data: GameData = DATA): boolean {
  return data.config.holiday.days.includes(d.day);
}

/** Rằm tháng 8 = Trung Thu: banner riêng, treo lồng đèn. */
export function isMidAutumn(d: LunarDate): boolean {
  return d.month === 8 && d.day === 15;
}

/** Mùng 1–3: khách kiêng trả nợ. */
export function isEarlyMonth(d: LunarDate, data: GameData = DATA): boolean {
  return data.config.debt.earlyMonthDays.includes(d.day);
}

export function monthName(month: number, data: GameData = DATA): string {
  return data.strings.calendar.months[month - 1] ?? String(month);
}

/** Ngày 1–10 hiển thị "Mùng X", ngày 15 hiển thị "Rằm tháng X". */
export function formatDate(d: LunarDate, data: GameData = DATA): string {
  const s = data.strings.calendar;
  const m = monthName(d.month, data);
  if (d.day === 15) return fmt(s.ram, { m });
  if (d.day <= 10) return fmt(s.mung, { d: d.day, m });
  return fmt(s.plain, { d: d.day, m });
}

/** Giờ game dạng "6:05" từ số phút tính từ nửa đêm. */
export function formatClock(minute: number): string {
  const m = Math.floor(minute);
  const h = Math.floor(m / 60) % 24;
  return `${h}:${String(m % 60).padStart(2, '0')}`;
}
