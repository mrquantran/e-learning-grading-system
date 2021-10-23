import styled, { css } from "styled-components"

export const TitleCourseStyled = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  text-align: center;
  line-height: 1.25;
  letter-spacing: -0.05rem;

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: 64px;
    `}
`

export const TitleCardStyled = styled.span`
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1.6rem;

  ${props =>
    props.marginY &&
    css`
      margin: 16px 0 8px;
    `}
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`
