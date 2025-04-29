import type { Meta, StoryObj } from "@storybook/react";
import { LanguageIndicator } from "../components/language-indicator";

const meta = {
  title: "Components/LanguageIndicator",
  component: LanguageIndicator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LanguageIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
