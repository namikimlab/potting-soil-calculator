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

const InputField = ({
  placeholder,
  value,
  onChange,
  className = "",
}: InputFieldProps) => (
  <div className={`flex flex-col min-w-40 flex-1 ${className}`}>
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-input w-full min-w-0 resize-none 
        rounded-xl text-[#131712] bg-[#f1f4f1] text-lg h-14 p-4 
      placeholder:text-[#6d8566] focus:outline-0 focus:ring-0 focus:border-none"
      required
    />
  </div>
);

export default InputField;
