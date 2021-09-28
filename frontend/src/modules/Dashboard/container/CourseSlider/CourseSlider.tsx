import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import actions from "../../action/index"
import CourseItem from "../../components/CourseItem/CourseItem"

export default function CourseSlider() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actions.FETCH_COURSES_DATA.REQUEST })
  }, [dispatch])

  const { data } = useSelector((state: any) => state.dashboard.courses)

  const renderCourses = () => {
    return data?.map(item => (
      <div className="col-3">
        <CourseItem
          name={item.name}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      </div>
    ))
  }

  return <React.Fragment>{renderCourses()}</React.Fragment>
}
