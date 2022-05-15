import React from 'react';
import { LogoContainer, SearchContainer, SearchInput } from './styles';
import logo from '../../assets/images/logo2.png';

export const Search = () => {
  return (
    <SearchContainer>
      <LogoContainer>
        <img src={logo} alt="Logo da loja buteco" />
      </LogoContainer>

      <div>
        <SearchInput type="text" />
      </div>
    </SearchContainer>
  );
};
