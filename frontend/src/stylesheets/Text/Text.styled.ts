import styled, { css } from "styled-components"

export const SpanGroup = styled.span`
  display: flex;
  align-items: center;

  padding-left: 10px;

  ${props =>
    props.pl10 &&
    css`
      padding-left: 10px;
    `}
`
