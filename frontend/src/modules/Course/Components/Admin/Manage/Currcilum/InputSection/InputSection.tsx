import { useRouter } from "@/hooks/useRouter"
import { ButtonGroup, ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import React from "react"
import {
  SectionContent,
  SectionCreateInput,
  SectionStyled,
  SectionTitle
} from "../Section/Section.styled"
import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { CREATE_COURSE_SECTION_LECTURE } from "@/modules/Course/action/createCourseAction"

const initialValues = {
  title: "",
  objective: ""
}

export default function InputSection({ sectionArrow, handleCloseAddSection }) {
  const router = useRouter()
  const { courseId } = router.query

  const dispatch = useDispatch()

  const handleSubmit = values => {
    dispatch({
      type: CREATE_COURSE_SECTION_LECTURE,
      payload: {
        courseId,
        sectionArrow,
        data: values
      }
    })
    handleCloseAddSection()
  }

  return (
    <SectionStyled input>
      <SectionContent>
        <FlexItemStyled baseline>
          <SectionTitle>
            <span>New Section:{/* Section {order}:{" "} */}</span>
          </SectionTitle>
          <SectionCreateInput>
            {/* <FileTextOutlined /> */}
            <Formik
              initialValues={initialValues}
              onSubmit={values => {
                handleSubmit(values)
              }}
            >
              {props => (
                <form onSubmit={props.handleSubmit}>
                  <div style={{ flex: 1 }}>
                    <FormGroup>
                      <Field name="title" type="text">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta
                        }) => (
                          <InputAntd
                            section
                            id="title"
                            placeholder="Enter a Title"
                            name="title"
                            {...field}
                          />
                        )}
                      </Field>
                    </FormGroup>
                    <FormGroup>
                      <LabelAntdStyled fontSmall>
                        What will students be able to do at the end of this
                        section?
                      </LabelAntdStyled>
                      <Field name="objective" type="text">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta
                        }) => (
                          <InputAntd
                            id="title"
                            name="objective"
                            section
                            placeholder="Enter a Learning Objective"
                            {...field}
                          />
                        )}
                      </Field>
                    </FormGroup>
                    <ButtonGroup>
                      <ButtonStyled
                        onClick={props.handleSubmit}
                        udemy
                        purple
                        // type="submit"
                      >
                        Add section
                      </ButtonStyled>
                      <ButtonStyled
                        onClick={handleCloseAddSection}
                        dangerText
                        transparent
                      >
                        Cancel
                      </ButtonStyled>
                    </ButtonGroup>
                  </div>
                </form>
              )}
            </Formik>
          </SectionCreateInput>
        </FlexItemStyled>
      </SectionContent>
    </SectionStyled>
  )
}
