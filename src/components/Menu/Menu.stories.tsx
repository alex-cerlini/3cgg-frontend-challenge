import type { Meta } from '@storybook/react';

import Menu from '.';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};

export default meta;

export const Primary = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators: [
    (Story: any) => (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ChakraProvider>
    ),
  ],
};
