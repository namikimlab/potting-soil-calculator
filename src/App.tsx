import { useState } from "react";
import InputForm from "./components/InputForm";
import ResultBox from "./components/ResultBox";
import { calculateSoilVolume } from "./utils/calculator";
import type { InputData, ResultData } from "./types";
import logo from "./assets/logo.webp";

function App() {
  const [result, setResult] = useState<ResultData | null>(null);

  const handleCalculate = (input: InputData) => {
    const volume = calculateSoilVolume(input);

    const bags = Math.ceil(volume / 10); // 10L 흙 기준
    const recommendation = `10L 흙 ${bags}봉지 추천`;

    setResult({ volume, recommendation });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md mb-12">
        {/* logo with link */}
        <a
          href="https://smartstore.naver.com/changbitfarm"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto mt-4 mb-2 w-[178px] text-center"
        >
          <img src={logo} alt="창빛농원" className="w-[178px] h-[40px] object-contain" />
        </a>

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">
          🌱 분갈이 흙 계산기
        </h1>

        <div className="w-full rounded-xl">
          <InputForm onCalculate={handleCalculate} />
        </div>

        {result && (
          <div className="w-full">
            <ResultBox
              volume={result.volume}
              recommendation={result.recommendation}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
