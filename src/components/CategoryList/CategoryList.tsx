import React, { useState, useEffect } from 'react';
import type { categoryListPropsType } from 'types';
import { fetchCategories } from 'api';
import { Category } from 'components/Category';

const CategoryList = ({ setCategory }: categoryListPropsType) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategoryList(categories.data);
    });
  }, []);

  return (
    <div>
      {categoryList.map((category, i) => {
        return (
          <React.Fragment key={i}>
            <Category category={category} setCategory={setCategory} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoryList;
