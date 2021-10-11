import actions from "../action/login"
import { checkAuthenticate, getUserInfo } from "../saga/authenticationSaga"

const initialState = {
  isAuthenticated: checkAuthenticate(),
  isFetching: false,
  user: getUserInfo()
}

function authentication(state = initialState, { type, payload }) {
  switch (type) {
    case actions.LOGIN_USER.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: payload,
        error: ""
      }
    case actions.LOGIN_USER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: payload.user,
        error: ""
      }
    case actions.LOGIN_USER.ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authentication
