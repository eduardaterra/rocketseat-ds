import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./interface";
import Text from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label htmlFor="remember" className="flex items-center gap-2">
          <Story id="remember" />
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </label>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

