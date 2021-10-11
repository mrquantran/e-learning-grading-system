import actionLogin from "../action/login"
import actionLogout from "../action/logout"
import { checkAuthenticate, getUserInfo } from "../saga/authenticationSaga"

const initialState = {
  isAuthenticated: checkAuthenticate(),
  isFetching: false,
  user: getUserInfo()
}

function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case actionLogin.LOGIN_USER.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: payload,
        error: ""
      }
    case actionLogin.LOGIN_USER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: payload.user,
        error: ""
      }
    case actionLogin.LOGIN_USER.ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
        isAuthenticated: false
      }
    case actionLogout.LOGOUT_USER.SUCCESS:
    case actionLogout.LOGOUT_USER.ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state
  }
}

export default authentication
