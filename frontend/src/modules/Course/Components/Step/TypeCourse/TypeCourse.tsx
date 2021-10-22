import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React from "react"
import CardType from "./CardType"
import { ContentCardStyled, TypeCourseStyled } from "./TypeCourse.styled"
import { DesktopOutlined, FileTextOutlined } from "@ant-design/icons"

export default function TypeCourse() {
  return (
    <TypeCourseStyled>
      <TitleCourseStyled>
        First, let's find out what type of course you're making.
      </TitleCourseStyled>
      <ContentCardStyled marginX>
        <CardType
          icon={<DesktopOutlined />}
          title="Course"
          content="Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc."
          active={true}
        />
        <CardType
          icon={<FileTextOutlined />}
          title="Practice Test"
          content="Help students prepare for certification exams by providing practice questions."
          active={false}
        />
      </ContentCardStyled>
    </TypeCourseStyled>
  )
}
