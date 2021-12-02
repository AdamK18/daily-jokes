import React from 'react';
import { MoreButtonPropsType } from 'types/types';
import { Button } from '@mui/material';

const MoreButton = ({ updateJoke }: MoreButtonPropsType) => {
  return (
    <div>
      <Button onClick={() => updateJoke()} variant="text">
        Több viccet kérek
      </Button>
    </div>
  );
};

export default MoreButton;
