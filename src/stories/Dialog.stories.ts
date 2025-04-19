import { Meta, StoryObj } from "@storybook/react";
import { DialogDemo } from "@/components/settings-dialog";

const meta: Meta<typeof DialogDemo> = {
  title: "Components/Dialog",
  component: DialogDemo,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DialogDemo>;

export const Default: Story = {};
