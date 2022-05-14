import styled, { keyframes } from 'styled-components';

const entryAnimate = keyframes`
  0 % { opacity: 0; }
  50 % { opacity: .5; }
  100 % { opacity: 1; }
`;

const leftAnimate = keyframes`
  0 % { opacity: 1; }
  50 % { opacity: .5; }
  100 % { opacity: 0; }
`;

export const Hamburguer = styled.div`
  position: absolute;
  right: 20px;
  height: %100;

  div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3) {
    height: 4px;
    width: 25px;
    border-radius: 2px;
    background: black;
    margin-bottom: 5px;
    cursor: pointer;

    animation: ${entryAnimate} 3s 0.2;
  }

  div:nth-child(2) {
    animation: ${leftAnimate} 3s 0.2;
    display: ${(props) => (props.open ? 'none' : 'block')};
  }

  div:nth-child(1) {
    position: ${(props) => (props.open ? 'absolute' : 'relative')};
    top: ${(props) => (props.open ? '1px' : '0')};
    transform: rotate(${(props) => (props.open ? '45deg' : '0')});
  }

  div:nth-child(3) {
    transform: rotate(${(props) => (props.open ? '315deg' : '0')});
  }

  @media (min-width: 481px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: block;
  }
`;
