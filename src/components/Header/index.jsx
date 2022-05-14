import React, { useState } from 'react';
import { HeaderContainer, ListInfo, Logo, NavMenu } from './styles';
import logo from '../../assets/images/logo.svg';
import { MenuHamburguer } from '../MenuHamburguer';

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da loja buteco" />
      <MenuHamburguer click={handleClick} />
      <NavMenu id="navigate" clicked={clicked}>
        <ListInfo clicked={clicked}>
          <li>Home</li>
          <li>sobre</li>
          <li>contatos</li>
          <li>favoritos</li>
          <li>carrinho</li>
        </ListInfo>
      </NavMenu>
    </HeaderContainer>
  );
};
