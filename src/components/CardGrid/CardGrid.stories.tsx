import type { Meta, StoryObj } from '@storybook/react';

import CardGrid from '.';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store, { persistor } from '@stores/favorites/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';

const queryClient = new QueryClient();

const meta: Meta<typeof CardGrid> = {
  title: 'CardGrid',
  component: CardGrid,
  args: {
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
};

export default meta;

export const Primary = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators: [
    (Story: any) => (
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Story />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    ),
  ],
};
