import type { Meta, StoryObj } from "@storybook/react";
import { EducationSection } from "../components/sections/education-section";

const meta = {
  title: "Sections/EducationSection",
  component: EducationSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EducationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
