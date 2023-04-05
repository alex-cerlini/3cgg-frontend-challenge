import { Box, Flex } from '@chakra-ui/react';

import { MenuProps } from './types';

function MenuTemplate({ children }: MenuProps) {
  return (
    <Flex direction="column">
      <Flex>Menu aqui</Flex>
      <Box>{children}</Box>
    </Flex>
  );
}

export default MenuTemplate;
