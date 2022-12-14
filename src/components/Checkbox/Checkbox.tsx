import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { CheckboxProps } from "./interface";

const Checkbox = (props: CheckboxProps) => {
  return (
    <RadixCheckbox.Root
      {...props}
      className="w-6 h-6 p-[2px] bg-gray-800 rounded "
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500 " />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;

