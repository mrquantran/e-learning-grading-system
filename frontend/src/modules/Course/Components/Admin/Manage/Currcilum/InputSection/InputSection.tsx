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
import { TYPE_INPUT } from "@/utils/ENUM"
import { UPDATE_LECTURE_SECTION } from "@/modules/Course/action/manageCourseAction"

const initialValues = {
  title: "",
  description: ""
}

export default function InputSection({
  sectionId,
  type,
  sectionArrow,
  handleCloseAddSection
}) {
  const router = useRouter()
  const { courseId } = router.query

  const dispatch = useDispatch()

  const handleSubmit = values => {
    // if not edit
    if (type === TYPE_INPUT.CREATE) {
      dispatch({
        type: CREATE_COURSE_SECTION_LECTURE,
        payload: {
          courseId,
          sectionArrow,
          data: values
        }
      })
    } else {
      dispatch({
        type: UPDATE_LECTURE_SECTION,
        payload: {
          courseId,
          sectionId,
          data: values
        }
      })
    }
    handleCloseAddSection()
  }

  const editOrAddButton = () => {
    return type === TYPE_INPUT.CREATE ? "Add section " : "Save section"
  }

  return (
    <SectionStyled type={type} input onClick={e => e.stopPropagation()}>
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
                      <Field name="description" type="text">
                        {({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta
                        }) => (
                          <InputAntd
                            id="description"
                            name="description"
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
                        {editOrAddButton()}
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
