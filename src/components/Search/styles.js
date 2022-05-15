import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  height: 120px;
  width: 120px;

  background: ${colors.modalColor};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: -25px;
    width: 100%;
    height: 156%;
  }
`;

export const SearchInput = styled.input`
  height: 25px;
  min-width: 225px;

  border-radius: 15px;
  border: none;

  padding: 2px 15px;

  outline: none;
  background: ${colors.secondColor};
  box-shadow: 5px 5px 30px ${colors.shadowColor};
`;
