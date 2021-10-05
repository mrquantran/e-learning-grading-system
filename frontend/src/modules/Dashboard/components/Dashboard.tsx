import React from "react"

import {
  DashboardComponentsStyled
  // DashboardRowStyled,
  // DashboardTwoColumnsItem
} from "../stylesheets/Dashboard.style"

import Carousel from "./Carousel/Carousel"
import CourseSlider from "../container/CourseSlider/CourseSlider"

export default function Dashboard() {
  return (
    <DashboardComponentsStyled>
      <Carousel />
      {/* <div className="row"> */}
      <CourseSlider />
      {/* </div> */}
    </DashboardComponentsStyled>
  )
}
