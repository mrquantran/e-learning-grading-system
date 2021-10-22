import styled, { css } from "styled-components"

export const IconStyled = styled.div`
  margin: 0 5px;
  display: inline-flex;
  align-items: center;

  ${props =>
    props.star &&
    css`
      color: #ff9920 !important;
    `}
`
export const IconCardStyled = styled.div`
  font-size: 32px;
`
