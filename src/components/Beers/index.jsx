import React, { useEffect, useState } from 'react';
import { BeerCard, BeerContainer, BeerDescription, BeerImage, BeerName } from './styles';

export const Beers = () => {
  const [dataBeers, setDataBeers] = useState([]);
  const teste = 0;
  useEffect(() => {
    getContent();
  }, [teste]);

  const getContent = () => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=40')
      .then((response) => response.json())
      .then((data) => setDataBeers(data));
  };
  return (
    <BeerContainer>
      {dataBeers.map((beer, indice) => (
        <BeerCard abv={beer.abv} ibu={beer.ibu} key={indice}>
          <BeerName>{beer.name}</BeerName>
          <BeerImage src={beer.image_url} alt={`Imagem da cerveja ${beer.name}`} />
          <p>{beer.tagline}</p>
          <BeerDescription>Descrição: {beer.description}</BeerDescription>
          <div>
            <span>abv: {beer.abv}</span>
            <span>ibu: {beer.ibu}</span>
          </div>
        </BeerCard>
      ))}
    </BeerContainer>
  );
};
