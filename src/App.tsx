import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultBox from "./components/ResultBox";
import { calculateSoilVolume } from "./utils/calculator";

type ResultData = {
  volume: number;
  recommendation: string;
};

function App() {
  const [result, setResult] = useState<ResultData | null>(null);

  const handleCalculate = (input: {
    shape: string;
    width: number;
    height: number;
    quantity: number;
  }) => {
    const volume = calculateSoilVolume(
      input.shape,
      input.width,
      input.height,
      input.quantity
    );

    const bags = Math.ceil(volume / 10); // 10L 흙 기준
    const recommendation = `10L 흙 ${bags}봉지 추천`;

    setResult({ volume, recommendation });
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-900 mb-6 tracking-tight">
        🌱 분갈이 흙 계산기
      </h1>
  
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <InputForm onCalculate={handleCalculate} />
      </div>
  
      {result && (
        <div className="w-full max-w-md mt-6">
          <ResultBox
            volume={result.volume}
            recommendation={result.recommendation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
