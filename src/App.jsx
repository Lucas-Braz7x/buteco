import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Container, MainContainer } from './sytles/styles';

export const App = () => {
  useEffect(() => {
    fetch('https://sp-labs.vercel.app/api/cases').then((response) => console.log(response));
  });
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <MainContainer>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Product />} path="/produtos" />
          </Routes>
        </MainContainer>
      </Container>
    </BrowserRouter>
  );
};
