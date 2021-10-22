import FooterAdmin from "@/components/admin/Footer/FooterAdmin"
import HeaderAdmin from "@/components/admin/Header/HeaderAdmin"
import { RootState } from "@/redux/reducer/rootReducer"
import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router"
import { LayoutStyled } from "../HomeTemplate.styled"

export default function CreateTemplate(props) {
  // es6
  let { Component, ...restRoute } = props

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return isAuthenticated ? (
          // <LayoutStyled className="site-layout">
          <LayoutStyled className="site-layout">
            <HeaderAdmin />
            <Component {...propsRoute} />
            <FooterAdmin />
          </LayoutStyled>
        ) : (
          // </LayoutStyled>
          <Redirect to="/login" />
        )
      }}
    />
  )
}
