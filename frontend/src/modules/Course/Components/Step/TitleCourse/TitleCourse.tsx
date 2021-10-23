import { FormikStep } from "@/components/Formik/FormikStep/FormikStep"
import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React from "react"
import { Field } from "formik"

import { InputTitleStyled } from "./TitleCourse.styled"
import { Input } from "antd"

export default function TitleCourse() {
  return (
    <FormikStep label="title course">
      <TitleCourseStyled marginBottom>
        How about a working title?
      </TitleCourseStyled>

      <Field name="title" type="text">
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta
        }) => (
          <InputTitleStyled>
            <Input
              id="form-group-2"
              type="text"
              placeholder="e.g Learn Typescript from scratch"
              maxLength="60"
              {...field}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </InputTitleStyled>
        )}
      </Field>
    </FormikStep>
  )
}
