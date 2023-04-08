import { useState } from 'react';

const useCardGrid = (url: string) => {
  const [favorited, setFavorited] = useState<boolean>(false);
  const handleFavorite = () => setFavorited((prev) => !prev);
  return { favorited, handleFavorite };
};
export default useCardGrid;
