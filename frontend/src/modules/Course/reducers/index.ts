import actions from "../action/courseAction"

const initialState = {
  isFetching: false,
  course: {}
}

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_COURSE_DETAIL.REQUEST:
      return { ...state, isFetching: true }
    case actions.FETCH_COURSE_DETAIL.SUCCESS:
      return { ...state, isFetching: false, course: payload }
    case actions.FETCH_COURSE_DETAIL.ERROR:
      return { ...state, isFetching: false, error: payload }
    default:
      return state
  }
}

export default courseReducer
