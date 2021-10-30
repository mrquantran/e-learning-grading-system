import { ButtonGroup, ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { TYPE_LECTURE } from "@/utils/ENUM"
import { Field, Form, Formik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import {
  SectionContent,
  SectionCreateInput,
  SectionTitle
} from "../Section/Section.styled"
import { InputLectureWrapper, LectureInputStyled } from "./InputLecture.styled"

export default function InputLecture({ typeLecture, handleClose }) {
  const { titleInput, submitText, formField, dispatchAction }: any =
    TYPE_LECTURE.find(item => {
      return item.id === typeLecture
    })

  const dispatch = useDispatch()

  const renderField = () => {
    return formField.map(item => {
      return (
        <FormGroup>
          <Field name={item.name} type="text">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta
            }) => (
              <InputAntd
                section
                id={item.name}
                placeholder={item.placeHolder}
                name={item.name}
                {...field}
              />
            )}
          </Field>
        </FormGroup>
      )
    })
  }

  return (
    <InputLectureWrapper>
      <LectureInputStyled>
        <SectionContent>
          <FlexItemStyled baseline>
            <SectionTitle>
              <span style={{ fontWeight: 600 }}>{titleInput}</span>
            </SectionTitle>
            <SectionCreateInput>
              <Formik
                initialValues={{ title: "" }}
                onSubmit={async (values, { resetForm }) => {
                  // eslint-disable-next-line no-console
                  console.log("values", values)
                  dispatch({ type: dispatchAction, payload: { data: values } })
                  resetForm()
                }}
              >
                {props => (
                  <Form onSubmit={props.handleSubmit}>
                    <div style={{ flex: 1 }}>
                      {renderField()}
                      <ButtonGroup>
                        <ButtonStyled
                          onClick={props.handleSubmit}
                          udemy
                          purple
                          type="submit"
                        >
                          {submitText}
                        </ButtonStyled>
                        <ButtonStyled
                          onClick={handleClose}
                          dangerText
                          transparent
                        >
                          Cancel
                        </ButtonStyled>
                      </ButtonGroup>
                    </div>
                  </Form>
                )}
              </Formik>
            </SectionCreateInput>
          </FlexItemStyled>
        </SectionContent>
      </LectureInputStyled>
    </InputLectureWrapper>
  )
}
