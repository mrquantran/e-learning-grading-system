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

  .ant-card-body {
    text-align: center;
  }
`

export const LabelStyled = styled.label`
  margin: 0 2.4rem;
  width: 22.5rem;
  min-height: 27rem;
  text-align: center;
  // outline: 4px solid #1c1d1f;

  .input-radio {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
`

export const CardStyled = styled.div`
  height: 100%;

  .ant-card {
    width: 100%;
  }

  .ant-card:hover {
    background-color: rgba(209, 215, 220, 0.25);
    transition: background-color 150ms linear;
  }

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
