/**
 * ResultBox.tsx
 *
 * Displays the calculated soil volume and product recommendations
 * based on the result. Includes:
 * - Volume display
 * - Two product recommendation strategies
 * - Additional gravel suggestion for drainage
 */

import ProductCard from "./ProductCard";
import { getRecommendedBreakdowns } from "../utils/breakdown";

type ResultBoxProps = {
  volume: number;
};

const ResultBox = ({ volume }: ResultBoxProps) => {
  const { primary, note } = getRecommendedBreakdowns(volume);

  return (
    <div className="w-full px-4 pt-6 space-y-4">
      <p className="text-gray-500 text-lg">
        화분의 약 80%만 흙으로 채운다고 가정했어요.
      </p>
      <h2 className="text-[#131712] text-2xl font-bold leading-tight">
        필요한 흙 용량
      </h2>
      <h3 className="text-[#131712] text-3xl font-bold leading-tight">
        {volume} 리터
      </h3>

      <p className="text-[#131712] text-lg">이렇게 추천할께요.</p>

      {primary.map((rec, idx) => (
        <div key={`primary-${idx}`}>
          {idx > 0 && (
            <div className="text-gray-500 my-2 text-lg">- 또는 -</div>
          )}
          <p className="text-[#131712] text-xl font-bold">
            {primary.length > 1 ? `👉 ${rec}` : `✅ ${rec}`}
          </p>
        </div>
      ))}

      {note.length > 0 &&
        note.map((rec, idx) => (
          <div key={`note-${idx}`}>
            <div className=" text-gray-500 my-2 text-lg">- 또는 -</div>
            <p className="text-[#131712] text-xl font-bold">👉 {rec}</p>
          </div>
        ))}

      <p className="text-gray-500 text-lg">
        화분의 크기나 식물 종류에 따라 실제 필요한 흙의 양은 달라질 수 있어요.
      </p>

      <div className="grid grid-cols-1 gap-3 mt-6">
        <ProductCard
          imageSrc="/images/soil_20l.webp"
          title="대용량 분갈이흙"
          subtitle="20L 포장"
          href="https://smartstore.naver.com/changbitfarm/products/6363814423"
        />
        <ProductCard
          imageSrc="/images/soil_8l.webp"
          title="소포장 분갈이흙"
          subtitle="8L 포장"
          href="https://smartstore.naver.com/changbitfarm/products/6364451019"
        />
      </div>

      <p className="text-[#131712] text-lg pt-6">
        화분 바닥에 자갈을 깔아주면 물이 잘 빠져 좋아요.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <ProductCard
          imageSrc="/images/masato_1.webp"
          title="세척 마사토"
          subtitle="2kg 포장"
          href="https://smartstore.naver.com/changbitfarm/products/6395355955"
        />
        <ProductCard
          imageSrc="/images/masato_3.webp"
          title="세척 마사토"
          subtitle="6kg 포장"
          href="https://smartstore.naver.com/changbitfarm/products/8759902556"
        />
      </div>
    </div>
  );
};

export default ResultBox;
