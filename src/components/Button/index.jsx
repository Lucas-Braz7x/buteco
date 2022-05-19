import React from 'react';
import './styles';
import * as P from 'prop-types';
import { ButtonContainer } from './styles';
import { Link } from 'react-router-dom';

export const Button = ({ children, widthButton, heightButton, redirect }) => {
  return (
    <Link to={redirect}>
      <ButtonContainer widthButton={widthButton} heightButton={heightButton}>
        {children}
      </ButtonContainer>
    </Link>
  );
};

Button.propTypes = {
  widthButton: P.number.isRequired,
  heightButton: P.number.isRequired,
  children: P.string,
  redirect: P.string,
};
