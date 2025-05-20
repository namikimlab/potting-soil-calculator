type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
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
