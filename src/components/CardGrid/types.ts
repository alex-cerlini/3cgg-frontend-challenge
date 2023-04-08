import LabelEnum from '@componentsLabel/enum';

export type PokemonDataProps = {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
  types: {
    type: {
      name: keyof LabelEnum;
    };
  }[];
};

export type CardGridProps = {
  url: string;
};
