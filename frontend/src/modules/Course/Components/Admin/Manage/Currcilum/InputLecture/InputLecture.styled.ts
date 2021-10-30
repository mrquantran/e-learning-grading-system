import styled, { css } from "styled-components"

export const SelectLectureContainer = styled.div`
  margin-bottom: -25px;
  padding: 10px;
  border: 1px dashed #6a6f73;
  background: #fff;
`

export const InputLectureWrapper = styled.div`
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 10px;
  padding-bottom: 20px;
  position: relative;
`

export const LectureInputStyled = styled.li`
  position: relative;
  .Section .ant-collapse-header {
    display: flex;
    align-items: center;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 0;
  }

  .Section .ant-collapse {
    // border: 1px solid #6a6f73;
    background-color: #f7f9fa;
  }

  .Section .ant-collapse-content {
    background-color: #f7f9fa;
    border-top: none;
  }

  border: 1px solid #6a6f73;
  background-color: #fff;

  ${props =>
    props.input &&
    css`
      // padding-bottom: 20px;
      border-bottom: 1px solid #6a6f73;
      // margin-left: -61px;
      // margin-right: -11px;
      // margin-top: -80px;
      // padding-top: 80px;
      background: #fff;
    `}
`
