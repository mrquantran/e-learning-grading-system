import { TYPE_QUIZ, TYPE_SELECT_CONTENT_LECTURE } from "@/utils/ENUM"
import React, { useState } from "react"
import InputQuestion from "../InputQuestion/InputQuestion"
import SelectTypeContent from "../SelectTypeContent/SelectTypeContent"

export default function InputQuiz() {
  const typeArray = TYPE_SELECT_CONTENT_LECTURE.QUIZ

  const [inputQuiz, setInputQuiz] = useState<any>(null)

  const onClickItem = id => {
    setInputQuiz(id)
  }

  const renderInputQuiz = () => {
    switch (inputQuiz) {
      case TYPE_QUIZ.MULTIPLE_CHOICE.id:
        return <InputQuestion />
      default:
        return null
    }
  }

  return (
    <>
      {inputQuiz ? renderInputQuiz() : null}
      {!inputQuiz ? (
        <SelectTypeContent typeSelect={typeArray} onClickItem={onClickItem} />
      ) : null}
    </>
  )
}
