import styled, { css } from "styled-components"

export const FlexItemStyled = styled.div`
  display: flex;
  align-items: center;

  ${props => props.reverse && css``}

  ${props =>
    props.w100 &&
    css`
      width: 100%;
    `}
`
