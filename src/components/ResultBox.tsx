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
    if (num20L > 0) parts.push(`20리터 ${num20L}개`);
    if (num8L > 0) parts.push(`8리터 ${num8L}개`);

    return parts.length > 0 ? parts.join(" + ") : "없음";
  };

  const getOnly8LBreakdown = (volume: number): string => {
    const num8L = Math.ceil(volume / 8);
    return `8리터 ${num8L}개`;
  };

  const mixed = getMixedBreakdown(volume);
  const only8L = getOnly8LBreakdown(volume);

  return (
    <div className="my-4 p-6 bg-amber-50 rounded-2xl shadow-md w-full max-w-md text-gray-800 space-y-4">
      <h2 className="text-xl font-semibold">계산 결과</h2>

      <div className="flex justify-between">
        <span className="font-medium">필요한 흙 용량:</span>
        <span>{volume}L</span>
      </div>

      <div>
        <p className="font-medium mb-1">추천 1️⃣: 큰 포장(20L)과 작은 포장(8L) 혼합</p>
        <p className="text-green-800">{mixed}</p>
        <div className="flex space-x-4 mt-2">
          {/* 20L 제품 */}
          <div className="flex flex-col items-center space-y-1">
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6363814423"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/soil_20l.webp"
                alt="20L 흙"
                className="w-24 h-24 object-cover rounded shadow"
              />
            </a>
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6363814423"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
            >
              구매하기
            </a>
        </div>

          {/* 8L 제품 */}
          <div className="flex flex-col items-center space-y-1">
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6364451019"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/soil_8l.png"
                alt="8L 흙"
                className="w-24 h-24 object-cover rounded shadow"
              />
            </a>
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6364451019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
            >
              구매하기
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="font-medium mb-1">추천 2️⃣: 작은 포장만 사용 (8L)</p>
        <p className="text-green-800">{only8L}</p>
        <div className="flex flex-col items-center space-y-1">
          <a
            href="https://smartstore.naver.com/changbitfarm/products/6364451019"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/soil_8l.png"
              alt="8L 흙"
              className="w-24 h-24 object-cover rounded shadow"
            />
          </a>
          <a
            href="https://smartstore.naver.com/changbitfarm/products/6364451019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
          >
            구매하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;