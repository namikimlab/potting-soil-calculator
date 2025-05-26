/**
 * InputForm.tsx
 *
 * Renders the full input form for calculating potting soil volume:
 * - ShapeSelector: lets user choose the shape of the pot
 * - Dynamic input fields based on selected shape
 * - Submits validated input to the parent via onCalculate callback
 */

import React, { useState } from "react";
import rectangleImg from "../assets/images/rectangle.webp";
import cylinderImg from "../assets/images/cylinder.webp";
import coneImg from "../assets/images/cone.webp";
import otherImg from "../assets/images/other.webp";
import type { InputData } from "../types";
import InputField from "./InputField";
import ShapeSelector from "./ShapeSelector";

interface InputFormProps {
  /** Callback function to pass validated input data to the parent */
  onCalculate: (data: InputData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  // Current selected shape and all dimensional inputs
  const [shape, setShape] = useState("cone");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [topDiameter, setTopDiameter] = useState("");
  const [bottomDiameter, setBottomDiameter] = useState("");
  const [surfaceArea, setSurfaceArea] = useState("");
  const [quantity, setQuantity] = useState("1");

  // Pot shape options for the selector
  const shapes = [
    { label: "원뿔형", value: "cone", icon: coneImg },
    { label: "원통형", value: "cylinder", icon: cylinderImg },
    { label: "사각형", value: "rectangle", icon: rectangleImg },
    { label: "기타", value: "other", icon: otherImg },
  ];

  // Submit handler — validates input and calls onCalculate
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    switch (shape) {
      case "rectangle":
        if (!width || !length || !height || !quantity) return;
        onCalculate({
          shape,
          width: Number(width),
          length: Number(length),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "cylinder":
        if (!diameter || !height || !quantity) return;
        onCalculate({
          shape,
          diameter: Number(diameter),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "cone":
        if (!topDiameter || !bottomDiameter || !height || !quantity) return;
        onCalculate({
          shape,
          topDiameter: Number(topDiameter),
          bottomDiameter: Number(bottomDiameter),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
      case "other":
        if (!surfaceArea || !height || !quantity) return;
        onCalculate({
          shape,
          surfaceArea: Number(surfaceArea),
          height: Number(height),
          quantity: Number(quantity),
        });
        break;
    }
  };

  // Conditionally render input fields based on shape type
  const renderShapeFields = () => {
    switch (shape) {
      case "rectangle":
        return (
          <>
            <InputField placeholder="가로 (cm)" value={width} onChange={setWidth} />
            <InputField placeholder="세로 (cm)" value={length} onChange={setLength} />
          </>
        );
      case "cylinder":
        return (
          <InputField placeholder="지름 (cm)" value={diameter} onChange={setDiameter} />
        );
      case "cone":
        return (
          <>
            <InputField placeholder="윗지름 (cm)" value={topDiameter} onChange={setTopDiameter} />
            <InputField placeholder="아래지름 (cm)" value={bottomDiameter} onChange={setBottomDiameter} />
          </>
        );
      case "other":
        return (
          <InputField placeholder="면적 (cm²)" value={surfaceArea} onChange={setSurfaceArea} />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <h2 className="text-[#131712] text-xl font-bold leading-tight tracking-[-0.015em] px-4 pt-5">
        화분 모양 선택
      </h2>
      <ShapeSelector shape={shape} options={shapes} onSelect={setShape} />

      <h2 className="text-[#131712] text-xl font-bold leading-tight tracking-[-0.015em] px-4 pt-5">
        화분 크기 입력
      </h2>

      <div className="flex flex-col gap-4 px-4">
        {renderShapeFields()}
        <InputField placeholder="높이 (cm)" value={height} onChange={setHeight} />
        <InputField placeholder="화분 개수" value={quantity} onChange={setQuantity} />
      </div>

      <div className="flex px-4 py-3 justify-center">
        <button
          type="submit"
          className="
          flex items-center justify-center h-10 px-4
          mx-auto rounded-full
          bg-[#50d22c] text-[#131712] text-lg font-bold
          cursor-pointer"
        >
          계산하기
        </button>
      </div>
    </form>
  );
};

export default InputForm;
