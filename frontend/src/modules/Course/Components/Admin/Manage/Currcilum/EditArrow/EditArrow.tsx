import React from "react"
import {
  ButtonEdit,
  EditArrowContainer,
  EditArrowStyled
} from "./EditArrow.styled"
import { PlusOutlined } from "@ant-design/icons"

const iconStyle: any = {
  color: "#5624d0",
  fontWeight: "700",
  fontSize: "20px",
  transition: "all 500ms",
  position: "inherit"
}

export default function EditArrow({
  type,
  isFocus,
  handleClickAddSection,
  handleCloseAddSection
}) {
  return (
    <EditArrowStyled
      type={type}
      isFocus={isFocus}
      onClick={!isFocus ? handleClickAddSection : handleCloseAddSection}
    >
      <EditArrowContainer>
        <ButtonEdit isFocus={isFocus} className="editArrow">
          <PlusOutlined style={iconStyle} className="addSectionIcon" />
        </ButtonEdit>
      </EditArrowContainer>
    </EditArrowStyled>
  )
}
