import React from 'react';
import type { jokePropsType } from 'types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '60px',
    height: 'fit-content',
    fontSize: '18px',
    width: '90%',
    margin: '0 auto 20px auto',
  },
});

const Joke = ({ joke }: jokePropsType) => {
  const classes = useStyles();
  return <div className={classes.root}>{joke}</div>;
};

export default Joke;
