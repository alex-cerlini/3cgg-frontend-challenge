import CardGrid from '@components/CardGrid';
import MenuTemplate from '@templates/menu';
import useList from './hook';
import Container from './styles';

function List() {
  const { data } = useList();

  return (
    <MenuTemplate>
      <Container>
        {data?.map((item) => {
          return <CardGrid name={item.name} url={item.url} />;
        })}
      </Container>
    </MenuTemplate>
  );
}

export default List;
