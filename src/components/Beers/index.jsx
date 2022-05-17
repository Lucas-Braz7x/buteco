import React, { useEffect, useState } from 'react';
import { BeersCard } from '../BeersCard';
import { LoadMore } from '../LoadMore';
import { BeerContainer } from './styles';

export const Beers = () => {
  const [dataBeers, setDataBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [updateBeers, setUpdateBeers] = useState(false);
  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    loadMoreBeers();
  }, [dataBeers, updateBeers]);

  const loadMoreBeers = () => {
    const count = filteredBeers.length;
    setFilteredBeers((s) => s.concat(dataBeers.slice(count, count + 5)));
  };

  const handleUpdate = () => {
    loadMoreBeers();
    setUpdateBeers(!updateBeers);
    console.log('data', dataBeers.length);
    console.log('filter', filteredBeers.length);
  };

  const getContent = () => {
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
      .then((response) => response.json())
      .then((data) => setDataBeers(data));
  };
  return (
    <>
      <BeerContainer>
        {filteredBeers.map((beer, indice) => (
          <BeersCard key={indice} beer={beer} />
        ))}
      </BeerContainer>

      {dataBeers.length != filteredBeers.length && <LoadMore update={handleUpdate} />}
    </>
  );
};
