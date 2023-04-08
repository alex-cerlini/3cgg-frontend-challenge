import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)<FlexProps>`
  flex-direction: column;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Title = styled(Text)<TextProps>`
  font-size: 3rem;
`;

export const SubTitle = styled(Text)<TextProps>`
  font-size: 1.5rem;
`;
