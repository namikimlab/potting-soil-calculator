/**
 * breakdown.ts
 *
 * Contains utility functions that convert soil volume (in liters)
 * into user-friendly product breakdowns (e.g., 20L 1개 + 8L 1개).
 */

export const getRecommendedBreakdowns = (
  volume: number
): { primary: string[]; note: string[] } => {
  if (volume <= 8) {
    return {
      primary: ["8리터 1개"],
      note: [],
    };
  }

  // 혼합 계산
  const n20Mix = Math.floor(volume / 20);
  const remMix = volume - n20Mix * 20;
  const n8Mix = remMix > 0 ? Math.ceil(remMix / 8) : 0;
  const mixLabel = [
    ...(n20Mix > 0 ? [`20리터 ${n20Mix}개`] : []),
    ...(n8Mix > 0 ? [`8리터 ${n8Mix}개`] : []),
  ].join(" + ");
  const mixVolume = n20Mix * 20 + n8Mix * 8;
  const mixWaste = mixVolume - volume;

  // only 계산
  const n20Only = Math.ceil(volume / 20);
  const only20Label = `20리터 ${n20Only}개`;
  const only20Waste = n20Only * 20 - volume;

  const n8Only = Math.ceil(volume / 8);
  const only8Label = `8리터 ${n8Only}개`;
  const only8Waste = n8Only * 8 - volume;

  const mixIsSameAsOnly20 = mixLabel === only20Label;
  const mixIsSameAsOnly8 = mixLabel === only8Label;

  const isDuplicate = (mixIsSameAsOnly20 && mixWaste === only20Waste) ||
                      (mixIsSameAsOnly8 && mixWaste === only8Waste);

  if (isDuplicate) {
    // 혼합과 동일 조합이면 혼합 제외, 둘 다 primary에 표시
    return {
      primary: [only20Label, only8Label],
      note: [],
    };
  }

  // 혼합이 유효하면 primary로, only 조합은 note로 항상 표시
  return {
    primary: [mixLabel],
    note: [only20Label, only8Label],
  };
};