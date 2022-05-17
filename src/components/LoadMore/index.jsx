import React from 'react';
import { ButtonLoadMore, ButtonLoadMoreContainer } from './styles';
import * as P from 'prop-types';

export const LoadMore = ({ update }) => {
  return (
    <ButtonLoadMoreContainer onClick={update}>
      <ButtonLoadMore />
    </ButtonLoadMoreContainer>
  );
};

LoadMore.propTypes = {
  update: P.func,
};
