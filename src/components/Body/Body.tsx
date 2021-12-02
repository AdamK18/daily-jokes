import React, { useState, useEffect } from 'react';
import { CategoryList } from 'components/CategoryList';
import { Joke } from 'components/Joke';
import { fetchRandom } from 'api';
import { MoreButton } from 'components/MoreButton';
import { fetchRandomJokeType } from 'types/types';

const Body = () => {
  const [joke, setJoke] = useState<string>('Válassz egy kategóriát!');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (category.length > 0) {
      updateJoke();
    }
  }, [category]);

  const updateJoke = () => {
    fetchRandom(category).then((joke: fetchRandomJokeType) => {
      setJoke(joke.data.value);
    });
  };

  return (
    <div>
      <Joke joke={joke} />
      {category.length > 0 && <MoreButton updateJoke={updateJoke} />}
      <CategoryList setCategory={setCategory} />
    </div>
  );
};

export default Body;
