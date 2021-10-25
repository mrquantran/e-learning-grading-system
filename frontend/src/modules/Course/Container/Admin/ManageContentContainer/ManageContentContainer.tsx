import { useRouter } from "@/hooks/useRouter"
import { FETCH_INSTRUCTOR_COURSE_DETAIL } from "@/modules/Course/action/manageCourseAction"
import TitleContent from "@/modules/Course/Components/Admin/Manage/TitleContent/TitleContent"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  ManageContentContainerStyled,
  ManageWrapperComponentStyled
} from "./ManageContainer.styled"

export default function ManageContentContainer({ selectedComponent }) {
  const router = useRouter()
  const { courseId } = router.query

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: FETCH_INSTRUCTOR_COURSE_DETAIL,
      payload: Number(courseId)
    })
  }, [dispatch])

  return (
    <ManageContentContainerStyled>
      <div>
        <TitleContent title={selectedComponent.title} />
      </div>
      <ManageWrapperComponentStyled>
        <selectedComponent.component />
      </ManageWrapperComponentStyled>
    </ManageContentContainerStyled>
  )
}
