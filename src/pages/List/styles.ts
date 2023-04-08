import { Box, BoxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Container = styled(Box)<BoxProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  justify-items: center;
  margin: 3rem 0;
  row-gap: 1.5rem;
`;

export default Container;
