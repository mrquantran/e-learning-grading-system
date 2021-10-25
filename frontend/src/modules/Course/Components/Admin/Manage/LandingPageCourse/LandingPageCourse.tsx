import { useRouter } from "@/hooks/useRouter"
import { FETCH_INSTRUCTOR_COURSE_DETAIL } from "@/modules/Course/action/manageCourseAction"
import { InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { LabelAntdStyled } from "@/stylesheets/Input/LabelAntd.styled"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function LandingPageCourse() {
  const router = useRouter()
  const { courseId } = router.query

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: FETCH_INSTRUCTOR_COURSE_DETAIL,
      payload: Number(courseId)
    })
  }, [courseId, dispatch])

  return (
    <>
      <LabelAntdStyled>Course Title</LabelAntdStyled>
      <InputAntd placeholder="Insert your course title" />
    </>
  )
}
