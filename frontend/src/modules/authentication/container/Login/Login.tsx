/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function Login() {
  return (
    <div className="container h-p100">
      <div className="row align-items-center justify-content-md-center h-p100">
        <div className="col-12">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="bg-white rounded30 shadow-lg">
                <div className="content-top-agile p-20 pb-0">
                  <h2 className="text-primary">Let's Get Started</h2>
                  <p className="mb-0">Sign in to continue to WebkitX.</p>
                </div>
                <LoginForm />
              </div>
              <div className="text-center">
                <p className="mt-20 text-white">- Sign With -</p>
                <p className="gap-items-2 mb-20">
                  <a
                    className="btn btn-social-icon btn-round btn-facebook"
                    href="#"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-round btn-twitter"
                    href="#"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="btn btn-social-icon btn-round btn-instagram"
                    href="#"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
