import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import DashboardAction from "../action"
import {
  DashboardComponentsStyled
  // DashboardRowStyled,
  // DashboardTwoColumnsItem
} from "../stylesheets/Dashboard.style"

import Carousel from "./Carousel/Carousel"
import CourseItem from "./CourseItem/CourseItem"

import actions from "../action/index"

export default function Dashboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actions.FETCH_COURSES_DATA.REQUEST })
  }, [])

  return (
    <DashboardComponentsStyled>
      <Carousel />
      <div className="row">
        <div className="col-3">
          <CourseItem />
        </div>
        <div className="col-3">
          <CourseItem />
        </div>
        <div className="col-3">
          <CourseItem />
        </div>
        <div className="col-3">
          <CourseItem />
        </div>
      </div>
    </DashboardComponentsStyled>
  )
}
