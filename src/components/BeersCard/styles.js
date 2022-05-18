import styled from 'styled-components';
import { colors } from '../../theme/colors';

const notLiked =
  "path( 'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181')";

const isLiked =
  "path('M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z')";

export const BeerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  height: 380px;
  background: #ebeadf;
  border: 1px solid ${colors.shadowColor};
  border-left: 5px solid ${colors.shadowColor};
  border-top: 5px solid ${colors.shadowColor};
  border-bottom: 5px solid ${colors.shadowColor};
  border-radius: 25px;
  padding: 10px;

  font-size: 1.2rem;
  font-family: Helvetica, sans-serif;

  position: relative;

  box-shadow: 0 0 20px ${colors.shadowColor};

  #indexs {
    position: absolute;
    bottom: 20px;
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

  div:nth-child(1) {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 2;

    transition: transform 0.3s;

    &:hover {
      transform: scale(0.9);
    }
  }

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const BeerLikes = styled.div`
  position: absolute;
  margin: -10px;

  width: 100%;
  height: 100%;
  clip-path: ${(props) => (props.liked ? isLiked : notLiked)};

  transition: transform 0.3s;
  cursor: pointer;
  background: purple;

  &:hover {
    transform: scale(0.9);
  }
`;

export const BeerName = styled.span`
  margin-top: 20px;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-family: 'FreeMono', monospace;
`;

export const BeerImage = styled.img`
  height: 150px;
  width: 50px;
`;

export const BeerDescription = styled.span`
  display: block;
  width: 100%;
  max-height: 82px;
  overflow: hidden;

  text-overflow: ellipsis;
`;
