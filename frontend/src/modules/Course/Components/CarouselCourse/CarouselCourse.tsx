/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { CarouselCourseItemStyled } from "./CarouselCourse.styled"

import avatar2 from "@/assets/images/avatar/avatar-2.png"

export default function CarouselCourse() {
  return (
    <CarouselCourseItemStyled>
      <div className="box">
        <div className="box-body">
          <div className="d-flex flex-row">
            <div>
              <img
                src={avatar2}
                alt="user"
                className="rounded-circle bg-success-light"
                width={100}
              />
            </div>
            <div className="pl-20">
              <h3>Javascript</h3>
              <h6>Quantran</h6>
              <button className="btn btn-info-light">
                <i className="ti-plus" /> Follow
              </button>
            </div>
          </div>
        </div>
        <div className="box-body">
          <p className="text-center aboutscroll">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pharetra varius quam sit amet vulputate. Quisque mauris augue,
            molestie tincidunt condimentum vitae.
          </p>
          <ul className="list-inline text-center">
            <li>
              <a
                href="javascript:void(0)"
                data-toggle="tooltip"
                data-original-title="Website"
              >
                <i className="fa fa-globe font-size-20" />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-toggle="tooltip"
                data-original-title="twitter"
              >
                <i className="fa fa-twitter font-size-20" />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-toggle="tooltip"
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook-square font-size-20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </CarouselCourseItemStyled>
  )
}
