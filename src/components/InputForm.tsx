import React, { useState } from "react";
import rectangleImg from "../assets/images/rectangle.webp";
import cylinderImg from "../assets/images/cylinder.webp";
import coneImg from "../assets/images/cone.webp";
import otherImg from "../assets/images/other.webp";
import type { InputData } from "../types";

interface InputFormProps {
  onCalculate: (data: InputData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const [shape, setShape] = useState("cylinder");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [topDiameter, setTopDiameter] = useState("");
  const [bottomDiameter, setBottomDiameter] = useState("");
  const [surfaceArea, setSurfaceArea] = useState("");
  const [quantity, setQuantity] = useState("1");

  const shapes = [
    { label: "사각형", value: "rectangle", icon: rectangleImg },
    { label: "원통형", value: "cylinder", icon: cylinderImg },
    { label: "원뿔형", value: "cone", icon: coneImg },
    { label: "기타", value: "other", icon: otherImg },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit!", {
      shape,
      width,
      length,
      height,
      diameter,
      topDiameter,
      bottomDiameter,
      surfaceArea,
      quantity,
    });

    switch (shape) {
      case "rectangle":
        if (!width || !length || !height || !quantity) return;
        onCalculate({
          shape: "rectangle",
          width: Number(width),
          length: Number(length),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "cylinder":
        if (!diameter || !height || !quantity) return;
        onCalculate({
          shape: "cylinder",
          diameter: Number(diameter),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "cone":
        if (!topDiameter || !bottomDiameter || !height || !quantity) return;
        onCalculate({
          shape: "cone",
          topDiameter: Number(topDiameter),
          bottomDiameter: Number(bottomDiameter),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "other":
        if (!surfaceArea || !height || !quantity) return;
        onCalculate({
          shape: "other",
          surfaceArea: Number(surfaceArea),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 화분 형태 */}
      <div>
        <label className="block font-bold text-gray-700 mb-4">
          화분 모양을 골라주세요
        </label>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {shapes.map((shapeOption) => (
            <div
              key={shapeOption.value}
              className="flex flex-col items-center space-y-1"
            >
              <button
                type="button"
                onClick={() => setShape(shapeOption.value)}
                className={`w-[140px] h-[140px] rounded-xl p-0 flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${
              shape === shapeOption.value
                ? "border-2 border-amber-500"
                : "border-0"
            }
            bg-amber-50 focus:outline-none focus:ring-0`}
              >
                <img
                  src={shapeOption.icon}
                  alt={shapeOption.label}
                  className="w-26 h-26 object-contain"
                />
              </button>
              <span
                className={`text-lg text-center transition ${
                  shape === shapeOption.value
                    ? "font-bold text-gray-900"
                    : "text-gray-800"
                }`}
              >
                {shapeOption.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 입력 필드 - shape별 조건부 렌더링 */}
      {shape === "rectangle" && (
        <>
          <label className="block font-bold text-gray-700 mb-1">
            가로 (cm)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
          <label className="block font-bold text-gray-700 mb-1 mt-2">
            세로 (cm)
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </>
      )}

      {shape === "cylinder" && (
        <>
          <label className="block font-bold text-gray-700 mb-1">
            지름 (cm)
          </label>
          <input
            type="number"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </>
      )}

      {shape === "cone" && (
        <>
          <label className="block font-bold text-gray-700 mb-1">
            윗지름 (cm)
          </label>
          <input
            type="number"
            value={topDiameter}
            onChange={(e) => setTopDiameter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
          <label className="block font-bold text-gray-700 mb-1 mt-4">
            아래지름 (cm)
          </label>
          <input
            type="number"
            value={bottomDiameter}
            onChange={(e) => setBottomDiameter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </>
      )}

      {shape === "other" && (
        <>
          <label className="block font-bold text-gray-700 mb-1">
            면적 (cm²)
          </label>
          <input
            type="number"
            value={surfaceArea}
            onChange={(e) => setSurfaceArea(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </>
      )}

      {/* 공통 입력 필드 */}
      <div>
        <label className="block font-bold text-gray-700 mb-1 mt-4">
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
      <div>
        <label className="block font-bold text-gray-700 mb-1">화분 개수</label>
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
        className="bg-green-600 text-white font-bold p-2 mt-2 mb-4 w-full rounded-md"
      >
        계산하기
      </button>
    </form>
  );
};

export default InputForm;
