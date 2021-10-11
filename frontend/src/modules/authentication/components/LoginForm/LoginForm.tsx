import React from "react"

export default function LoginForm() {
  return (
    <div className="p-40">
      <form action="index.html" method="post">
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-transparent">
                <i className="ti-user" />
              </span>
            </div>
            <input
              type="text"
              className="form-control pl-15 bg-transparent"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text  bg-transparent">
                <i className="ti-lock" />
              </span>
            </div>
            <input
              type="password"
              className="form-control pl-15 bg-transparent"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="checkbox">
              <input type="checkbox" id="basic_checkbox_1" />
              <label htmlFor="basic_checkbox_1">Remember Me</label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-6">
            <div className="fog-pwd text-right">
              <a
                // href="javascript:void(0)"
                className="hover-warning"
              >
                <i className="ion ion-locked" /> Forgot pwd?
              </a>
              <br />
            </div>
          </div>
          {/* /.col */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-danger mt-10">
              SIGN IN
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="text-center">
        <p className="mt-15 mb-0">
          Don't have an account?{" "}
          <a href="auth_register.html" className="text-warning ml-5">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
