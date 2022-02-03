import { ImagesProvider } from './hooks/useImages';

import { GlobalStyle } from './styles/global';

import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <ImagesProvider>
      <Dashboard />
      <GlobalStyle />
    </ImagesProvider>
  );
}

export default App;
