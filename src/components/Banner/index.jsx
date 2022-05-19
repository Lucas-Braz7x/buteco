import React from 'react';
import { BannerContainer, TitlesContainer } from './styles';

export const Banner = () => {
  return (
    <BannerContainer>
      <TitlesContainer>
        <h1>Buteco - Encontre a melhor bebida para você</h1>
        <span>Encontre a bebida adequada para cada momento</span>
        <button>Veja nossos produtos</button>
      </TitlesContainer>
      <div>
        <img src="" alt="" />
      </div>
    </BannerContainer>
  );
};
