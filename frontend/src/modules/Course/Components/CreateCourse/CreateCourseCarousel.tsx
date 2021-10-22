import React from "react"
import bg5 from "@/assets/images/bg/bg-5.png"
import custom14 from "@/assets/images/custom-14.svg"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

export default function CreateCourseCarousel() {
  return (
    <div className="box pull-up">
      <div
        className="box-body bg-img"
        style={{ backgroundImage: `url(${bg5})` }}
        data-overlay-light={9}
      >
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-md-flex align-items-center mb-30 mb-lg-0 w-p100">
            <img src={custom14} className="img-fluid max-w-150" alt="123" />
            <div className="ml-30">
              <h4 className="mb-10">Create an Engaging Course!</h4>
              <p className="mb-0 text-fade">
                Whether you've been teaching for years or are teaching for the
                first time, you can
                <br />
                of a page when looking at its layout.{" "}
              </p>
            </div>
          </div>
          <div>
            <ButtonStyled primary>New course</ButtonStyled>
          </div>
        </div>
      </div>
    </div>
  )
}
