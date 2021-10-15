/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconStyled } from "@/stylesheets/Icon/Icon.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import React from "react"

import {
  HeartOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  StarOutlined
} from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { ENROLL_COURSE } from "../../action/enrollAction"
import { RootState } from "@/redux/reducer/rootReducer"
import { showConfirm } from "@/stylesheets/Modal/Modal.styled"
import { history } from "@/App/App"

const changeToLogin = () => {
  history.push("/login")
}

export default function InfoCourse({ detail, courseId }) {
  const { name, courseDetails } = detail

  const dispatch = useDispatch()
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated)

  const { isFavorite, isEnroll } = useSelector(
    (state: RootState) => state.course.statusCourse
  )

  const modal = {
    title: "Enroll",
    description: "You need to login to enroll course",
    buttonModalConfirm: {
      okButton: {
        function: changeToLogin
      }
    }
  }

  const renderButtonEnroll = () => {
    return isEnroll ? (
      <ButtonStyled secondary>
        <IconStyled>
          <AppstoreOutlined />
        </IconStyled>
        Enroll Course
      </ButtonStyled>
    ) : (
      <ButtonStyled success onClick={handleEnrollCourse}>
        <IconStyled>
          <AppstoreAddOutlined />
        </IconStyled>
        Enroll Course
      </ButtonStyled>
    )
  }

  const handleEnrollCourse = () => {
    if (isLogin) {
      dispatch({
        type: ENROLL_COURSE,
        payload: Number(courseId)
      })
    } else {
      showConfirm(modal.title, modal.description, modal.buttonModalConfirm)
    }
  }

  return (
    <div className="col-md-8 col-sm-6">
      <h2 className="box-title mt-0">{name}</h2>
      <div className="list-inline">
        <IconStyled star>
          <StarOutlined />
        </IconStyled>
        <IconStyled star>
          <StarOutlined />
        </IconStyled>
        <IconStyled star>
          <StarOutlined />
        </IconStyled>
        <IconStyled star>
          <StarOutlined />
        </IconStyled>
        <IconStyled star>
          <StarOutlined />
        </IconStyled>
      </div>
      {/* <h1 className="pro-price mb-0 mt-20">
        $270
        <span className="old-price">$540</span>
        <span className="text-danger">50% off</span>
      </h1> */}
      <hr />
      <p>{courseDetails}</p>
      <hr />
      <div className="gap-items">
        {renderButtonEnroll()}
        <ButtonStyled danger>
          <IconStyled>
            <HeartOutlined />
          </IconStyled>
          Wishlist
        </ButtonStyled>
      </div>
      <h4 className="box-title mt-20">Key Highlights</h4>
      <ul className="list-icons">
        <li>
          <i className="fa fa-check text-danger float-none" /> Party Wear
        </li>
        <li>
          <i className="fa fa-check text-danger float-none" /> Nam libero
          tempore, cum soluta nobis est
        </li>
        <li>
          <i className="fa fa-check text-danger float-none" /> Omnis voluptas as
          placeat facere possimus omnis voluptas.
        </li>
      </ul>
    </div>
  )
}
