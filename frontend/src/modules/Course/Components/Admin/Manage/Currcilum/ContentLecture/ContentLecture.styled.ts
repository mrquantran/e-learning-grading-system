import styled, { css } from "styled-components"

export const ContentStyled = styled.div`
  margin: 10 px 0;
  border: 1 px solid transparent;
  cursor: pointer;
`

export const ContentRow = styled.div`
  ${props =>
    props.borderTop &&
    css`
      border-top: 1px solid rgba(28, 29, 31, 0.25);
    `}

  ${props =>
    props.marginY &&
    css`
      &:hover {
        .descriptionContent {
          border: 1px solid #d1d7dc;
        }
      }
      margin: 10px 0;
    `}
`
