import React, { useState } from "react"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ContentRow } from "./ContentLecture.styled"
import { TYPE_LECTURE_ID } from "@/utils/ENUM"
import InputEditLecture from "../InputEditLecture/InputEditLecture"
import TabItemCurriculum from "../TabItemCurriculum/TabItemCurriculum"
import { useDispatch, useSelector } from "react-redux"
import ManageCourseAction from "@/modules/Course/action/manageCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import InputQuiz from "../InputQuiz/InputQuiz"

export default function ContentQuiz({
  lectureId,
  sectionId,
  description: content
}) {
  const [description, setDescription] = useState<any>({
    component: null,
    isFocus: false
  })

  const dispatch = useDispatch()

  const { isSelectedTab } = useSelector((state: RootState) => state.create)

  const onSelectContent = () => {
    dispatch(ManageCourseAction.selectContent(isSelectedTab))
  }

  const handleCloseEditSection = () => {
    setDescription({
      isFocus: false,
      component: null
    })
  }

  const onDisplayContentInputTab = () => {
    return <InputQuiz />
  }

  return (
    <>
      {description.component}
      {isSelectedTab ? (
        <TabItemCurriculum onOpen={onDisplayContentInputTab} />
      ) : null}
      {/* <ContentRow marginY></ContentRow> */}
      {!isSelectedTab ? (
        <ContentRow ContentRow className="pt-10 pb-10">
          <FlexItemStyled>
            <span className="font-weight-700 mr-10">Questions</span>
            <ButtonStyled udemy onClick={onSelectContent}>
              + New Question
            </ButtonStyled>
          </FlexItemStyled>
        </ContentRow>
      ) : null}
    </>
  )
}
