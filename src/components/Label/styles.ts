import { Flex, FlexProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

import LabelEnum from './enum';

const Container = styled(Flex)<FlexProps & { type: LabelEnum }>`
  background-color: ${(props) => props.type};
  color: black;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 75px;
  height: 30px;
  font-size: 0.875rem;
`;

export default Container;
