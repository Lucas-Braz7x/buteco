import React, { useState } from 'react';
import { BeerCard, BeerDescription, BeerImage, BeerLikes, BeerName } from './styles';
import * as P from 'prop-types';

export const BeersCard = ({ beer }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
  };
  return (
    <BeerCard abv={beer.abv} ibu={beer.ibu}>
      <div onClick={handleIsLiked}>
        <BeerLikes onClick={handleIsLiked} liked={isLiked} />
      </div>
      <BeerName>{beer.name}</BeerName>
      <BeerImage src={beer.image_url} alt={`Imagem da cerveja ${beer.name}`} />
      <p>{beer.tagline}</p>
      <BeerDescription>Descrição: {beer.description}</BeerDescription>
      <div id="indexs">
        <span>abv: {beer.abv}</span>
        <span>ibu: {beer.ibu}</span>
      </div>
    </BeerCard>
  );
};

BeersCard.propTypes = {
  beer: P.object.isRequired,
  abv: P.number,
  ibu: P.number,
  name: P.string,
  image_url: P.string,
  tagline: P.string,
  description: P.string,
};
