import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import React from "react"
import { CourseStatusWrapper, SettingWrapper } from "../Settings.styled"

export default function CourseStatus() {
  return (
    <SettingWrapper>
      <span>
        <p>Course Status</p>
        <p>This course is not published on the Udemy marketplace.</p>
      </span>
      <CourseStatusWrapper>
        <ButtonStyled disabled2 sizeSm style={{ flex: 1 }}>
          Unpublished
        </ButtonStyled>
        <p style={{ flex: 4, paddingLeft: "20px" }}>
          New students cannot find your course via search, but existing students
          can still access content.
        </p>
      </CourseStatusWrapper>
      <CourseStatusWrapper>
        <ButtonStyled delete sizeSm style={{ flex: 1 }}>
          Delete
        </ButtonStyled>
        <p style={{ flex: 4, paddingLeft: "20px" }}>
          We promise students lifetime access, so courses cannot be deleted
          after students have enrolled.
        </p>
      </CourseStatusWrapper>
    </SettingWrapper>
  )
}
