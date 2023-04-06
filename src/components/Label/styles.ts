import { Flex, FlexProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)<FlexProps>`
  background-color: ${(props) => props.type};
  color: black;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 75px;
  height: 30px;
  font-size: 0.875rem;
`;
