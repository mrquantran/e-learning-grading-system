import { InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import React from "react"

export default function LandingPageCourse() {
  return (
    <>
      <LabelAntdStyled>Course Title</LabelAntdStyled>
      <InputAntd placeholder="Insert your course title" />
    </>
  )
}
