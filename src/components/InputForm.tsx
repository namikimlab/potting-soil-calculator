import React, { useState } from "react";

type InputData = {
  shape: string;
  width: number;
  height: number;
  quantity: number;
};

interface InputFormProps {
  onCalculate: (data: InputData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const [shape, setShape] = useState("cylinder");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !height || !quantity) return;

    onCalculate({
      shape,
      width: Number(width),
      height: Number(height),
      quantity: Number(quantity),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    {/* 화분 형태 */}
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">화분 모양</label>
        <select
        value={shape}
        onChange={(e) => setShape(e.target.value)}
        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        >
        <option value="cylinder">원기둥</option>
        <option value="square">정사각형</option>
        <option value="cone">원뿔형</option>
        <option value="ellipse">타원형</option>
        </select>
    </div>

    {/* 지름 또는 너비 */}
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">지름 또는 너비 (cm)</label>
        <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        required
        />
    </div>

    {/* 높이 */}
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">높이 (cm)</label>
        <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        required
        />
    </div>

    {/* 수량 */}
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">화분 개수</label>
        <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        required
        />
    </div>

    <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded-md transition"
    >
        계산하기
    </button>
    </form>

  );
};

export default InputForm;
