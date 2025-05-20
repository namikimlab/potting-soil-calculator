/**
 * InputForm component
 *
 * Renders a dynamic form for selecting pot shape and entering dimensions
 * to calculate required soil volume.
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
  /** Callback function that receives validated input for calculation */
  onCalculate: (data: InputData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  // 선택 가능한 화분 형태 목록
  const [shape, setShape] = useState("cone");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [topDiameter, setTopDiameter] = useState("");
  const [bottomDiameter, setBottomDiameter] = useState("");
  const [surfaceArea, setSurfaceArea] = useState("");
  const [quantity, setQuantity] = useState("1");

  // List of selectable pot shapes
  const shapes = [
    { label: "사각형", value: "rectangle", icon: rectangleImg },
    { label: "원통형", value: "cylinder", icon: cylinderImg },
    { label: "원뿔형", value: "cone", icon: coneImg },
    { label: "기타", value: "other", icon: otherImg },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields based on selected shape and perform calculation
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

  // Render input fields based on selected pot shape
  const renderShapeFields = () => {
    switch (shape) {
      case "rectangle":
        return (
          <>
            <InputField label="가로 (cm)" value={width} onChange={setWidth} />
            <InputField label="세로 (cm)" value={length} onChange={setLength} />
          </>
        );
      case "cylinder":
        return (
          <InputField
            label="지름 (cm)"
            value={diameter}
            onChange={setDiameter}
          />
        );
      case "cone":
        return (
          <>
            <InputField
              label="윗지름 (cm)"
              value={topDiameter}
              onChange={setTopDiameter}
            />
            <InputField
              label="아래지름 (cm)"
              value={bottomDiameter}
              onChange={setBottomDiameter}
              className="mt-4"
            />
          </>
        );
      case "other":
        return (
          <InputField
            label="면적 (cm²)"
            value={surfaceArea}
            onChange={setSurfaceArea}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block font-bold text-gray-700 mb-4">
        화분 모양을 골라주세요
      </label>
      <ShapeSelector shape={shape} options={shapes} onSelect={setShape} />

      {renderShapeFields()}

      <InputField
        label="높이 (cm)"
        value={height}
        onChange={setHeight}
        className="mt-4"
      />
      <InputField label="화분 개수" value={quantity} onChange={setQuantity} />

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
