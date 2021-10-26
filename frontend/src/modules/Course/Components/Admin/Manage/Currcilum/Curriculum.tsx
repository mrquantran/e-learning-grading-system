import React from "react"
import { CurriculumContainer, CurriculumTitle } from "./Curriculum.styled"

export default function Curriculum() {
  return (
    <CurriculumContainer>
      <CurriculumTitle>
        <div className="pb20">
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments).
        </div>
        <p data-purpose="free-course-message">
          If you’re intending to offer your course for free, the total length of
          video content must be less than 2 hours.
        </p>
      </CurriculumTitle>
      <div></div>
    </CurriculumContainer>
  )
}
