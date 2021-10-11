/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import avatar1 from "@/assets/images/avatar/avatar-1.png"
import avatar2 from "@/assets/images/avatar/avatar-2.png"
import avatar3 from "@/assets/images/avatar/avatar-3.png"
import avatar4 from "@/assets/images/avatar/avatar-4.png"
import avatar5 from "@/assets/images/avatar/avatar-5.png"

export default function GoodStudent() {
  return (
    <div className="col-12 ">
      <div className="box">
        <div className="box-header with-border">
          <h4 className="box-title">Top score students </h4>
          <ul className="box-controls pull-right d-md-flex d-none">
            <li className="dropdown">
              <button
                className="btn btn-primary px-10 "
                data-toggle="dropdown"
                // href="#"
                style={{ color: "white" }}
              >
                View List
              </button>
            </li>
          </ul>
        </div>
        <div className="box-body">
          <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
            <div className="d-flex align-items-center font-weight-500">
              <div className="mr-15 w-50 d-table">
                <img
                  src={avatar1}
                  className="avatar avatar-lg rounded10 bg-primary-light"
                  alt=""
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-dark hover-primary mb-5 d-block font-size-16"
                >
                  Amelia
                </a>
                <div className="w-200">
                  <div className="progress progress-sm mb-0">
                    <div
                      className="progress-bar progress-bar-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h5 className="font-weight-600 mb-0 badge badge-pill badge-primary">
                75%
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
            <div className="d-flex align-items-center font-weight-500">
              <div className="mr-15 w-50 d-table">
                <img
                  src={avatar2}
                  className="avatar avatar-lg rounded10 bg-primary-light"
                  alt=""
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-dark hover-primary mb-5 d-block font-size-16"
                >
                  Johen
                </a>
                <div className="w-200">
                  <div className="progress progress-sm mb-0">
                    <div
                      className="progress-bar progress-bar-warning progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={64}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h5 className="font-weight-600 mb-0 badge badge-pill badge-warning">
                64%
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
            <div className="d-flex align-items-center font-weight-500">
              <div className="mr-15 w-50 d-table">
                <img
                  src={avatar3}
                  className="avatar avatar-lg rounded10 bg-primary-light"
                  alt=""
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-dark hover-primary mb-5 d-block font-size-16"
                >
                  Micheal
                </a>
                <div className="w-200">
                  <div className="progress progress-sm mb-0">
                    <div
                      className="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={59}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "59%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h5 className="font-weight-600 mb-0 badge badge-pill badge-info">
                59%
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
            <div className="d-flex align-items-center font-weight-500">
              <div className="mr-15 w-50 d-table">
                <img
                  src={avatar4}
                  className="avatar avatar-lg rounded10 bg-primary-light"
                  alt=""
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-dark hover-primary mb-5 d-block font-size-16"
                >
                  Amanda
                </a>
                <div className="w-200">
                  <div className="progress progress-sm mb-0">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={45}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h5 className="font-weight-600 mb-0 badge badge-pill badge-danger">
                45%
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center gap-items-3 justify-content-between">
            <div className="d-flex align-items-center font-weight-500">
              <div className="mr-15 w-50 d-table">
                <img
                  src={avatar5}
                  className="avatar avatar-lg rounded10 bg-primary-light"
                  alt=""
                />
              </div>
              <div>
                <a
                  href="#"
                  className="text-dark hover-primary mb-5 d-block font-size-16"
                >
                  Tyler
                </a>
                <div className="w-200">
                  <div className="progress progress-sm mb-0">
                    <div
                      className="progress-bar progress-bar-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h5 className="font-weight-600 mb-0 badge badge-pill badge-primary">
                20%
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
