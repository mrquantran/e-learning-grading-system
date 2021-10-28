import styled, { css } from "styled-components"

export const FlexItemStyled = styled.div`
  display: flex;
  align-items: center;

  ${props => props.reverse && css``}

  ${props =>
    props.baseline &&
    css`
      align-items: baseline;
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
