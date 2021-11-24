import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import { Radio } from "antd"
import { Form, Formik } from "formik"
import React, { useState } from "react"

const initialState = [
  { isCorrect: false },
  { isCorrect: false },
  { isCorrect: false },
  { isCorrect: false }
]

export default function InputQuestion() {
  const [answer, setAnswer] = useState(initialState)

  const [correctAnswer, setCorrectAnswer] = useState(null)

  const onChange = e => {
    console.log("radio checked", e.target.value)
    setCorrectAnswer(e.target.value)
  }

  const renderAnswerInput = () => {
    return answer.map((item, index) => (
      <FormGroup>
        <FlexItemStyled>
          <Radio value={index} onChange={onChange} />
          <InputAntd description name={`questions${index}`} />
        </FlexItemStyled>
      </FormGroup>
    ))
  }

  return (
    <div className="pb-10">
      <div className="pt-10">
        <Formik
          initialValues={{ answer: [], question: {} }}
          onSubmit={async (values, { resetForm }) => {
            // eslint-disable-next-line no-console
            console.log("values", values)
            resetForm()
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <FormGroup>
                <LabelAntdStyled>Question</LabelAntdStyled>
                <InputAntd description name="question" />
              </FormGroup>
              <FormGroup>
                <LabelAntdStyled>Answer</LabelAntdStyled>
                {renderAnswerInput()}
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
