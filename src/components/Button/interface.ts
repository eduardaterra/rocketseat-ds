import { SlotProps } from "@radix-ui/react-slot";
import React from "react";

export interface ButtonProps extends SlotProps {
  children: React.ReactNode;
  asChild?: boolean;
}

