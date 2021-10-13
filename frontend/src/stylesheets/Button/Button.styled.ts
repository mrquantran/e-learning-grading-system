import styled, { css } from "styled-components"

export const ButtonStyled = styled.button`
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid transparent;
  cursor: pointer;
  line-height: inherit;
  padding: 8px 16px;
  font-size: 1.1rem;
  transition: all 0.5s ease-in-out;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  ${props =>
    props.success &&
    css`
      background-color: #04a08b;
      border-color: #04a08b;
      color: #ffffff;
    `}
  ${props =>
    props.danger &&
    css`
      background-color: #ff562f;
      border-color: #ff562f;
      color: #ffffff;
    `};

  ${props =>
    props.primary &&
    css`
      background-color: #0052cc;
      border-color: #0052cc;
      color: #ffffff;
    `};
`
