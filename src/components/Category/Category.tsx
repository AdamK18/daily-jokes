import React from 'react';

interface categoryProps {
  category: string;
}

const Category = ({ category }: categoryProps) => {
  return <div>{category}</div>;
};

export default Category;
