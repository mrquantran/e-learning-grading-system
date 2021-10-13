import React from "react"
import { CourseItemStyled } from "./CourseItem.styled"

import { Link } from "react-router-dom"

export default function CourseItem({ name, firstName, lastName, id }) {
  return (
    <Link to={`/detail/s${id}`}>
      <CourseItemStyled>
        <div className="box pull-up">
          <div className="box-body">
            <div className="bg-primary rounded">
              <h5 className="text-white text-center p-10">It &amp; software</h5>
            </div>
            <p className="mb-0 font-size-18">{name}</p>
            <p className="mb-0 font-size-18">Course A-Z</p>
            <div className="d-flex justify-content-between mt-30">
              <div>
                <p className="mb-0 text-fade">Author</p>
                <p className="mb-0">{`${firstName} ${lastName}`}</p>
              </div>
              <div>
                <p className="mb-5 font-weight-600">55%</p>
                <div className="progress progress-sm mb-0 w-100">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "55%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseItemStyled>
    </Link>
  )
}
