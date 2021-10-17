import React from "react"

// styled
import "antd/dist/antd.css"
import "./App.styled.scss"

// asset
// import "../assets/css/style.css"
// import "../assets/css/skin_color.css"
// import "../assets/css/vendors_css.css"

// import route
import { Router, Switch } from "react-router-dom"

import { createBrowserHistory, History } from "history"
import HomeTemplate from "@/template/HomeTemplate"
import { routesHome, routesAuth, routesPrivate } from "@/routes/routes"
import AuthTemplate from "@/template/AuthTemplate"
import PrivateGuard from "@/guards/PrivateGuard"

export const history: History = createBrowserHistory()

const renderPublicRoute = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></HomeTemplate>
      )
    })
  }
}

const renderAuthRoute = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AuthTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></AuthTemplate>
      )
    })
  }
}

const renderPrivateRoute = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <PrivateGuard
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></PrivateGuard>
      )
    })
  }
}

function App() {
  return (
    <Router history={history}>
      {/* public Route */}
      <Switch>
        {renderPublicRoute(routesHome)}
        {renderAuthRoute(routesAuth)}
        {renderPrivateRoute(routesPrivate)}
      </Switch>
    </Router>
  )
}

export default App
