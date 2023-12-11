import React from 'react';
import { PacmanLoader } from 'react-spinners';

export const Loader = loading => {
  if (loading === true) return <PacmanLoader color="#d5e3f0" />;
};
