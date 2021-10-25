import styled, { css } from "styled-components"

export const ButtonGroup = styled.div``

export const ButtonStyled = styled.button`
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid transparent;
  cursor: pointer;
  line-height: inherit;
  padding: 8px 16px;
  font-size: 1.1rem;
  height: 50px;
  white-space: nowrap;
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
    props.purple &&
    css`
      color: #fff;
      background-color: #a435f0;
      border: 1px solid transparent;
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

  ${props =>
    props.secondary &&
    css`
      background-color: #b7c1d1;
      border-color: #b7c1d1;
      color: #172b4c;
    `};

  ${props =>
    props.disabled &&
    css`
      background-color: #b7c1d1 !important;
      border-color: #b7c1d1 !important;
      color: #172b4c !important;
    `};

  ${props =>
    props.info &&
    css`
      background-color: #00baff;
      border-color: #00baff;
      color: #ffffff;
    `};
`
