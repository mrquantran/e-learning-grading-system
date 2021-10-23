import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React, { useState } from "react"
import CardType from "./CardType"
import {
  ContentCardStyled,
  LabelStyled,
  TypeCourseStyled
} from "./TypeCourse.styled"
import { DesktopOutlined, FileTextOutlined } from "@ant-design/icons"
import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"
import { Field } from "formik"
import * as yup from "yup"

const type = {
  course: "course",
  test: "test"
}

export default function TypeCourse() {
  const [isCourseChecked, setIsCourseChecked] = useState<any>(-1)

  const handleChecked = e => {
    if (e.target.value === type.course && isCourseChecked === -1)
      setIsCourseChecked(true)
    else if (e.target.value === type.course && isCourseChecked === -1) {
      setIsCourseChecked(false)
    } else {
      setIsCourseChecked(!isCourseChecked)
    }
  }

  return (
    <FormikStep
      label="Type Course"
      validationSchema={yup.object().shape({
        type: yup.string().required("type is required")
      })}
    >
      <TypeCourseStyled>
        <TitleCourseStyled>
          First, let's find out what type of course you're making.
        </TitleCourseStyled>

        <ContentCardStyled
          marginX
          role="group"
          aria-labelledby="my-radio-group"
        >
          <LabelStyled
            name="type"
            htmlFor="course-type-course"
            onClick={
              !isCourseChecked || isCourseChecked === -1 ? handleChecked : null
            }
          >
            <Field
              id="course-type-course"
              className="input-radio"
              name="type"
              value="course"
              type="radio"
            />
            <CardType
              active={isCourseChecked}
              icon={<DesktopOutlined />}
              title="Course"
              content="Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc."
            />
          </LabelStyled>
          <LabelStyled
            name="type"
            htmlFor="course-type-practice"
            onClick={isCourseChecked ? handleChecked : null}
          >
            <Field
              id="course-type-practice"
              name="type"
              value="test"
              type="radio"
              for="course-type-practice"
            />
            <CardType
              active={!isCourseChecked}
              icon={<FileTextOutlined />}
              title="Practice Test"
              content="Help students prepare for certification exams by providing practice questions."
              // active={!isCourseChecked}
              // onClick={handleChecked}
            />
          </LabelStyled>
        </ContentCardStyled>
      </TypeCourseStyled>
    </FormikStep>
  )
}
