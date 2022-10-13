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
        <div className="flex gap-2">
          <Story />
          <Text size="sm">Lembrar-me de mim em 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

