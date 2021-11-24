import styled, { css } from "styled-components"

export const FlexItemStyled = styled.div`
  display: flex;
  align-items: center;

  ${props => props.reverse && css``}

  ${props =>
    props.opacity &&
    css`
      display: none;
      transition: 500ms linear all;
    `}


  ${props =>
    props.baseline &&
    css`
      align-items: baseline;
    `}


  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

      ${props =>
    props.center &&
    css`
      justify-content: center;
    `}

    

  ${props =>
    props.w100 &&
    css`
      width: 100%;
    `}
`

export const SpaceBetweenDivStyled = styled.div`
  display: flex;
  // justify:
`
