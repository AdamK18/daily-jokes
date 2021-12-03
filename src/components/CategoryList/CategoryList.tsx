import React, { useState, useEffect } from 'react';
import type { categoryListPropsType, fetchCategoriesType } from 'types';
import { fetchCategories } from 'api';
import { Category } from 'components/Category';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '75% !important',
    margin: '30px auto 0 auto !important',
  },
});

const CategoryList = ({ setCategory, currentCategory }: categoryListPropsType) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const classes = useStyles();

  useEffect(() => {
    fetchCategories().then((categories: fetchCategoriesType) => {
      setCategoryList(categories.data);
    });
  }, []);

  return (
    <Grid className={classes.root} container alignItems="center" justifyContent="center">
      {categoryList.map((category) => (
        <Category key={category} category={category} setCategory={setCategory} currentCategory={currentCategory} />
      ))}
    </Grid>
  );
};

export default CategoryList;
