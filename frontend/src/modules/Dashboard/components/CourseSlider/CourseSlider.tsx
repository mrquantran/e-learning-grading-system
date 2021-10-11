import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import actions from "../../action/index"
import CourseItem from "../CourseItem/CourseItem"
import { NextArrowStyle } from "./NextArrow.styled"

import "@@/node_modules/slick-carousel/slick/slick.css"
import "@@/node_modules/slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"

import CourseSliderStyled from "./CourseSlider.styled"

/** next arrow để styled */
function NextArrow(props) {
  const { className, style, onClick } = props

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        top: "40%",
        right: "-1.6rem",
        height: "40px",
        width: "40px",
        border: "1px solid #6a6f73",
        boxshadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)"
      }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />
}

export default function CourseSlider() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actions.FETCH_COURSES_DATA.REQUEST })
  }, [dispatch])

  const { data } = useSelector((state: any) => state.dashboard.courses)

  const renderCourses = () => {
    return data?.map((item, index) => (
      <div key={index}>
        <CourseItem
          name={item.name}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      </div>
    ))
  }

  return (
    <CourseSliderStyled>
      <Slider {...settings}>{renderCourses()}</Slider>
    </CourseSliderStyled>
  )
}
