import React from 'react';
import { DivContainer, FormContainer, FormInput, FormTitle } from './styles';
import { Button } from '../Button';

export const Form = () => {
  return (
    <FormContainer action="" method="post">
      <FormTitle>Fique sempre por dentro de tudo que acontece aqui!</FormTitle>
      <DivContainer>
        <FormInput required placeholder="Digite o seu nome" type="text" />
        <FormInput required placeholder="Digite o seu Email" type="text" />
      </DivContainer>
      <DivContainer>
        <div>
          <input required type="checkbox" />
          <span>Deseja receber ofertas de novos produtos</span>
        </div>

        <div>
          <Button redirect="#" widthButton={100} heightButton={30}>
            Enviar
          </Button>
        </div>
      </DivContainer>
    </FormContainer>
  );
};
