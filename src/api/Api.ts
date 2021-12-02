import axios from 'axios';
import type { fetchRandomType } from 'types';

export const fetchCategories = () => {
  return axios.get<string[]>('https://api.chucknorris.io/jokes/categories');
};

export const fetchRandom = (category: string) => {
  return axios.get<fetchRandomType>(`https://api.chucknorris.io/jokes/random?category=${category}`);
};
