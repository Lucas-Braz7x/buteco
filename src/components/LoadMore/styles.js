import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const ButtonLoadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;

  width: 30px;
  height: 30px;

  background: red;
  border-radius: 50%;
  background: ${colors.greyColor};
  cursor: pointer;

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonLoadMore = styled.div`
  width: 60%;
  height: 60%;
  background: ${colors.secondColor};

  clip-path: polygon(
    50% 0,
    45% 0,
    45% 45%,
    0 45%,
    0 50%,
    45% 50%,
    45% 100%,
    50% 100%,
    50% 50%,
    100% 50%,
    100% 45%,
    50% 45%
  );
`;
