import { TextInputRootProps } from "./interface";

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2  ring-cyan-500">
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

export default TextInputRoot;

