import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Container, MainContainer } from './sytles/styles';

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <MainContainer>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </MainContainer>
      </Container>
    </BrowserRouter>
  );
};
