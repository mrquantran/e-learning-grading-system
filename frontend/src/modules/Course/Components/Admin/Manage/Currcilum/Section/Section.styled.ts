import { TYPE_INPUT } from "@/utils/ENUM"
import styled, { css } from "styled-components"

export const SectionStyled = styled.li`
  margin-top: 60px;

  ${props => {
    if (props.type === TYPE_INPUT.UPDATE) {
      return css`
        margin: 10px;
      `
    }
  }}

  // padding-bottom: 40px;
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

  background-color: #f7f9fa;

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

export const SectionContent = styled.div`
  width: 100%;
  border: 0;
  padding: 10px 10px 5px 10px;

  &:hover {
    .editDeleteGroup {
      opacity: 1;
      transition: all 500ms;
    }
  }

  ${props =>
    props.opacity &&
    css`
      display: none;
      transition: 500ms linear all;
    `}
`

export const SectionTitle = styled.div`
  span {
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  font-size: 15px;
  max-width: 480px;
  padding: 5px 5px 5px 0;
  white-space: nowrap;

  .editDeleteGroup {
    opacity: 0;
    font-size: 10px;
  }
`

export const SectionGroupTitle = styled.span`
  padding-left: 10px;
  span {
    font-weight: 400 !important;
  }

  .anticon {
    padding-right: 5px;
  }
`
export const SectionCreateInput = styled.div`
  // padding-left: 10px;
  width: 100%;
`
