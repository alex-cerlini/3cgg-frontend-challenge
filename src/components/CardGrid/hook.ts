import { useState } from 'react';

const useCardGrid = () => {
  const [favorited, setFavorited] = useState<boolean>(false);
  const handleFavorite = () => setFavorited((prev) => !prev);
  return { favorited, handleFavorite };
};
export default useCardGrid;
