import type { Meta, StoryObj } from "@storybook/react";

import StoryHomePage from "../pages/HomePage";

const meta = {
  title: "Pages/HomePage",
  component: StoryHomePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StoryHomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
