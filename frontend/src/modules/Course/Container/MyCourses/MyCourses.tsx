import React from "react"
import { Row, Col } from "antd"

export default function MyCourses() {
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
      <Row>
        <Col span={6} style={{ padding: "0px 8px" }}>
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Box progress</h4>
              <div className="box-controls pull-right">
                <div className="progress progress-xs w-100 mb-0 mt-10">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="box-body">
              <p>
                Fusce commodo eros a vulputate accumsan. Nulla et mollis nibh.
                Donec sodales convallis urna luctus pulvinar. Ut vestibulum enim
                vitae elit luctus, id tincidunt metus suscipit.
              </p>
            </div>
          </div>
        </Col>
        <Col span={6} style={{ padding: "0px 8px" }}>
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Box progress</h4>
              <div className="box-controls pull-right">
                <div className="progress progress-xs w-100 mb-0 mt-10">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="box-body">
              <p>
                Fusce commodo eros a vulputate accumsan. Nulla et mollis nibh.
                Donec sodales convallis urna luctus pulvinar. Ut vestibulum enim
                vitae elit luctus, id tincidunt metus suscipit.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
