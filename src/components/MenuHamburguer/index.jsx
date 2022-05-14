import React, { useState } from 'react';
import * as P from 'prop-types';
import { Hamburguer } from './styles';

export const MenuHamburguer = ({ click }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (click) => {
    setOpenMenu(!openMenu);
    console.log('open', openMenu);
    click();
  };
  return (
    <Hamburguer open={openMenu} onClick={() => handleOpenMenu(click)}>
      <div open={openMenu}></div>
      <div open={openMenu}></div>
      <div open={openMenu}></div>
    </Hamburguer>
  );
};

MenuHamburguer.propTypes = {
  click: P.func.isRequired,
};
