import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    height: '100px',
  },
});

export const Header = () => {
  const classes = useStyles();
  return <div className={classes.root}>Daily Norris</div>;
};

export default Header;
