import styled from 'styled-components';
import { colors } from '../../theme/colors';

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
  @media (max-width: 480px) {
    display: ${(props) => (props.clicked ? 'flex' : 'block')};
    justify-content: ${(props) => (props.clicked ? 'center' : 'flex-start')};
    position: ${(props) => (props.clicked ? 'fixed' : 'relative')};
    top: ${(props) => (props.clicked ? '40px' : '0')};
    left: 0;

    padding: ${(props) => (props.clicked ? '20px' : '0')};

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

  li {
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: bold;
    transition: transform 0.3s;
  }

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
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;
