import React from 'react';
import './styles';
import * as P from 'prop-types';
import { ButtonContainer } from './styles';

export const Button = ({ children, widthButton, heightButton }) => {
  return (
    <ButtonContainer widthButton={widthButton} heightButton={heightButton}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  widthButton: P.number.isRequired,
  heightButton: P.number.isRequired,
  children: P.string,
};
