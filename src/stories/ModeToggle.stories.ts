import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../components/mode-toggle";

const meta = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
