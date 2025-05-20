export const getMixedBreakdown = (volume: number): string => {
  const num20L = volume <= 20 ? 1 : Math.floor(volume / 20);
  const remaining = volume - num20L * 20;

  const num8L = remaining > 0 ? Math.ceil(remaining / 8) : 0;

  const parts = [];
  if (num20L > 0) parts.push(`20리터 ${num20L}개`);
  if (num8L > 0) parts.push(`8리터 ${num8L}개`);

  return parts.join(" + ");
};

export const getOnly8LBreakdown = (volume: number): string => {
  const num8L = Math.ceil(volume / 8);
  return `8리터 ${num8L}개`;
};
