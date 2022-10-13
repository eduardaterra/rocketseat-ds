import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./interface";

export default {
  title: "Components/Button",
  component: Button,
  args: { children: "Button Component" },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

