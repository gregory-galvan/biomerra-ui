import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, BiomeProvider, Flex } from '@biomerra-ui/react';

const meta: Meta<typeof Button> = {
  title: 'Biomerra UI/Button',
  component: Button,
  decorators: [
    (Story, context) => (
      <Flex direction="column" gap="">
        <BiomeProvider biome={context.globals.biome ?? 'redwood-forest'}>
          <Story />
        </BiomeProvider>
        <BiomeProvider biome={context.globals.biome ?? 'deep-ocean'}>
          <Story />
        </BiomeProvider>
        <BiomeProvider biome={context.globals.biome ?? 'desert-sands'}>
          <Story />
        </BiomeProvider>
        <BiomeProvider biome={context.globals.biome ?? 'sunset-canyon'}>
          <Story />
        </BiomeProvider>
      </Flex>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'soft', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};
