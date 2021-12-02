import React, { useState, useEffect } from 'react';
import { CategoryList } from 'components/CategoryList';
import { Joke } from 'components/Joke';
import { fetchRandom } from 'api';

const Body = () => {
  const [joke, setJoke] = useState<string>('Válassz egy kategóriát!');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (category.length > 0) {
      fetchRandom(category).then((joke) => {
        setJoke(joke.data.value);
      });
    }
  }, [category]);

  return (
    <div>
      <Joke joke={joke} />
      <CategoryList setCategory={setCategory} />
    </div>
  );
};

export default Body;
