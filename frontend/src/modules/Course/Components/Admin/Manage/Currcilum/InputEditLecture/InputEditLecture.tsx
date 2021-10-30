import { ButtonGroup, ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { TYPE_LECTURE } from "@/utils/ENUM"
import { Field, Form, Formik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { SectionCreateInput } from "../Section/Section.styled"

export default function InputEditLecture({
  editContent,
  lectureId,
  sectionId,
  type,
  handleClose
}) {
  const {
    title: titleInput,
    formField,
    contentField,
    updateAction
  }: any = TYPE_LECTURE.find(item => {
    return item.id === type
  })

  const dispatch = useDispatch()

  const renderField = () => {
    const formRender = editContent ? contentField : formField

    return formRender.map(item => {
      let description = item.name === "description" ? true : false
      return (
        <FormGroup>
          <Field name={item.name} type="text">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta
            }) => (
              <InputAntd
                smallDescription={description}
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
    <SectionCreateInput className="ml-5">
      <Formik
        initialValues={{ title: null, description: null }}
        onSubmit={async (values, { resetForm }) => {
          // eslint-disable-next-line no-console
          console.log("values", values)
          dispatch({
            type: updateAction,
            payload: { data: values, sectionId, lectureId: lectureId }
          })
          handleClose()
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
                  {editContent ? "Save" : "Edit"} {titleInput}
                </ButtonStyled>
                <ButtonStyled onClick={handleClose} dangerText transparent>
                  Cancel
                </ButtonStyled>
              </ButtonGroup>
            </div>
          </Form>
        )}
      </Formik>
    </SectionCreateInput>
  )
}
