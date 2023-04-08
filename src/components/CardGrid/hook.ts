import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { PokemonDataProps } from './types';

const useCardGrid = (url: string) => {
  const [favorited, setFavorited] = useState<boolean>(false);
  const handleFavorite = () => setFavorited((prev) => !prev);

  const { data } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data as PokemonDataProps),
    refetchOnMount: false,
  });

  return { favorited, handleFavorite, data };
};
export default useCardGrid;
