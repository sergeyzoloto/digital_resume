import { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "@/components/navigation-bar";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {};
