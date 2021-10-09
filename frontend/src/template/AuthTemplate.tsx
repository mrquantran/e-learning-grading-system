import React from "react"
import { Route } from "react-router"
import bgAuth from "@/assets/images/auth-bg/bg-1.jpg"

export default function AuthTemplate(props) {
  // es6
  let { Component, ...restRoute } = props

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return (
          <div style={{ backgroundImage: `url(${bgAuth})`, height: "100%" }}>
            <Component {...propsRoute} />
          </div>
        )
      }}
    />
  )
}
