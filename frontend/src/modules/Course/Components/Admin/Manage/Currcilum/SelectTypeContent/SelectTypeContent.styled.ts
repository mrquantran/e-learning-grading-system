import styled from "styled-components"

export const SelectTypeItem = styled.div`
  display: inline-block;
  background-color: #f7f9fa;
  height: 75px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 45%);
  position: relative;
  border: 1px solid #d1d7dc;
  overflow: hidden;
  text-align: center;
  width: 88px;

  .option {
    transition: all 0.2s;
    color: #d1d7dc;
    background: inherit;
    font-size: 28px;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
    line-height: 1.4;
  }

  .label {
    position: absolute;
    width: 100%;
    font-size: 10px;
    color: #1c1d1f;
    background: #d1d7dc;
    z-index: 1;
    line-height: 1.8;
    left: 0;
    bottom: 0;
  }
`
