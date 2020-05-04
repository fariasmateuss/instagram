import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import History from './components/History/History';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <History />
      <Routes />
    </BrowserRouter>
  );
}

export default App;