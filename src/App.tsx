import React from 'react';
import { AppProvider } from './context';
import Game from './components/game';

const App = () => {
  return (
    <AppProvider>
        <Game />
    </AppProvider>
  );
}

export default App;