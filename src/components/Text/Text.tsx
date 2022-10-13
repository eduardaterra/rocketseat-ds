import { TextProps } from "./interface";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

const Text = ({ size = "md", children, className, asChild }: TextProps) => {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Text;

