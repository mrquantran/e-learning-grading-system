import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { TYPE_LECTURE, TYPE_LECTURE_ID } from "@/utils/ENUM"
import React, { useState } from "react"
import {
  SelectLectureContainer,
  SelectLectureWrapper
} from "./SelectLecture.styled"
import AddBoxIcon from "@mui/icons-material/AddBox"
import InputLecture from "../InputLecture/InputLecture"

export default function SelectLecture({ sectionId, handleCloseLecture }) {
  const [inputLecture, setInputLecture] = useState<any>(null)

  const handerCloseLecture = () => {
    setInputLecture(null)
  }

  const handleRenderLecture = id => {
    switch (id) {
      case TYPE_LECTURE_ID.LECTURE:
      case TYPE_LECTURE_ID.QUIZ:
      case TYPE_LECTURE_ID.CODING:
      case TYPE_LECTURE_ID.ASSIGNMENT:
        return setInputLecture(
          <InputLecture
            sectionId={sectionId}
            typeLecture={id}
            handleClose={handerCloseLecture}
            handleCloseSelect={handleCloseLecture}
          />
        )
      case TYPE_LECTURE_ID.PRACTICE_TEST:
        return null
    }
  }

  const renderButtonSelect = () => {
    return TYPE_LECTURE.map(item => (
      <ButtonStyled
        onClick={() => handleRenderLecture(item.id)}
        key={item.id}
        tertiary
        disabledUdemy={!item.active}
      >
        <span style={{ padding: "0 5px" }}>
          <AddBoxIcon />
        </span>
        {item.title}
      </ButtonStyled>
    ))
  }

  return (
    <>
      {!inputLecture ? (
        <SelectLectureWrapper>
          <div className="pb-30">
            <SelectLectureContainer>
              {renderButtonSelect()}
            </SelectLectureContainer>
          </div>
        </SelectLectureWrapper>
      ) : (
        inputLecture
      )}
    </>
  )
}
