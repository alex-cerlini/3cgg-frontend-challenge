import type { Meta, StoryObj } from '@storybook/react';

import Label from '.';
import LabelEnum from './enum';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Normal: Story = {
  args: {
    title: 'normal',
    type: LabelEnum.normal,
  },
};

export const Fighting: Story = {
  args: {
    title: 'fighting',
    type: LabelEnum.fighting,
  },
};

export const Flying: Story = {
  args: {
    title: 'flying',
    type: LabelEnum.flying,
  },
};

export const Poison: Story = {
  args: {
    title: 'poison',
    type: LabelEnum.poison,
  },
};

export const Ground: Story = {
  args: {
    title: 'ground',
    type: LabelEnum.ground,
  },
};

export const Rock: Story = {
  args: {
    title: 'rock',
    type: LabelEnum.rock,
  },
};

export const Bug: Story = {
  args: {
    title: 'bug',
    type: LabelEnum.bug,
  },
};

export const Ghost: Story = {
  args: {
    title: 'ghost',
    type: LabelEnum.ghost,
  },
};

export const Steel: Story = {
  args: {
    title: 'steel',
    type: LabelEnum.steel,
  },
};

export const Fire: Story = {
  args: {
    title: 'fire',
    type: LabelEnum.fire,
  },
};

export const Water: Story = {
  args: {
    title: 'water',
    type: LabelEnum.water,
  },
};

export const Grass: Story = {
  args: {
    title: 'grass',
    type: LabelEnum.grass,
  },
};

export const Electric: Story = {
  args: {
    title: 'electric',
    type: LabelEnum.electric,
  },
};

export const Psychic: Story = {
  args: {
    title: 'psychic',
    type: LabelEnum.psychic,
  },
};

export const Ice: Story = {
  args: {
    title: 'ice',
    type: LabelEnum.ice,
  },
};

export const Dragon: Story = {
  args: {
    title: 'dragon',
    type: LabelEnum.dragon,
  },
};

export const Dark: Story = {
  args: {
    title: 'dark',
    type: LabelEnum.dark,
  },
};

export const Fairy: Story = {
  args: {
    title: 'fairy',
    type: LabelEnum.fairy,
  },
};
