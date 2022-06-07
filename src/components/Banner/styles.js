import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const BannerContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  overflow: hidden;

  padding: 20px;

  width: 100vw;
  height: calc(100vh - 40px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(
    to right,
    ${colors.lightBackground} 5%,
    ${colors.lightBackground} 20%,
    ${colors.primaryColor}
  );

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const TitlesContainer = styled.div`
  max-width: 403px;
  width: 100%;
  text-align: left;
  color: ${colors.textColor};

  h1 {
    font-weight: 600;
    font-size: 5.5rem;
    line-height: 8.2rem;
  }

  span {
    display: block;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-bottom: 50px;
  }
`;
