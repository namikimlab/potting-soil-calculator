/**
 * breakdown.ts
 *
 * Contains utility functions that convert soil volume (in liters)
 * into user-friendly product breakdowns (e.g., 20L 1개 + 8L 1개).
 */

/**
 * Returns a breakdown using both 20L and 8L bags
 * to cover the given volume efficiently.
 *
 * @param volume - Total volume in liters
 * @returns Breakdown string, e.g., "20리터 2개 + 8리터 1개"
 */
export const getMixedBreakdown = (volume: number): string => {
  const num20L = volume <= 20 ? 1 : Math.floor(volume / 20);
  const remaining = volume - num20L * 20;

  const num8L = remaining > 0 ? Math.ceil(remaining / 8) : 0;

  const parts = [];
  if (num20L > 0) parts.push(`20리터 ${num20L}개`);
  if (num8L > 0) parts.push(`8리터 ${num8L}개`);

  return parts.join(" + ");
};

/**
 * Returns a breakdown using only 8L bags to cover the volume.
 *
 * @param volume - Total volume in liters
 * @returns Breakdown string, e.g., "8리터 3개"
 */
export const getOnly8LBreakdown = (volume: number): string => {
  const num8L = Math.ceil(volume / 8);
  return `8리터 ${num8L}개`;
};
