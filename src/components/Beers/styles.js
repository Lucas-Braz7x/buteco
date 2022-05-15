import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const BeerContainer = styled.div`
  margin-top: 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  gap: 20px;
  background: transparent;
  height: auto;
  width: 100%;
`;

export const BeerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  height: 400px;
  width: 280px;
  border: 1px solid red;
  border-left: 5px solid red;
  border-top: 5px solid red;
  border-bottom: 5px solid red;
  border-radius: 25px;
  padding: 10px;

  font-size: 1.2rem;
  font-family: Helvetica, sans-serif;

  position: relative;

  box-shadow: 0 0 20px ${colors.shadowColor};

  div {
    position: absolute;
    bottom: 10px;
    display: flex;
    gap: 50px;

    span {
      display: inline-block;
    }

    span:nth-child(1) {
      color: ${(props) => (props.abv < 6 ? '#11BF45' : '#FF4141')};
    }
    span:nth-child(2) {
      color: ${(props) => (props.ibu < 60 ? '#11BF45' : '#FF4141')};
    }
  }
`;

export const BeerName = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: 'FreeMono', monospace;
`;

export const BeerImage = styled.img`
  height: 200px;
  width: 100px;
`;

export const BeerDescription = styled.span`
  display: block;
  width: 100%;
  max-height: 85px;
  overflow: hidden;

  text-overflow: ellipsis;
`;
