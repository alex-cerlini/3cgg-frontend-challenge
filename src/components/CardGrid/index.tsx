import * as Style from './styles';
import { Image } from '@chakra-ui/react';
import Label from '@components/Label';
import LabelEnum from '@components/Label/enum';

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
          <Style.pokemonId>N° 001</Style.pokemonId>
          <Style.pokemonName>Bulbasaur</Style.pokemonName>
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
