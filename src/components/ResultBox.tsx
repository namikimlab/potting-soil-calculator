type ResultBoxProps = {
  volume: number;
  recommendation: string;
};

const ResultBox: React.FC<ResultBoxProps> = ({ volume }) => {
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
    <div className="my-4 p-4 bg-amber-50 rounded-2xl w-full max-w-md text-gray-800 space-y-4">
      <h2 className="font-bold">계산 결과</h2>

      <div className="flex justify-between mb-1 ">
        <span className="font-bold">필요한 흙 용량:</span>
        <span className="font-bold">{volume}리터</span>
      </div>

      <p className="text-base text-gray-600">
        🪴 화분의 80%만 흙으로 채운다고 가정했어요.
      </p>

      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="mb-1">추천1: 가성비 대용량 제품</p>
        <p className="font-bold text-green-800">✅ {mixed}</p>
        <div className="flex justify-center space-x-4 mt-4">
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
              className="text-lg bg-green-600 text-white px-3 py-1 rounded"
            >
              구매하기
            </a>
          </div>

          {/* 8L 제품 */}
          {mixed.includes("8리터") && (
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
                className="text-lg bg-green-600 text-white px-3 py-1 rounded"
              >
                구매하기
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500">또는</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="mb-1">추천2: 최고급 소포장 제품</p>
        <p className="font-bold text-green-800">✅ {only8L}</p>
        <div className="flex flex-col items-center space-y-1 mt-4">
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
            className="text-lg bg-green-600 text-white px-3 py-1 rounded"
          >
            구매하기
          </a>
        </div>
      </div>

      {/* 마사토 */}
      <div className="mt-8">
        <p className="font-bold">👉 화분 바닥에 자갈을 약간 깔아주세요.</p>
        <p className="text-base text-gray-600">
          배수에 도움이 되어 뿌리가 썩는 걸 막아줘요.
        </p>
      </div>

      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="font-bold text-green-800">세척 마사토</p>

        <div className="flex justify-center space-x-4 mt-4">
          {/* 마사토 1개 제품 */}
          <div className="flex flex-col items-center space-y-1">
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6395355955"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/masato_1.webp"
                alt="20L 흙"
                className="w-24 h-24 object-cover rounded shadow"
              />
            </a>
            <a
              href="https://smartstore.naver.com/changbitfarm/products/6395355955"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg bg-green-600 text-white px-3 py-1 rounded"
            >
              구매하기
            </a>
          </div>

          {/* 마사토 3개 제품 */}
            <div className="flex flex-col items-center space-y-1">
              <a
                href="https://smartstore.naver.com/changbitfarm/products/8759902556"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/masato_3.webp"
                  alt="8L 흙"
                  className="w-24 h-24 object-cover rounded shadow"
                />
              </a>
              <a
                href="https://smartstore.naver.com/changbitfarm/products/8759902556"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg bg-green-600 text-white px-3 py-1 rounded"
              >
                구매하기
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
