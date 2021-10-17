/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react"
import { Row, Col } from "antd"
import { useDispatch } from "react-redux"
import { FETCH_COURSES_ENROLL } from "../../action/courseAction"
import MyCourseList from "../../Components/MyCourseList/MyCourseList"

export default function MyCourses() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_COURSES_ENROLL })
  }, [dispatch])

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="box no-shadow mb-0 bg-transparent">
            <div className="box-header no-border px-0">
              <h4 className="box-title">My Courses</h4>
              <ul className="box-controls pull-right d-md-flex d-none">
                <li>
                  <button className="btn btn-primary-light px-10">
                    View All
                  </button>
                </li>
                <li className="dropdown">
                  <button
                    className="dropdown-toggle btn btn-primary-light px-10"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Most Popular
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" style={{}}>
                    <a className="dropdown-item active" href="#">
                      Today
                    </a>
                    <a className="dropdown-item" href="#">
                      Yesterday
                    </a>
                    <a className="dropdown-item" href="#">
                      Last week
                    </a>
                    <a className="dropdown-item" href="#">
                      Last month
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <MyCourseList />
    </div>
  )
}
