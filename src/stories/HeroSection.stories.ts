import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "../components/sections/hero-section";
import "../App.css";

const meta = {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
