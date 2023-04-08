import { RootState } from '@stores/favorites/state';
import { addFavorite, removeFavorite } from '@stores/favorites/actions';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonDataProps } from './types';

const useCardGrid = (url: string) => {
  const { data } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data as PokemonDataProps),
    refetchOnMount: false,
  });

  const favorites = useSelector((state: RootState) => state.favorites);

  const favorited = favorites.includes(data?.id ?? 0);

  const dispatch = useDispatch();

  const handleAdd = (id: number | undefined) => {
    if (id) dispatch(addFavorite(id));
  };

  const handleRemove = (id: number | undefined) => {
    if (id) dispatch(removeFavorite(id));
  };

  return { favorited, data, handleAdd, handleRemove };
};
export default useCardGrid;
