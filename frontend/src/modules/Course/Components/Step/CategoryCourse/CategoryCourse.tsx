import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"
import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React from "react"

export default function CategoryCourse() {
  return (
    <div>
      <FormikStep label="category course">
        <TitleCourseStyled>
          What category best fits the knowledge you'll share?
        </TitleCourseStyled>
      </FormikStep>
    </div>
  )
}
