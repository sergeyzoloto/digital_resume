import type { Meta, StoryObj } from "@storybook/react";
import { SkillsSection } from "../components/sections/skills-section";

const meta = {
  title: "Sections/SkillsSection",
  component: SkillsSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkillsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
