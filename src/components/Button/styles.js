import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const ButtonContainer = styled.button`
  background: ${colors.textColor};
  width: ${(props) => props.widthButton}px;
  height: ${(props) => props.heightButton}px;

  border: none;
  border-radius: 5px;

  color: ${colors.lightBackground};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-transform: capitalize;

  transition: transform 0.3s;

  &:hover {
    transform: scale(0.9);
    filter: brightness(1.1);
    cursor: pointer;
  }
`;
