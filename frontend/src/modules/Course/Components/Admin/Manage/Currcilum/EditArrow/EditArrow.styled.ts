import styled from "styled-components"

export const EditArrowStyled = styled.div`
  margin-left: 60px;
  margin-right: 10px;
  &:hover {
    .editArrow {
      opacity: 1 !important;
    }
  }
`

export const EditArrowContainer = styled.div`
  width: 100%;
  margin-left: -60px;
  position: absolute;
  top: -80px;
  height: 80px;
`

export const ButtonEdit = styled.button`
  top: 45px;
  position: relative;
  left: -19px;
  opacity: 0;
  transition: all 500ms;
  width: 40px;
  height: 27px;
  border: 1px dashed #6a6f73;
  border-right: 0;
  background: #fff;
  &:before {
    transition: all 500ms;
    background: #fff;
    border: 1px dashed #6a6f73;
    border-bottom: none;
    border-left: none;
    transform: rotate(35deg) skew(-15deg);
    position: absolute;
    width: 21px;
    height: 21px;
    content: "";
    right: -11px;
    top: 2px;
  }
`
