import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React, { useState } from "react"
import CardType from "./CardType"
import { ContentCardStyled, TypeCourseStyled } from "./TypeCourse.styled"
import { DesktopOutlined, FileTextOutlined } from "@ant-design/icons"
import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"

export default function TypeCourse() {
  const [isCourseChecked, setIsCourseChecked] = useState(true)

  const handleChecked = () => {
    setIsCourseChecked(!isCourseChecked)
  }

  return (
    <TypeCourseStyled>
      <TitleCourseStyled>
        First, let's find out what type of course you're making.
      </TitleCourseStyled>
      <FormikStep label="Type Course">
        <ContentCardStyled marginX>
          <CardType
            icon={<DesktopOutlined />}
            title="Course"
            content="Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc."
            active={isCourseChecked}
            onClick={handleChecked}
            disableClick={!isCourseChecked}
          />
          <CardType
            icon={<FileTextOutlined />}
            title="Practice Test"
            content="Help students prepare for certification exams by providing practice questions."
            active={!isCourseChecked}
            onClick={handleChecked}
            disableClick={isCourseChecked}
          />
        </ContentCardStyled>
      </FormikStep>
    </TypeCourseStyled>
  )
}
