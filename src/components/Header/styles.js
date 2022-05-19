import styled, { keyframes } from 'styled-components';
import { colors } from '../../theme/colors';

/*eslint-disable*/
const navigateEntryAnimate = keyframes`
  0%{height: 0;}
  25%{height: 25%;}
  50%{height: 50%;}
  75%{height: 75%;}
  100%{height: 100%;}
`;

const navigateLeftAnimate = keyframes`
  0%{height: 100%;}
  25%{height: 75%;}
  50%{height: 50%;}
  75%{height: 25%;}
  100%{height: 0;}
`;

const listAnimate = keyframes`
  from{opacity: 0;}
  to{opacity: 1;}
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  color: ${colors.textColor};
  background: ${colors.primaryColor};
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 10px 10px 30px ${colors.shadowColor};
  z-index: 10;
`;

export const NavMenu = styled.nav`
z-index: 9;
@media (max-width: 480px) {
    animation: ${(props) => (props.clicked ? navigateEntryAnimate : navigateLeftAnimate)}  2s ease;
    display: ${(props) => (props.clicked ? 'flex' : 'block')};
    justify-content: ${(props) => (props.clicked ? 'center' : 'flex-start')};
    position: ${(props) => (props.clicked ? 'fixed' : 'relative')};
    top: ${(props) => (props.clicked ? '40px' : '0')};
    left: 0;

    height: ${(props) => (props.clicked ? '100vh' : '100%')};
    width: ${(props) => (props.clicked ? '100vw' : 'auto')};

    background: ${(props) => (props.clicked ? colors.modalColor : 'transparent')};
  }
`;

export const ListInfo = styled.ul`
  display: ${(props) => (props.clicked ? 'flex' : 'none')};
  gap: 10px;
  list-style: none;
  text-decoration: none;

  li,
  li a{
    color: ${colors.textColor};
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: bold;
    transition: transform 0.3s;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  li a:hover,
  li:hover {
    color: ${colors.greyColor};
    cursor: pointer;
    filter: brightness(1.2);
    transform: scale(1.1);
  }
  @media (min-width: 480px) {
    display: flex;
  }

  @media (max-width: 480px) {
    margin-top: 20vh;
    opacity: 0;
    animation: ${(props) => (props.clicked ? listAnimate : '')}  2s 1s forwards;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  margin-left: -20px;
  width: 60px;
  height: 60px;
`;
