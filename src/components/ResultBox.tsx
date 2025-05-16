type ResultBoxProps = {
  volume: number;
  recommendation: string;
};

const ResultBox: React.FC<ResultBoxProps> = ({ volume, recommendation }) => {
  const getMixedBreakdown = (volume: number): string => {
    const num20L = volume <= 20 ? 1 : Math.floor(volume / 20);
    const remaining = volume - num20L * 20;

    const num8L = remaining > 0 ? Math.ceil(remaining / 8) : 0;

    const parts = [];
    if (num20L > 0) parts.push(`20리터 ${num20L}개`);
    if (num8L > 0) parts.push(`8리터 ${num8L}개`);

    return parts.join(" + ");
  };

  const getOnly8LBreakdown = (volume: number): string => {
    const num8L = Math.ceil(volume / 8);
    return `8리터 ${num8L}개`;
  };

  const mixed = getMixedBreakdown(volume);
  const only8L = getOnly8LBreakdown(volume);

  return (
    <div className="my-4 p-4 bg-amber-50 rounded-2xl shadow-md w-full max-w-md text-gray-800 space-y-4">
      <h2 className="text-lg font-bold">계산 결과</h2>

      <div className="flex justify-between">
        <span className="text-lg font-bold">필요한 흙 용량:</span>
        <span className="text-lg font-bold">{volume}리터</span>
      </div>

      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="text-lg mb-1">추천1: 가성비 대용량 제품</p>
        <p className="text-lg font-bold text-green-800">➡️ {mixed}</p>
        <div className="flex space-x-4 mt-4">
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
              className="text-sm bg-green-600 text-white px-3 py-1 rounded"
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
                src="/images/soil_8l.webp"
                alt="8L 흙"
                className="w-24 h-24 object-cover rounded shadow"
              />
            </a>
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6364451019"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-green-600 text-white px-3 py-1 rounded"
            >
              구매하기
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500 font-semibold">또는</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="text-lg mb-1">추천2: 최고급 소포장 제품</p>
        <p className="text-lg font-bold text-green-800">➡️ {only8L}</p>
        <div className="flex flex-col items-center space-y-1 mt-4">
          <img
            src="/images/soil_8l.webp"
            alt="8L 흙"
            className="w-24 h-24 object-cover rounded shadow"
          />
          <a
            href="https://smartstore.naver.com/changbitfarm/products/6364451019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-green-600 text-white px-3 py-1 rounded"
          >
            구매하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
