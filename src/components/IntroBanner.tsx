/**
 * IntroBanner.tsx
 *
 * Displays the top banner section:
 * - Background image with a text overlay
 * - Title and description about the soil calculator
 * - Non-interactive layout (select-none + pointer-events disabled)
 */

import plantImg from "../assets/images/plant.webp";

const IntroBanner = () => (
  <div className="@container select-none">
    <div className="@[480px]:px-4 @[480px]:py-3 relative">
      <div
        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
        style={{
          backgroundImage: `url(${plantImg})`,
        }}
      ></div>

      {/* Transparent overlay to block clicks and text selection on image */}
      <div className="absolute inset-0 z-10 pointer-events-none" />
    </div>

    <h2 className="text-[#131712] text-2xl text-center font-bold leading-tight px-4 pb-3 pt-5">
      분갈이 흙 계산기
    </h2>
    <p className="text-[#131712] text-lg text-center pb-3 pt-1 px-4 ">
      분갈이용 흙은 얼마나 사야 할까요?
      <br />
      화분 크기에 딱 맞는 흙 양을 쉽게 계산해보세요.
    </p>
  </div>
);

export default IntroBanner;
