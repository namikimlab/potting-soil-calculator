import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultBox from "./components/ResultBox";
import Footer from "./components/Footer";
import { calculateSoilVolume } from "./utils/calculator";
import type { InputData, ResultData } from "./types";

function App() {
  const [result, setResult] = useState<ResultData | null>(null);
  const handleCalculate = (input: InputData) => {
    const volume = calculateSoilVolume(input);
    setResult({ volume });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md mb-4">
        <Header />
        <InputForm onCalculate={handleCalculate} />
        {result && <ResultBox {...result} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
