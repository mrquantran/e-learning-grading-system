import { FETCH_COURSES_DRAFT } from "@/modules/Course/action/courseAction"
import DraftCourseList from "@/modules/Course/Components/Admin/DraftCourseList/DraftCourseList"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function DraftCourseContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_COURSES_DRAFT })
  }, [dispatch])

  return (
    <div>
      <DraftCourseList />
    </div>
  )
}
