import styled, { css } from 'styled-components';

export const ListItemStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  list-style: none;
`;

export const InputStyled = styled.input`
  outline: none;
  border: none;
  background-color: #fff;

  border-radius: 0.375em;
  color: #363636;
  padding: 5px 10px;

  justify-self: start;

  ${({ isEdit }) =>
    isEdit &&
    css`
      outline: 1px solid ${({ isError }) => (isError ? '#f14668' : '#485fc7')};
      box-shadow: ${({ isError }) =>
        isError
          ? '0 0 0 0.2em rgb(241 70 104 / 25%)'
          : '0 0 0 0.2em rgb(72 95 199 / 25%)'};
    `}
`;

export const SelectStyled = styled.select`
  outline: none;
  border: none;
  background-color: #fff;

  border-radius: 0.375em;
  color: #363636;
  padding: 5px 10px;

  justify-self: start;

  ${({ isEdit }) =>
    isEdit &&
    css`
      outline: 1px solid ${({ isError }) => (isError ? '#f14668' : '#485fc7')};
      box-shadow: ${({ isError }) =>
        isError
          ? '0 0 0 0.2em rgb(241 70 104 / 25%)'
          : '0 0 0 0.2em rgb(72 95 199 / 25%)'};
    `}
`;

export const ButtonWrapperStyled = styled.div`
  display: flex;
  gap: 10px;
`;
