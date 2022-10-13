import { Slot } from "@radix-ui/react-slot";
import { TextInputIconProps } from "./interface";

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

export default TextInputIcon;

