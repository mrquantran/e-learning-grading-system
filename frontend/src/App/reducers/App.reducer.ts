import { CLOSE_SIDE_NAV } from "../actions/App.actions"

const initialState = {
  isAuthenticated: false,
  closeSideNav: false,
  modal: {
    isOpenModal: false,
    title: "Modal",
    content: "Modal content",
    button: {
      confirm: {
        function: null,
        text: "Confirm"
      },
      cancel: {
        function: null,
        text: "Cancel"
      }
    }
  }
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
