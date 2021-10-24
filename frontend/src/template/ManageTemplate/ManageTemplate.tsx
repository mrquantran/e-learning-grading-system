import HeaderManage from "@/components/admin/HeaderManage/HeaderManage"
import { RootState } from "@/redux/reducer/rootReducer"
import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router"
import { LayoutStyled } from "../HomeTemplate.styled"

export default function ManageTemplate(props) {
  // es6
  let { Component, ...restRoute } = props

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return isAuthenticated ? (
          <LayoutStyled className="site-layout">
            <HeaderManage />
            <Component {...propsRoute} />
          </LayoutStyled>
        ) : (
          // </LayoutStyled>
          <Redirect to="/login" />
        )
      }}
    />
  )
}
