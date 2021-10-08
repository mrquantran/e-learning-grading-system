/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import avatar12 from "@/assets/images/avatar/avatar-12.png"
import avatar13 from "@/assets/images/avatar/avatar-13.png"
import avatar15 from "@/assets/images/avatar/avatar-15.png"
import avatar16 from "@/assets/images/avatar/avatar-16.png"

export default function UpcomingTest() {
  return (
    <div className="col-12">
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">Upcoming Test</h4>
          <ul className="box-controls pull-right d-md-flex d-none">
            <li>
              <button className="btn btn-primary-light px-10">Scheduled</button>
            </li>
          </ul>
        </div>
        <div className="box-body p-0">
          <div className="media-list media-list-hover">
            <div className="media bar-0">
              <a className="align-self-start" href="#">
                <img
                  className="avatar avatar-lg bg-success-light rounded"
                  src={avatar12}
                  alt="..."
                />
              </a>
              <div className="media-body">
                <p className="mb-0">
                  <a className="hover-success font-size-16" href="#">
                    Johen doe
                  </a>
                  <span className="float-right text-fade">
                    Class ID: <span className="font-weight-500">C125</span>
                  </span>
                </p>
                <h6 className="text-fade my-10">12 Dec • 2020 9:00 AM</h6>
                <h6>
                  Requested for :{" "}
                  <span className="text-success">2 Subjects</span>
                </h6>
              </div>
            </div>
            <div className="media bar-0">
              <a className="align-self-start" href="#">
                <img
                  className="avatar avatar-lg bg-success-light rounded"
                  src={avatar15}
                  alt="..."
                />
              </a>
              <div className="media-body">
                <p className="mb-0">
                  <a className="hover-success font-size-16" href="#">
                    Molly doe
                  </a>
                  <span className="float-right text-fade">
                    Class ID: <span className="font-weight-500">C225</span>
                  </span>
                </p>
                <h6 className="text-fade my-10">18 Dec • 2020 9:00 AM</h6>
                <h6>
                  Requested for :{" "}
                  <span className="text-success">4 Subjects</span>
                </h6>
              </div>
            </div>
            <div className="media bar-0">
              <a className="align-self-start" href="#">
                <img
                  className="avatar avatar-lg bg-success-light rounded"
                  src={avatar13}
                  alt="..."
                />
              </a>
              <div className="media-body">
                <p className="mb-0">
                  <a className="hover-success font-size-16" href="#">
                    Akon doe
                  </a>
                  <span className="float-right text-fade">
                    Class ID: <span className="font-weight-500">C345</span>
                  </span>
                </p>
                <h6 className="text-fade my-10">22 Dec • 2020 9:00 AM</h6>
                <h6>
                  Requested for :{" "}
                  <span className="text-success">1 Subjects</span>
                </h6>
              </div>
            </div>
            <div className="media bar-0">
              <a className="align-self-start" href="#">
                <img
                  className="avatar avatar-lg bg-success-light rounded"
                  src={avatar16}
                  alt="..."
                />
              </a>
              <div className="media-body">
                <p className="mb-0">
                  <a className="hover-success font-size-16" href="#">
                    Maical doe
                  </a>
                  <span className="float-right text-fade">
                    Class ID: <span className="font-weight-500">C185</span>
                  </span>
                </p>
                <h6 className="text-fade mt-10 mb-15">23 Dec • 2020 9:00 AM</h6>
                <h6>
                  Requested for :{" "}
                  <span className="text-success">3 Subjects</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
