import React from "react"
import { ButtonAddLecture, LectureArrowStyled } from "./AddLectureArrow.styled"
import { PlusOutlined } from "@ant-design/icons"

const iconStyle: any = {
  color: "#5624d0",
  fontWeight: "700",
  fontSize: "20px",
  transition: "all 500ms",
  position: "inherit"
}

export default function AddLectureArrow({
  handleCloseLecture,
  handleClickAddLecture,
  isFocus
}) {
  return (
    <LectureArrowStyled
      isFocus={isFocus}
      onClick={!isFocus ? handleClickAddLecture : handleCloseLecture}
    >
      <ButtonAddLecture isFocus={isFocus} className="addLectureArrow">
        <PlusOutlined style={iconStyle} className="addLectureArrowIcon" />
      </ButtonAddLecture>
    </LectureArrowStyled>
  )
}
