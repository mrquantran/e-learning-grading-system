/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import CourseImage from "../../Components/CourseImage/CourseImage"
import GeneralInfo from "../../Components/General/GeneralInfo"
import InfoCourse from "../../Components/InfoCourse/InfoCourse"
import { DetailComponentsStyled } from "../../stylesheet/Detail.styled"

export default function DetailCourses() {
  return (
    <DetailComponentsStyled>
      <div className="box">
        <div className="box-body">
          <div className="row">
            <CourseImage />
            <InfoCourse />
            <GeneralInfo />
          </div>
        </div>
      </div>
    </DetailComponentsStyled>
  )
}
