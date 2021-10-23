import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"
import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React from "react"

export default function Finish() {
  return (
    <div>
      <FormikStep label="finish">
        <TitleCourseStyled>
          You have done your process! Create to public your course
        </TitleCourseStyled>
      </FormikStep>
    </div>
  )
}
