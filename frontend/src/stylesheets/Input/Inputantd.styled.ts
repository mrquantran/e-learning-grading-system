import styled, { css } from "styled-components"
import { Checkbox, Input, Radio } from "antd"

export const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;

  ${props =>
    props.col3 &&
    css`
      flex: 1 0 auto;
      min-width: 1px;
      // width: 220px;
      // margin-left: 10px;
      margin-right: 20px;
    `}

  ${props =>
    props.upload &&
    css`
      .ant-upload.ant-upload-select {
        width: 100%;
      }
      .ant-upload.ant-upload-select-picture-card {
        background-color: none;
        border: none;
      }
    `}
`

export const SelectInputStyled = styled.div`
  .ant-select-selector {
    height: 100% !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`

export const InputAntd = styled(Input)`
  &:hover,
  &:focus {
    background: #fff;
    border: 1px solid #1c1d1f;
    box-shadow: none;
  }
  min-width: 18rem;
  max-width: 100rem;
  margin: 0 auto;
  height: 44px;
  display: block;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  line-height: 1.43;
  color: #1c1d1f;
  background-color: #fff;
  background-image: none;
  border: 1px solid #1c1d1f;
  border-radius: 0;
  box-shadow: none;
  transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;
  height: 44px;

  ${props =>
    props.description &&
    css`
      height: 75px;
    `}

  ${props =>
    props.section &&
    css`
      height: 34px;
      padding: 0 10 px;
      font-size: 13px;
      line-height: 1.287;
    `}
`

export const CheckboxAntd = styled(Checkbox)`
  padding: 0 5px;
`

export const RadioAntd = styled(Radio)``
