import React from 'react';
import { Beers } from '../../components/Beers';
import { Search } from '../../components/Search';

export const Home = () => {
  return (
    <>
      <Search />
      <Beers />
    </>
  );
};
