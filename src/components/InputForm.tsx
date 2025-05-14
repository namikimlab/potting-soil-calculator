import React, { useState } from "react";
import rectangleImg from "../assets/images/rectangle.webp";
import cylinderImg from "../assets/images/cylinder.webp";
import coneImg from "../assets/images/cone.webp";
import otherImg from "../assets/images/other.webp";

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
      value: "rectangle",
      icon: rectangleImg,
    },
    {
      label: "원통형",
      value: "cylinder",
      icon: cylinderImg,
    },
    {
      label: "원뿔형",
      value: "cone",
      icon: coneImg,
    },
    {
      label: "기타",
      value: "other",
      icon: otherImg,
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
        <label className="block text-lg font-bold text-gray-700 mb-1">
          화분 모양을 골라주세요
        </label>

        <div className="grid grid-cols-2 gap-3">
          {shapes.map((shapeOption) => (
            <button
              key={shapeOption.value}
              type="button"
              onClick={() => setShape(shapeOption.value)}
              className={`aspect-square w-full rounded-lg p-2 flex flex-col items-center justify-center 
                transition-all duration-200 ease-in-out
                border-3 ${
                  shape === shapeOption.value
                    ? "border-amber-500"
                    : "border-transparent"
                }
                  focus:outline-none focus:ring-0
              `}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={shapeOption.icon}
                  alt={shapeOption.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`mt-2 text-base text-center transition ${
                  shape === shapeOption.value ? "font-bold" : "font-normal"
                }`}
              >
                {shapeOption.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 지름 또는 너비 */}
      <div>
        <label className="block text-lg font-bold text-gray-700 mb-1">
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
        <label className="block text-lg font-bold text-gray-700 mb-1">
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
        <label className="block text-lg font-bold text-gray-700 mb-1">
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
        className="bg-green-600 hover:bg-green-700 p-2 w-full rounded-md transition"
      >
        계산하기
      </button>
    </form>
  );
};

export default InputForm;
