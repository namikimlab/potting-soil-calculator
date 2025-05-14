import React, { useState } from "react";
import RectangleIcon from "../assets/icons/rectangle.svg?react";
import CylinderIcon from "../assets/icons/cylinder.svg?react";
import ConeIcon from "../assets/icons/cone.svg?react";
import OtherIcon from "../assets/icons/other.svg?react";

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

  const shapes = [
    {
      label: "사각형",
      value: "square",
      icon: <RectangleIcon className="w-8 h-8" />,
    },
    {
      label: "원기둥",
      value: "cylinder",
      icon: <CylinderIcon className="w-8 h-8" />,
    },
    { label: "원뿔형", value: "cone", icon: <ConeIcon className="w-8 h-8" /> },
    {
      label: "기타",
      value: "ellipse",
      icon: <OtherIcon className="w-8 h-8" />,
    },
  ];

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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          화분 모양
        </label>
        <div className="grid grid-cols-2 gap-2">
          {shapes.map((shapeOption) => (
            <button
              key={shapeOption.value}
              type="button"
              onClick={() => setShape(shapeOption.value)}
              className={`border p-3 rounded flex flex-col items-center justify-center space-y-1 transition
          ${
            shape === shapeOption.value
              ? "bg-green-600 text-white border-green-700"
              : "bg-white text-gray-800"
          }`}
            >
              {shapeOption.icon}
              <span className="text-sm">{shapeOption.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 지름 또는 너비 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          지름 또는 너비 (cm)
        </label>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          높이 (cm)
        </label>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          화분 개수
        </label>
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
