import React, { useState } from 'react';
import { CategoryList } from 'components/CategoryList';
import { Joke } from 'components/Joke';

const Body = () => {
  const [joke, setJoke] = useState<string>('Válassz egy kategóriát!');

  return (
    <div>
      <Joke joke={joke} />
      <CategoryList setJoke={setJoke} />
    </div>
  );
};

export default Body;
