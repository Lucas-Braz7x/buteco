import React from 'react';
import { Button } from '../Button';
import { BannerContainer, TitlesContainer } from './styles';
import { Form } from '../Form';

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
      <Form />
    </BannerContainer>
  );
};
