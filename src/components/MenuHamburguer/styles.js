import styled from 'styled-components';

export const Hamburguer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3) {
    height: 4px;
    width: 25px;
    border-radius: 2px;
    background: black;
    margin-bottom: 4px;
    cursor: pointer;
  }

  @media (min-width: 481px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: block;
  }
`;
