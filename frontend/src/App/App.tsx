import React from "react"

// styled
import "antd/dist/antd.css"
import "./App.styled.scss"

// import route
import { Router, Switch } from "react-router-dom"
import { createBrowserHistory, History } from "history"
import HomeTemplate from "@/template/HomeTemplate"
import { routesHome } from "@/routes/routes"

const history: History = createBrowserHistory()

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

function App() {
  return (
    <Router history={history}>
      <Switch>{renderPublicRoute(routesHome)}</Switch>
    </Router>
  )
}

export default App
