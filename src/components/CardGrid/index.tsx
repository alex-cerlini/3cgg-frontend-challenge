import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { Icon, Image } from '@chakra-ui/react';
import Label from '@components/Label';
import LabelEnum from '@components/Label/enum';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';
import formatPokemonId from '@utils/formatPokemonId';

import useCardGrid from './hook';
import * as Style from './styles';
import { CardGridProps } from './types';

function CardGrid({ url }: CardGridProps) {
  const { favorited, handleFavorite, data } = useCardGrid(url);

  return (
    <Style.CustomCard>
      <Style.FavoriteContainer>
        <Icon
          as={!favorited ? MdOutlineFavoriteBorder : MdOutlineFavorite}
          color={!favorited ? 'white' : 'red'}
          onClick={handleFavorite}
        />
      </Style.FavoriteContainer>
      <Style.CustomBody>
        <Image
          src={data && data.sprites.other['official-artwork'].front_default}
          alt={data?.name && capitalizeFirstLetter(data?.name)}
          maxHeight={200}
        />
      </Style.CustomBody>
      <Style.CustomFooter>
        <Style.TitleContainer>
          <Style.PokemonId>
            N° {data?.id && formatPokemonId(data?.id)}
          </Style.PokemonId>
          <Style.PokemonName>
            {data?.name && capitalizeFirstLetter(data?.name)}
          </Style.PokemonName>
        </Style.TitleContainer>
        <Style.TypesContainer>
          {data?.types.map((item) => (
            <Label
              title={String(item.type.name)}
              type={LabelEnum[item.type.name as keyof typeof LabelEnum]}
            />
          ))}
        </Style.TypesContainer>
      </Style.CustomFooter>
    </Style.CustomCard>
  );
}

export default CardGrid;
