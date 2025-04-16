import type { Meta, StoryObj } from "@storybook/react";
import { StoryButton } from "./StoryButton";

const meta = {
  title: "Components/StoryButton",
  component: StoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof StoryButton>;

export default meta;
type Story = StoryObj<typeof StoryButton>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
  },
};

export const LargeOutlined: Story = {
  args: {
    variant: "outline",
    size: "lg",
  },
};

export const SmallGhost: Story = {
  args: {
    variant: "ghost",
    size: "sm",
  },
};
