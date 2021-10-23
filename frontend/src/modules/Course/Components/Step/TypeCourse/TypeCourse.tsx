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

export default function TypeCourse() {
  const [isCourseChecked, setIsCourseChecked] = useState(true)

  const handleChecked = () => {
    setIsCourseChecked(!isCourseChecked)
  }

  return (
    <FormikStep label="Type Course">
      <TypeCourseStyled>
        <TitleCourseStyled>
          First, let's find out what type of course you're making.
        </TitleCourseStyled>

        <ContentCardStyled
          marginX
          role="group"
          aria-labelledby="my-radio-group"
        >
          <LabelStyled>
            <CardType
              icon={<DesktopOutlined />}
              title="Course"
              content="Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc."
              active={isCourseChecked}
              onClick={handleChecked}
              disableClick={!isCourseChecked}
            />
          </LabelStyled>
          <LabelStyled>
            <CardType
              icon={<FileTextOutlined />}
              title="Practice Test"
              content="Help students prepare for certification exams by providing practice questions."
              active={!isCourseChecked}
              onClick={handleChecked}
              disableClick={isCourseChecked}
            />
          </LabelStyled>
          <Field name="type">
            {({ field, form, meta }) => (
              <>
                <input
                  {...field}
                  id="course"
                  value="course"
                  checked={isCourseChecked}
                  name="type"
                  type="radio"
                />

                <input
                  {...field}
                  id="test"
                  value="test"
                  checked={isCourseChecked}
                  name="type"
                  type="radio"
                />
              </>
            )}
          </Field>
        </ContentCardStyled>
      </TypeCourseStyled>
    </FormikStep>
  )
}
