import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  min-width: 250px;
  min-height: 300px;
  border-radius: 25px;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const FormTitle = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: normal;
  color: #ffffffff;
  text-align: center;
`;

export const FormInput = styled.input`
  border: none;
  outline: none;
  background: none;

  border-bottom: 1px solid #ffffff;

  height: 50px;

  transition: boder-color 0.6s;
  &::placeholder {
    padding-left: 2px;
    color: #ffffff;
  }

  &:focus {
    border-color: #af5751;
  }

  &:hover {
    cursor: pointer;
    border-color: #922b25;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    color: #ffffff;
  }

  div:nth-child(2) {
    justify-content: center;
  }
`;
