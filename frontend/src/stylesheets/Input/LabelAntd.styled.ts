import styled, { css } from "styled-components"

export const LabelAntdStyled = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 15px;

  ${props =>
    props.fontSmall &&
    css`
      font-size: 13px;
    `}
`
