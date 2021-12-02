import React from 'react';
import type { jokePropsType } from 'types';

const Joke = ({ joke }: jokePropsType) => {
  return <div>{joke}</div>;
};

export default Joke;
