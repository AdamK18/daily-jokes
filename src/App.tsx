import React from 'react';
import { Header } from 'components/Header';
import { JokeList } from 'components/JokeList';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <JokeList />
    </React.Fragment>
  );
};

export default App;
