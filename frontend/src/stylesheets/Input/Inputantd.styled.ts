import styled from "styled-components"
import { Checkbox, Input, Radio } from "antd"

export const InputAntd = styled(Input)`
  min-width: 18rem;
  max-width: 100rem;
  margin: 0 auto;
  height: 44px;
  input {
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
  }
`

export const CheckboxAntd = styled(Checkbox)`
  padding: 0 5px;
`

export const RadioAntd = styled(Radio)``
