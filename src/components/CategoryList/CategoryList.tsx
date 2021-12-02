import React, { useState, useEffect } from 'react';
import type { categoryListPropsType, fetchCategoriesType } from 'types';
import { fetchCategories } from 'api';
import { Category } from 'components/Category';

const CategoryList = ({ setCategory }: categoryListPropsType) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories().then((categories: fetchCategoriesType) => {
      setCategoryList(categories.data);
    });
  }, []);

  return (
    <div>
      {categoryList.map((category) => {
        return (
          <React.Fragment key={category}>
            <Category category={category} setCategory={setCategory} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoryList;
