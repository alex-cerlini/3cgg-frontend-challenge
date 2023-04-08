import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import List from '@pages/List';
import { Provider } from 'react-redux';
import store from '@stores/favorites/store';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
