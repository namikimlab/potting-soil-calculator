/**
 * InputField.tsx
 *
 * Reusable input component with a label.
 * Used to input numeric values like dimensions and quantity.
 */

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const InputField = ({ placeholder, value, onChange, className = "" }: InputFieldProps) => (
  <div className={`flex flex-col min-w-40 flex-1 ${className}`}>
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131712] focus:outline-0 focus:ring-0 border-none bg-[#f1f4f1] focus:border-none h-14 placeholder:text-[#6d8566] p-4 text-base font-normal leading-normal"
      required
    />
  </div>
);

export default InputField;
