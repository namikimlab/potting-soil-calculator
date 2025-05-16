type ResultBoxProps = {
    volume: number;
    recommendation: string;
  };
  
  const ResultBox: React.FC<ResultBoxProps> = ({ volume, recommendation }) => {
    return (
      <div className="my-4 bg-amber-300 p-6 rounded-2xl shadow-md w-full max-w-md text-gray-800 space-y-4">
        <h2 className="text-xl font-semibold">계산 결과</h2>
  
        <div className="flex justify-between">
          <span className="font-medium">필요한 흙 용량:</span>
          <span>{volume}L</span>
        </div>
  
        <div>
          <p className="font-medium mb-1">추천 구성:</p>
          <p className="text-green-800">{recommendation}</p>
        </div>
      </div>
    );
  };
  
  export default ResultBox;