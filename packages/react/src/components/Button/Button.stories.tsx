import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./Button";
import { BiomeProvider } from "../../theme/BiomeProvider";

const meta: Meta<typeof Button> = {
  title: "Biomerra UI/Button",
  component: Button,
  decorators: [
    (Story, context) => (
      <BiomeProvider biome={context.globals.biome ?? "redwood-forest"}>
        <Story />
      </BiomeProvider>
    )
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "soft", "ghost", "outline"]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button"
  }
};
