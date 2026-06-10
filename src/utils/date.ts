/**
 * Returns today's date as YYYY-MM-DD in the user's LOCAL timezone.
 * Do not use toISOString() here — it returns UTC, which would make
 * the "new day" reset at 7AM for Vietnam users instead of midnight.
 */
export function getLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
