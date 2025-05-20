/**
 * ShapeSelector.tsx
 *
 * Renders a group of selectable pot shapes.
 * Highlights the selected shape and allows user to choose one.
 */

type ShapeOption = {
  /** Currently selected shape value */
  label: string;
  /** Array of available shape options */
  value: string;
  /** Callback when user selects a shape */
  icon: string;
};

type ShapeSelectorProps = {
  shape: string;
  options: ShapeOption[];
  onSelect: (value: string) => void;
};

const ShapeSelector = ({ shape, options, onSelect }: ShapeSelectorProps) => (
  <div className="grid grid-cols-2 gap-4 mb-4">
    {options.map((option) => (
      <div key={option.value} className="flex flex-col items-center space-y-1">
        <button
          type="button"
          onClick={() => onSelect(option.value)}
          className={`w-[140px] h-[140px] rounded-xl p-0 flex items-center justify-center
            transition-all duration-200 ease-in-out
            ${shape === option.value ? "border-2 border-amber-500" : "border-0"}
            bg-amber-50 focus:outline-none focus:ring-0`}
        >
          <img
            src={option.icon}
            alt={option.label}
            className="w-26 h-26 object-contain"
          />
        </button>
        <span
          className={`text-lg text-center transition ${
            shape === option.value
              ? "font-bold text-gray-900"
              : "text-gray-800"
          }`}
        >
          {option.label}
        </span>
      </div>
    ))}
  </div>
);

export default ShapeSelector;
