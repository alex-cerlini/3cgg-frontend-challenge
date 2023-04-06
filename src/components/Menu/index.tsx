import { Link } from 'react-router-dom';

import Pokeball from '@components/icons/Pokeball';

import Container from './styles';

function Menu() {
  return (
    <Container>
      <Pokeball />
      <Link to="/">Home</Link>
      <Link to="/list">Listagem</Link>
    </Container>
  );
}

export default Menu;
