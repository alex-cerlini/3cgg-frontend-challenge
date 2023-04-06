import {
  Card,
  CardBody,
  CardBodyProps,
  CardFooter,
  CardFooterProps,
  CardProps,
  Flex,
  FlexProps,
  Text,
  TextProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CustomCard = styled(Card)<CardProps>`
  width: 300px;
  height: 350px;
`;

export const CustomBody = styled(CardBody)<CardBodyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomFooter = styled(CardFooter)<CardFooterProps>`
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled(Flex)<FlexProps>`
  flex-direction: column;
  justify-content: space-between;
`;

export const PokemonId = styled(Text)<TextProps>``;

export const PokemonName = styled(Text)<TextProps>`
  font-size: 1.25rem;
`;

export const TypesContainer = styled(Flex)<FlexProps>`
  flex-direction: column;
  row-gap: 0.5rem;
  height: 68px;
`;
