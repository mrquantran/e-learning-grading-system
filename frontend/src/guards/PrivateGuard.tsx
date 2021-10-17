import LeftMenu from "@/components/LeftMenu/LeftMenu"
import Navbar from "@/components/Navbar/Navbar"
import { RootState } from "@/redux/reducer/rootReducer"
import { LayoutStyled } from "@/template/HomeTemplate.styled"
import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"
// import { connect } from "react-redux"

import configureStore from "../redux/saga/rootSaga"

export const store = configureStore()

function PrivateGuard(props) {
  const { Component, ...restRoute } = props

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return isAuthenticated ? (
          <LayoutStyled className="site-layout">
            {/* LeftMenu */}
            <LeftMenu />
            <LayoutStyled className="site-layout">
              <Navbar />
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

export default PrivateGuard
