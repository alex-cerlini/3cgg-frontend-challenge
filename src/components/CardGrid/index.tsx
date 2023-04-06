import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import { Icon, Image } from '@chakra-ui/react';
import Label from '@components/Label';
import LabelEnum from '@components/Label/enum';

import useCardGrid from './hook';
import * as Style from './styles';

function CardGrid() {
  const { favorited, handleFavorite } = useCardGrid();

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
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="nome do pokemon"
          maxHeight={200}
        />
      </Style.CustomBody>
      <Style.CustomFooter>
        <Style.TitleContainer>
          <Style.PokemonId>N° 001</Style.PokemonId>
          <Style.PokemonName>Bulbasaur</Style.PokemonName>
        </Style.TitleContainer>
        <Style.TypesContainer>
          <Label title="grass" type={LabelEnum.grass} />
          <Label title="poison" type={LabelEnum.poison} />
        </Style.TypesContainer>
      </Style.CustomFooter>
    </Style.CustomCard>
  );
}

export default CardGrid;
