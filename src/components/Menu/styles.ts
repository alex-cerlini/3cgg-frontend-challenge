import { Flex, FlexProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Container = styled(Flex)<FlexProps>`
  background-color: ${(props) => props.theme.colors.purple['500']};
  color: white;
  padding: 0 1rem;
  width: 100%;
  height: 100px;
  align-items: center;
  column-gap: 2rem;
`;

export default Container;
