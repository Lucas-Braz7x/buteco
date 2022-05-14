import React from 'react';
import * as P from 'prop-types';
import { Hamburguer } from './styles';

export const MenuHamburguer = ({ click }) => {
  return (
    <Hamburguer onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </Hamburguer>
  );
};

MenuHamburguer.propTypes = {
  click: P.func.isRequired,
};
