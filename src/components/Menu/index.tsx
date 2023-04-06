import Pokeball from '@components/icons/Pokeball';
import * as Style from './styles';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Style.Container>
      <Pokeball />
      <Link to="/">Home</Link>
      <Link to="/list">Listagem</Link>
    </Style.Container>
  );
}

export default Menu;
