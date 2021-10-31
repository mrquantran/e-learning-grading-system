import { useRouter } from "@/hooks/useRouter"
import ManageCourseAction from "@/modules/Course/action/manageCourseAction"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import React from "react"
import { useDispatch } from "react-redux"
import { CourseStatusWrapper, SettingWrapper } from "../Settings.styled"

export default function CourseStatus() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { courseId } = router.query

  const handleDeleteCourse = () => {
    console.log("click")
    dispatch(ManageCourseAction.deleteCourse(courseId))
  }

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
        <ButtonStyled
          delete
          sizeSm
          type="button"
          style={{ flex: 1 }}
          onClick={handleDeleteCourse}
        >
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
