import CardGrid from '@components/CardGrid';
import { RootState } from '@stores/favorites/state';
import MenuTemplate from '@templates/menu';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useList from './hook';
import Container from './styles';

function List() {
  const { data } = useList();

  return (
    <MenuTemplate>
      <Container>
        {data?.map((item) => (
          <CardGrid url={item.url} />
        ))}
      </Container>
    </MenuTemplate>
  );
}

export default List;
