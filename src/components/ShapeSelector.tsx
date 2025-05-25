/**
 * ShapeSelector.tsx
 *
 * Renders a group of selectable pot shapes.
 * - Displays pot shape options as icons with labels
 * - Highlights the selected shape with a border
 * - Calls the `onSelect` callback when a shape is clicked
 */

type ShapeOption = {
  label: string;  // Display label (e.g., "Cone")
  value: string;  // Internal shape identifier (e.g., "cone")
  icon: string;   // Background image URL
};

type ShapeSelectorProps = {
  shape: string;    // Currently selected shape value
  options: ShapeOption[];   // List of selectable shapes
  onSelect: (value: string) => void; // Callback when shape is selected
};

const ShapeSelector = ({ shape, options, onSelect }: ShapeSelectorProps) => (
  <div className="grid grid-cols-2 gap-3 px-4 pb-3">
    {options.map((option) => (
      <div
        key={option.value}
        className="flex flex-col gap-3 pb-3 cursor-pointer"
        onClick={() => onSelect(option.value)}
      >
        <div
          className={`w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl transition-all duration-200 ${
            shape === option.value
              ? "border-2 border-yellow-700"
              : "border border-transparent"
          }`}
          style={{ backgroundImage: `url(${option.icon})` }}
        ></div>
        <p className="text-[#131712] text-base font-medium leading-normal text-center">
          {option.label}
        </p>
      </div>
    ))}
  </div>
);

export default ShapeSelector;
