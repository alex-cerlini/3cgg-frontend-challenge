import MenuTemplate from '@templates/menu';
import * as Style from './styles';

function Home() {
  return (
    <MenuTemplate>
      <Style.Container>
        <Style.Title>Seja bem-vindo a Pokedex!</Style.Title>
        <Style.SubTitle>Utilize o menu para navegar.</Style.SubTitle>
      </Style.Container>
    </MenuTemplate>
  );
}

export default Home;
