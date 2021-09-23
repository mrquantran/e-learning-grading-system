import React from "react"
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps
} from "react-router-dom"
import { connect } from "react-redux"

import configureStore from "../redux/saga/rootSaga"

interface ReduxProps {
  isAuthenticated: boolean
}
interface Props extends ReduxProps, RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

export const store = configureStore()

// export function loggedIn() {
//   // const state = store.getState()

//   return state.authentication.isAuthenticated
// }

function PrivateGuard(props: Props) {
  const { isAuthenticated, component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={props => {
        if (true) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default PrivateGuard
