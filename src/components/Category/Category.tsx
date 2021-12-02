import React from 'react';
import type { categoryPropsType } from 'types';

const Category = ({ category, setCategory }: categoryPropsType) => {
  return <div onClick={() => setCategory(category)}>{category}</div>;
};

export default Category;
