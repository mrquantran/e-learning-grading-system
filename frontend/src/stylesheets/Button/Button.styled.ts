import styled, { css } from "styled-components"

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const ButtonStyled = styled.button`
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid transparent;
  cursor: pointer;
  line-height: inherit;
  padding: 8px 16px;
  font-size: 1.1rem;
  // height: 50px;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  ${props =>
    props.udemy &&
    css`
      padding: 6px 10px;
      font-size: 15px;
      line-height: 1.35135;
      color: #1c1d1f;
      background-color: transparent;
      font-weight: 700;
      border: 1px solid #1c1d1f;
    `}

  ${props =>
    props.tertiary &&
    css`
      font-weight: 700;
      font-size: 15px;
      color: #5624d0;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0 5px;
      margin: 0;
      &:focus {
        color: #5624d0;
        background-color: transparent;
      }
      &:hover {
        color: #401b9c;
        background-color: transparent;
        border-color: transparent;
      }
    `}

      ${props =>
    props.disabledUdemy &&
    css`
      background-color: transparent !important;
      border-color: transparent !important;
      color: #6a6f73 !important;
      opacity: 1;
    `}

 

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
    props.dangerText &&
    css`
      font-weight: 700;
      color: #ff562f;
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

  ${props =>
    props.transparent &&
    css`
      background-color: transparent !important;
      border: 1 px solid transparent !important;
    `}

  ${props =>
    props.sizeSm &&
    css`
      padding: 6px 10px;
      font-size: 15px;
      line-height: 1.35135;
    `}



  ${props =>
    props.disabled2 &&
    css`
      background-color: transparent !important;
      border-color: #d1d7dc !important;
      color: #6a6f73 !important;
      opacity: 0.65;
      cursor: not-allowed;
    `}

      ${props =>
    props.delete &&
    css`
      color: #612012;
      background-color: #fff;
      border: 1px solid #612012;
    `}
`
