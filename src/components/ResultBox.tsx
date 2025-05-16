type ResultBoxProps = {
  volume: number;
  recommendation: string;
};

const ResultBox: React.FC<ResultBoxProps> = ({ volume, recommendation }) => {
  const getMixedBreakdown = (volume: number): string => {
    const num20L = Math.floor(volume / 20);
    const remaining = volume - num20L * 20;
    const num8L = Math.ceil(remaining / 8);

    const parts = [];
    if (num20L > 0) parts.push(`20L ${num20L}개`);
    if (num8L > 0) parts.push(`8L ${num8L}개`);

    return parts.length > 0 ? parts.join(" + ") : "없음";
  };

  const getOnly8LBreakdown = (volume: number): string => {
    const num8L = Math.ceil(volume / 8);
    return `8L ${num8L}개`;
  };

  const mixed = getMixedBreakdown(volume);
  const only8L = getOnly8LBreakdown(volume);

  return (
    <div className="my-4 p-6 bg-amber-200 rounded-2xl shadow-md w-full max-w-md text-gray-800 space-y-4">
      <h2 className="text-xl font-semibold">계산 결과</h2>

      <div className="flex justify-between">
        <span className="font-medium">필요한 흙 용량:</span>
        <span>{volume}L</span>
      </div>

      <div>
        <p className="font-medium mb-1">추천 1️⃣: 큰 포장(20L)과 작은 포장(8L) 혼합</p>
        <p className="text-green-800">{mixed}</p>
      </div>

      <div>
        <p className="font-medium mb-1">추천 2️⃣: 작은 포장만 사용 (8L)</p>
        <p className="text-green-800">{only8L}</p>
      </div>
    </div>
  );
};

export default ResultBox;