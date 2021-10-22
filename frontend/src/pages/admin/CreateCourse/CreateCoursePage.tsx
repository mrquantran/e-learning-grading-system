import { history } from "@/App/App"
import StepHeader from "@/components/admin/StepHeader/StepHeader"
import { useRouter } from "@/hooks/useRouter"
import { TitleCourseStyled } from "@/stylesheets/Title/Title.styled"
import React, { useEffect } from "react"
import { ContentCreateCourseStyled } from "./CreateCourse.styled"

const acceptableParams = [1, 2, 3, 4]

export default function CreateCoursePage() {
  const router = useRouter()
  const { step } = router.query

  useEffect(() => {
    if (!acceptableParams.includes(Number(step))) {
      history.push("/")
    }
  }, [step])

  const stepCurrent = Number(step) / acceptableParams.length

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <StepHeader stepCurrent={stepCurrent} />
      <ContentCreateCourseStyled></ContentCreateCourseStyled>
    </div>
  )
}
