import styled, { css } from "styled-components"

export const TypeCourseStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: auto;
  width: 100%;
  margin-left: auto;
`

export const ContentCardStyled = styled.div`
  display: flex;
  justify-content: center;
  //   width: 22.5rem;
  //   min-height: 27rem;
  margin-top: 64px;

  .ant-card-body {
    text-align: center;
  }
`

export const CardStyled = styled.div`
  margin: 0 2.4rem;
  width: 22.5rem;
  min-height: 27rem;

  .ant-card-bordered {
    border: 1px solid #d1d7dc;
  }

  text-align: center;

  ${props =>
    props.marginX &&
    css`
      margin: 0 0 0 2.4rem;
    `}

  ${props =>
    props.active &&
    css`
      outline: 4px solid #1c1d1f;
    `}
`

export const SubContentCardStyled = styled.span`
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.4rem;
`

export const CardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
