/**
 * InputField.tsx
 *
 * Reusable input component with a label.
 * Used to input numeric values like dimensions and quantity.
 */

type InputFieldProps = {
  /** Label text displayed above the input field */
  label: string;
  /** Current value of the input field (controlled) */
  value: string;
  /** Handler to update the input field value */
  onChange: (value: string) => void;
  /** Optional: additional class names for outer wrapper */
  className?: string;
};

const InputField = ({ label, value, onChange, className = "" }: InputFieldProps) => (
  <div className={className}>
    <label className="block font-bold text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
      required
    />
  </div>
);

export default InputField;
