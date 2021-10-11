import React, { Fragment } from "react"
import { CarouselBoxStyled2 } from "./Carousel2.styled"
import custom1 from "@/assets/images/custom-1.svg"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/reducer/rootReducer"
import { history } from "@/App/App"

const changeToLogin = () => {
  history.push("/login")
}

interface User {
  email: string
  firstName: string
  lastName: string
}

// in 2 case user not login and login
const renderTitle = (isAuth: boolean, user: User) => {
  return isAuth ? (
    <Fragment>
      <h2 style={{ color: "#0052cc" }}>
        Welcome back, <strong>{user.firstName}!</strong>
      </h2>
      <p className="text-dark my-10 font-size-16">
        Your students complated <strong className="text-warning">80%</strong> of
        the tasks.
      </p>
      <p className="text-dark my-10 font-size-16">
        Progress is <strong className="text-warning">very good!</strong>
      </p>
    </Fragment>
  ) : (
    <Fragment>
      <h2 style={{ color: "#0052cc" }}>
        Explore your<strong> Study!</strong>
      </h2>

      <div>
        <button
          type="button"
          className="waves-effect waves-light btn-block btn btn-primary"
          style={{ whiteSpace: "nowrap", width: "50%", marginTop: "10px" }}
          onClick={changeToLogin}
        >
          Start Now!
        </button>
      </div>
    </Fragment>
  )
}

export default function Carousel2() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  return (
    <CarouselBoxStyled2>
      <div className="box theme2">
        <div className="box-body d-flex px-0">
          <div
            className="flex-grow-1 p-30 flex-grow-1 bg-img dask-bg bg-none-md"
            style={{
              backgroundPosition: "right bottom",
              backgroundSize: "auto 100%",
              backgroundImage: `url(${custom1})`
            }}
          >
            <div className="row">
              <div className="col-12 col-xl-7">
                {renderTitle(isAuthenticated, user)}
              </div>
              <div className="col-12 col-xl-5" />
            </div>
          </div>
        </div>
      </div>
    </CarouselBoxStyled2>
  )
}
