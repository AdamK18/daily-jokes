import React, { useState } from 'react';

interface jokeProps {
  joke: string;
}

const Joke = ({ joke }: jokeProps) => {
  return <div>{joke}</div>;
};

export default Joke;
