import styled, { css } from "styled-components"

export const SettingWrapper = styled.div`
  padding: 45px;
  p {
    font-size: 15px;
  }

  .blockLabel {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5 px;
    font-weight: 400;
  }

  ${props =>
    props.wrapper2 &&
    css`
      border-top: 1px solid #d1d7dc;
      padding-top: 22.5px;
    `}
`

export const CourseStatusWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 20px;
`

export const TableContainer = styled.div`
  overflow-x: auto;
  min-height: 0.01%;
`
