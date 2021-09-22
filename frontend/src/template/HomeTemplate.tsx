import React, { Fragment } from "react"

import { Route } from "react-router"

export default function HomeTemplate(props) {
  // es6
  let { Component, ...restRoute } = props

  return (
    <Route
      {...restRoute}
      render={propsRoute => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        )
      }}
    />
  )
}
