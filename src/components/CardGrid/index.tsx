import { Image } from '@chakra-ui/react';
import Label from '@components/Label';
import LabelEnum from '@components/Label/enum';

import * as Style from './styles';

function CardGrid() {
  return (
    <Style.CustomCard>
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
