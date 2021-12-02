export type categoryListPropsType = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type categoryPropsType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type jokePropsType = {
  joke: string;
};

export type MoreButtonPropsType = {
  updateJoke: () => void;
};

export type fetchCategoriesType = {
  data: string[];
};

export type fetchRandomJokeType = {
  data: {
    value: string;
  };
};
