import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import List from '@pages/List';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
