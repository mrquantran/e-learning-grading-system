import React from "react"

import {
  DashboardComponentsStyled
  // DashboardRowStyled,
  // DashboardTwoColumnsItem
} from "../stylesheets/Dashboard.style"

import Carousel from "../components/Carousel/Carousel"
import CourseSlider from "../components/CourseSlider/CourseSlider"
import UpcomingTest from "../components/UpcomingTest/UpcomingTest"
// import NewActivity from "../container/NewActivity/NewActivity"
import GoodStudent from "../components/GoodStudent/GoodStudent"
import Carousel2 from "../components/Carousel2/Carousel2"

import { Col, Row } from "antd"
import TotalItem from "../components/TotalCourse/TotalItem"

export default function Dashboard() {
  return (
    <DashboardComponentsStyled>
      <Carousel />

      <CourseSlider />

      <Row>
        <Col span={12} style={{ paddingRight: "20px" }}>
          {/* <UpcomingTest /> */}
          <GoodStudent />
        </Col>
        <Col span={12}>
          <Carousel2 />
          {/* <Row>
            <Col span={12} style={{ paddingRight: "20px" }}>
              <TotalItem title="Total Courses" total="15" />
            </Col>
            <Col span={12}>
              <TotalItem title="Available Tests" total="5" />
            </Col>
          </Row> */}
        </Col>
      </Row>
    </DashboardComponentsStyled>
  )
}
