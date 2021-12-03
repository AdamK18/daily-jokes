import React from 'react';
import { MoreButtonPropsType } from 'types/types';
import { Button } from '@mui/material';

const MoreButton = ({ updateJoke, category }: MoreButtonPropsType) => {
  return (
    <Button size="large" disabled={category.length === 0} onClick={() => updateJoke()} variant="text">
      Load more jokes
    </Button>
  );
};

export default MoreButton;
