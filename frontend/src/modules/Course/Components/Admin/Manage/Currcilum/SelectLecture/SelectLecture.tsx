import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { TYPE_LECTURE } from "@/utils/ENUM"
import React from "react"
import {
  SelectLectureContainer,
  SelectLectureWrapper
} from "./SelectLecture.styled"
import AddBoxIcon from "@mui/icons-material/AddBox"

export default function SelectLecture() {
  const renderButtonSelect = () => {
    return TYPE_LECTURE.map(item => (
      <ButtonStyled tertiary disabledUdemy={!item.active}>
        <span style={{ padding: "0 5px" }}>
          <AddBoxIcon />
        </span>
        {item.title}
      </ButtonStyled>
    ))
  }

  return (
    <SelectLectureWrapper>
      <div className="pb-30">
        <SelectLectureContainer>{renderButtonSelect()}</SelectLectureContainer>
      </div>
    </SelectLectureWrapper>
  )
}
