import { TextInputInputProps } from "./interface";

const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400"
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

export default TextInputInput;

