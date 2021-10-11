/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { ErrorMessageStyled } from "./LoginForm.styled"
import { useDispatch } from "react-redux"
import { LOGIN_USER } from "../../action/login"

interface MyFormValues {
  email: string
  password: string
}

export default function LoginForm() {
  const initialValues: MyFormValues = { email: "", password: "" }

  const dispatch = useDispatch()

  return (
    <div className="p-40">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            dispatch({
              type: LOGIN_USER,
              payload: {
                user: values
              }
            })
          }, 400)
        }}
        validate={values => {
          const errors: any = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-transparent">
                    <i className="ti-user" />
                  </span>
                </div>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  className="form-control pl-15 bg-transparent"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  render={msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
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
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="form-control pl-15 bg-transparent"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  render={msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
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
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-danger mt-10"
                >
                  SIGN IN
                </button>
              </div>
              {/* /.col */}
            </div>
          </Form>
        )}
      </Formik>
      <div className="text-center">
        <p className="mt-15 mb-0">
          Don't have an account?
          <a href="auth_register.html" className="text-warning ml-5">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}
