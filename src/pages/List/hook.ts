import axios from 'axios';
import { useQuery } from 'react-query';

import { PokemonDataProps } from './types';

const useList = () => {
  const { error, data } = useQuery({
    queryKey: ['pokedexData'],
    queryFn: () =>
      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then((res) => res.data.results as Array<PokemonDataProps>),
  });
  return { error, data };
};

export default useList;
