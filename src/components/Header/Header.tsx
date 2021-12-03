import React from 'react';
import { makeStyles } from '@mui/styles';
import norris from 'img/norris.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1E2022',
    height: '100px',
    color: '#F0F5F9',
    fontSize: 'calc(26px + (44 - 26) * ((100vw - 300px) / (1600 - 300)));',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    height: '80%',
    margin: '0 30px 0 15px',
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img className={classes.img} src={norris} alt="Chuck Norris" />
      Daily Norris
    </header>
  );
};

export default Header;
