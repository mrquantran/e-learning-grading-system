import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { Row } from "antd"
import React from "react"
import { SelectTypeItem } from "./SelectTypeContent.styled"
import { FileTextOutlined } from "@ant-design/icons"

export default function SelectTypeContent({ typeSelect, onClickItem }) {
  const renderSelectTypeArray = () => {
    return typeSelect.map(item => (
      <div
        style={{ margin: "10px 15px 0" }}
        onClick={() => onClickItem(item.id)}
      >
        <SelectTypeItem>
          <p className="option">
            <FileTextOutlined />
          </p>
          <span className="label">{item.title}</span>
        </SelectTypeItem>
      </div>
    ))
  }

  return (
    <div className="pl-10 pr-10 pb-10">
      <Row>
        <FlexItemStyled center w100>
          {renderSelectTypeArray()}
        </FlexItemStyled>
      </Row>
    </div>
  )
}
