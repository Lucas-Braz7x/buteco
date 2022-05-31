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

export const BeerImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;

  img:nth-child(1) {
    position: absolute;
    bottom: -20px;
    right: 200px;
  }
  img:nth-child(2) {
    position: absolute;
    bottom: 20px;
    right: 0px;
  }
  img:nth-child(3) {
    position: absolute;
    bottom: 20px;
    right: 315px;
  }

  @media (max-width: 925px) {
    max-height: 300px;
    max-width: 300px;

    img:nth-child(1) {
      right: 150px;
    }
    img:nth-child(3) {
      right: 270px;
    }
  }

  @media (max-width: 925px) {
    max-height: 300px;
    max-width: 300px;

    img:nth-child(1) {
      right: 60px;
    }
    img:nth-child(3) {
      right: 130px;
    }
  }
`;

export const BeerImage = styled.img`
  max-height: 400px;
  max-width: 400px;

  @media (max-width: 925px) {
    min-height: 200px;
    min-width: 200px;
  }

  @media (max-width: 850px) {
    max-height: 200px;
    max-width: 200px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
