/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "@/hooks/useRouter"
import { RootState } from "@/redux/reducer/rootReducer"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FETCH_COURSE_DETAIL } from "../../action/courseAction"
import CourseImage from "../../Components/CourseImage/CourseImage"
import GeneralInfo from "../../Components/General/GeneralInfo"
import InfoCourse from "../../Components/InfoCourse/InfoCourse"
import { DetailComponentsStyled } from "../../stylesheet/Detail.styled"

export default function DetailCourses() {
  const dispatch = useDispatch()
  const router = useRouter()

  const params = router.query.id

  useEffect(() => {
    dispatch({ type: FETCH_COURSE_DETAIL, params })
  }, [dispatch, params])

  const { course } = useSelector((state: RootState) => state.course)

  return (
    <DetailComponentsStyled>
      <div className="box">
        <div className="box-body">
          <div className="row">
            <CourseImage />
            <InfoCourse detail={course} courseId={params} />
            <GeneralInfo detail={course} />
          </div>
        </div>
      </div>
    </DetailComponentsStyled>
  )
}
