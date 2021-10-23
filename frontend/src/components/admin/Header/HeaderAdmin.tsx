/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import logo from "@/assets/images/logo.svg"
import { Layout } from "antd"
import { LogoHeaderStyled } from "@/stylesheets/Logo/LogoHeader.styled"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"
import { ContentHeaderStyled } from "./HeaderAdmin.styled"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/reducer/rootReducer"

const { Header } = Layout

const headerStyled = {
  height: "80px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: "0 2.4rem"
}

export default function HeaderAdmin() {
  const goToHome = () => {
    history.push(pathRoute.instructorCourse)
  }

  const {
    step: stepCurrently,
    tabs: { course: tabs }
  } = useSelector((state: RootState) => state.create)

  return (
    <React.Fragment>
      <Header className="site-layout-background" style={headerStyled}>
        <LogoHeaderStyled onClick={goToHome}>
          <img src={logo} />
        </LogoHeaderStyled>
        <ContentHeaderStyled>
          <span>
            Step {stepCurrently} of {tabs.length}
          </span>
        </ContentHeaderStyled>
      </Header>
    </React.Fragment>
  )
}
