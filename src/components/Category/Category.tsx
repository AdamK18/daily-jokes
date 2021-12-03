import React from 'react';
import type { categoryPropsType } from 'types';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    paddingLeft: '0 !important',
  },
  button: {
    color: '#1E2022 !important',
  },
});

const Category = ({ category, setCategory, currentCategory }: categoryPropsType) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Button
        className={classes.button}
        onClick={() => setCategory(category)}
        variant={currentCategory === category ? 'outlined' : 'text'}
      >
        {category}
      </Button>
    </Grid>
  );
};

export default Category;
