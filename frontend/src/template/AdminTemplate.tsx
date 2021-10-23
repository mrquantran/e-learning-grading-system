import LeftMenuAdmin from "@/components/admin/LeftMenu/LeftMenuAdmin"
import NavbarAdmin from "@/components/admin/Navbar/NavbarAdmin"
import { RootState } from "@/redux/reducer/rootReducer"
import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router"
import { LayoutStyled } from "./HomeTemplate.styled"

export default function AdminTemplate(props) {
  // es6
  let { Component, ...restRoute } = props

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return isAuthenticated ? (
          <LayoutStyled className="site-layout">
            <LeftMenuAdmin />
            <LayoutStyled className="site-layout">
              <NavbarAdmin />
              <Component {...propsRoute} />
            </LayoutStyled>
          </LayoutStyled>
        ) : (
          <Redirect to="/login" />
        )
      }}
    />
  )
}
