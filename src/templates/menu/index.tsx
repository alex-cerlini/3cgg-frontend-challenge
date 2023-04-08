import { Box, Flex } from '@chakra-ui/react';
import Menu from '@components/Menu';

import { MenuProps } from './types';

function MenuTemplate({ children }: MenuProps) {
  return (
    <Flex direction="column">
      <Menu />
      <Box>{children}</Box>
    </Flex>
  );
}

export default MenuTemplate;
