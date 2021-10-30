import React, { useState } from "react"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ContentRow, ContentStyled } from "./ContentLecture.styled"
import { TYPE_LECTURE_ID } from "@/utils/ENUM"
import InputEditLecture from "../InputEditLecture/InputEditLecture"

export default function ContentLecture({
  lectureId,
  sectionId,
  description: content
}) {
  const [description, setDescription] = useState<any>({
    component: null,
    isFocus: false
  })

  const TYPE_DEFAULT = TYPE_LECTURE_ID.LECTURE

  const handleCloseEditSection = () => {
    setDescription({
      isFocus: false,
      component: null
    })
  }

  const handleClickDescription = () => {
    setDescription({
      isFocus: true,
      component: (
        <InputEditLecture
          editContent={true}
          type={TYPE_DEFAULT}
          handleClose={handleCloseEditSection}
          lectureId={lectureId}
          sectionId={sectionId}
        />
      )
    })
  }

  return (
    <>
      {description.component}
      <ContentRow marginY>
        <ContentStyled onClick={handleClickDescription}>
          {!description.isFocus ? <p>{content}</p> : null}
        </ContentStyled>
        {!content ? (
          <FlexItemStyled>
            <ButtonStyled udemy onClick={handleClickDescription}>
              + Description
            </ButtonStyled>
          </FlexItemStyled>
        ) : null}
      </ContentRow>
      <ContentRow className="pt-10 pb-10" borderTop>
        <FlexItemStyled>
          <ButtonStyled udemy>+ Resource</ButtonStyled>
        </FlexItemStyled>
      </ContentRow>
    </>
  )
}
