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

export type fetchRandomType = {
  value: string;
};
