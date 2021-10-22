import React from "react"
import { Layout } from "antd"
import { FooterStyled } from "./Footer.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"

const { Footer } = Layout

export default function FooterAdmin() {
  return (
    <FooterStyled>
      <Footer style={{ background: "#fff" }}>
        <ButtonStyled danger>Continue</ButtonStyled>
      </Footer>
    </FooterStyled>
  )
}
