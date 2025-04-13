import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from "../components/sections/contact-section";

const meta = {
  title: "Sections/ContactSection",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
