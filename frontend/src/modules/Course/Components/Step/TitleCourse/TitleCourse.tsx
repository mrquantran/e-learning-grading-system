import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"
import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React from "react"
import { Field } from "formik"
import { Input } from "antd"

export default function TitleCourse() {
  return (
    <FormikStep label="title course">
      <TitleCourseStyled>How about a working title?</TitleCourseStyled>
      <Field name="title" component={Input} />
    </FormikStep>
  )
}
