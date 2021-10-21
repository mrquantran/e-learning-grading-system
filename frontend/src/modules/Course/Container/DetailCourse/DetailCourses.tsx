/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "@/hooks/useRouter"
import { RootState } from "@/redux/reducer/rootReducer"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  FETCH_COURSE_DETAIL,
  FETCH_COURSE_STATUS
} from "../../action/courseAction"
import CourseImage from "../../Components/CourseImage/CourseImage"
import GeneralInfo from "../../Components/General/GeneralInfo"
import InfoCourse from "../../Components/InfoCourse/InfoCourse"
import { DetailComponentsStyled } from "../../stylesheet/Detail.styled"

export default function DetailCourses() {
  const dispatch = useDispatch()
  const router = useRouter()

  const params = router.query.id

  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated)

  useEffect(() => {
    dispatch({ type: FETCH_COURSE_DETAIL, params })

    if (isLogin) {
      dispatch({ type: FETCH_COURSE_STATUS, payload: params })
    }
  }, [dispatch, isLogin, params])

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
