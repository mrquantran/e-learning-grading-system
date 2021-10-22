/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import logo from "@/assets/images/logo.svg"
import { Layout } from "antd"
import { StepHeaderStyled } from "./HeaderAdmin.styled"
import { LogoHeaderStyled } from "@/stylesheets/Logo/LogoHeader.styled"
import StepHeader from "../StepHeader/StepHeader"

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
  return (
    <React.Fragment>
      <Header className="site-layout-background" style={headerStyled}>
        <LogoHeaderStyled>
          <img src={logo} />
        </LogoHeaderStyled>
      </Header>
      <StepHeader />
    </React.Fragment>
  )
}
