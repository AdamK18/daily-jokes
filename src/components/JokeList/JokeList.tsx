import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchRandom } from 'api';

const JokeList = () => {
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
        return <div key={i}>{category}</div>;
      })}
    </div>
  );
};

export default JokeList;
