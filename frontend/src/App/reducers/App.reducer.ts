import { CLOSE_SIDE_NAV } from "../actions/App.actions"

const initialState = {
  isAuthenticated: false,
  closeSideNav: false
}

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SIDE_NAV: {
      return {
        ...state,
        closeSideNav: !state.closeSideNav
      }
    }
    default:
      return state
  }
}
