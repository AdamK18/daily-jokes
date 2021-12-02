import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

export const Header = () => {
  const classes = useStyles();
  return <div className={classes.root}>Daily jokes</div>;
};

export default Header;
