import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import React from "react";
import { Section } from "../components/ui/section";
import { Button } from "./Button";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    fullHeight: { control: "boolean" },
    useCarouselOnMobile: { control: "boolean" },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleChildren: ReactNode[] = [
  React.createElement(Button, { label: "First", key: "1" }),
  React.createElement(Button, { label: "Second", key: "2" }),
  React.createElement(Button, { label: "Third", key: "3" }),
];

export const Default: Story = {
  args: {
    id: "example-section",
    title: "Sample Section",
    description: "This is a demo section with default layout.",
    children: sampleChildren,
  },
};

export const WithCarouselOnMobile: Story = {
  args: {
    id: "carousel-section",
    title: "Carousel Section",
    description: "Appears as a carousel on mobile.",
    useCarouselOnMobile: true,
    children: sampleChildren,
  },
};

export const NoFullHeight: Story = {
  args: {
    id: "minheight-section",
    title: "Min Height Section",
    fullHeight: false,
    children: sampleChildren,
  },
};
