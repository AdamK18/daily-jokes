export type categoryListPropsType = {
  currentCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type categoryPropsType = {
  category: string;
  currentCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type jokePropsType = {
  joke: string;
};

export type MoreButtonPropsType = {
  updateJoke: () => void;
  category: string;
};

export type fetchCategoriesType = {
  data: string[];
};

export type fetchRandomJokeType = {
  data: {
    value: string;
  };
};
