/**
 * ResultBox.tsx
 *
 * Displays the calculated soil volume and product recommendations
 * based on the result. Includes:
 * - Volume display
 * - Two product recommendation strategies
 * - Additional gravel suggestion for drainage
 */

import { getMixedBreakdown, getOnly8LBreakdown } from "../utils/breakdown";
import ProductCard from "./ProductCard";

type ResultBoxProps = {
  volume: number;
};

const ResultBox: React.FC<ResultBoxProps> = ({ volume }) => {
  const mixed = getMixedBreakdown(volume);
  const only8L = getOnly8LBreakdown(volume);

  return (
    <div className="my-4 p-4 bg-amber-50 rounded-2xl w-full max-w-md text-gray-800 space-y-4">
      <h2 className="font-bold">계산 결과</h2>

      <div className="flex justify-between mb-1">
        <span className="font-bold">필요한 흙 용량:</span>
        <span className="font-bold">{volume}리터</span>
      </div>

      <p className="text-base text-gray-600">
        🪴 화분의 80%만 흙으로 채운다고 가정했어요.
      </p>

      {/* Recommendation #1: Mixed 20L + 8L */}
      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="mb-1">추천1: 가성비 대용량 제품</p>
        <p className="font-bold text-green-800">✅ {mixed}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <ProductCard
            imageSrc="/images/soil_20l.webp"
            alt="20L 흙"
            href="https://smartstore.naver.com/changbitfarm/products/6363814423"
          />
          {mixed.includes("8리터") && (
            <ProductCard
              imageSrc="/images/soil_8l.webp"
              alt="8L 흙"
              href="https://smartstore.naver.com/changbitfarm/products/6364451019"
            />
          )}
        </div>
      </div>

      {/* Separator */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500">또는</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Recommendation #2: 8L only */}
      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="mb-1">추천2: 최고급 소포장 제품</p>
        <p className="font-bold text-green-800">✅ {only8L}</p>
        <div className="flex flex-col items-center space-y-1 mt-4">
          <ProductCard
            imageSrc="/images/soil_8l.webp"
            alt="8L 흙"
            href="https://smartstore.naver.com/changbitfarm/products/6364451019"
          />
        </div>
      </div>

      {/* Gravel suggestion */}
      <div className="mt-8">
        <p className="font-bold">👉 화분 바닥에 자갈을 약간 깔아주세요.</p>
        <p className="text-base text-gray-600">
          배수에 도움이 되어 뿌리가 썩는 걸 막아줘요.
        </p>
      </div>
      
      {/* Gravel product links */}
      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
        <p className="font-bold text-green-800">세척 마사토</p>
        <div className="flex justify-center space-x-4 mt-4">
          <ProductCard
            imageSrc="/images/masato_1.webp"
            alt="20L 흙"
            href="https://smartstore.naver.com/changbitfarm/products/6395355955"
          />
          <ProductCard
            imageSrc="/images/masato_3.webp"
            alt="8L 흙"
            href="https://smartstore.naver.com/changbitfarm/products/8759902556"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
