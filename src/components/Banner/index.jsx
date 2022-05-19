import React from 'react';
import { Button } from '../Button';
import { BannerContainer, BeerImage, BeerImageContainer, TitlesContainer } from './styles';
import beer from '../../assets/images/beer.svg';
/* import chopp from '../../assets/images/beer2.svg';
import champagne from '../../assets/images/champagne.svg'; */
import bottle from '../../assets/images/bottle.svg';
import wine from '../../assets/images/wine.svg';

export const Banner = () => {
  const widthButton = 200;
  const heightButton = 48;
  const redirect = '/produtos';
  return (
    <BannerContainer>
      <TitlesContainer>
        <h1>Buteco</h1>
        <h2>Encontre a melhor bebida para você</h2>
        <span>Encontre a bebida adequada para cada momento</span>
        <Button redirect={redirect} widthButton={widthButton} heightButton={heightButton}>
          Veja nossos produtos
        </Button>
      </TitlesContainer>
      <BeerImageContainer>
        <BeerImage src={bottle} alt="" />
        <BeerImage src={beer} alt="" />
        <BeerImage src={wine} alt="" />
      </BeerImageContainer>
    </BannerContainer>
  );
};
