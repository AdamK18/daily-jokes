import React, { useState, useEffect } from 'react';
import { CategoryList } from 'components/CategoryList';
import { Joke } from 'components/Joke';
import { fetchRandom } from 'api';
import { MoreButton } from 'components/MoreButton';
import { fetchRandomJokeType } from 'types/types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F0F5F9',
    minHeight: 'calc(100vh - 100px)',
    height: '100%',
    padding: '30px 0',
    textAlign: 'center',
  },
});

const Body = () => {
  const [joke, setJoke] = useState<string>('Please select a category.');
  const [category, setCategory] = useState<string>('');
  const classes = useStyles();

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
    <main className={classes.root}>
      <Joke joke={joke} />
      <MoreButton updateJoke={updateJoke} category={category} />
      <CategoryList setCategory={setCategory} currentCategory={category} />
    </main>
  );
};

export default Body;
