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
import {
  routesHome,
  routesAuth,
  routesPrivate,
  routesAdmin,
  routesCreate
} from "@/routes/routes"
import AuthTemplate from "@/template/AuthTemplate"
import PrivateGuard from "@/guards/PrivateGuard"
import AdminTemplate from "@/template/AdminTemplate"
import CreateTemplate from "@/template/CreateTemplate/CreateTemplate"

export const history: History = createBrowserHistory()

const renderRoute = (Component, routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Component
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></Component>
      )
    })
  }
}

const Components = [
  {
    Component: HomeTemplate,
    routes: routesHome
  },
  {
    Component: CreateTemplate,
    routes: routesCreate
  },
  {
    Component: AuthTemplate,
    routes: routesAuth
  },
  {
    Component: AdminTemplate,
    routes: routesAdmin
  },
  {
    Component: PrivateGuard,
    routes: routesPrivate
  }
]

function App() {
  return (
    <Router history={history}>
      {/* public Route */}
      <Switch>
        {Components.map(item => {
          return renderRoute(item.Component, item.routes)
        })}
      </Switch>
    </Router>
  )
}

export default App
