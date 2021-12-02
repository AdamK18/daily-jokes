import axios from 'axios';

export const fetchCategories = () => {
  return axios.get('https://api.chucknorris.io/jokes/categories');
};

export const fetchRandom = (category: string) => {
  return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
};
