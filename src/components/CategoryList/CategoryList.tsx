import React, { useState, useEffect } from 'react';
import { fetchCategories } from 'api';
import { Category } from 'components/Category';

interface jokeProps {
  setJoke: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = ({ setJoke }: jokeProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    fetchCategories().then((categoriesData) => {
      setCategories(categoriesData.data);
    });

    /* fetchRandom('fashion').then((joke) => {
        console.log(joke.data);
      }); */
  }, []);

  return (
    <div>
      {categories.map((category, i) => {
        return (
          <React.Fragment key={i}>
            <Category category={category} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoryList;
