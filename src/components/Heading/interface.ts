import { SlotProps } from "@radix-ui/react-slot";
import React from "react";

export interface HeadingProps extends SlotProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

