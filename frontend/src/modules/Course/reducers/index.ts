import actions from "../action/courseAction"

const initialState = {
  isFetching: false,
  course: {},
  statusCourse: {
    isFetching: false,
    isEnroll: null,
    isFavorite: null
  }
}

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_COURSE_DETAIL.REQUEST:
      return { ...state, isFetching: true }
    case actions.FETCH_COURSE_DETAIL.SUCCESS:
      return { ...state, isFetching: false, course: payload }
    case actions.FETCH_COURSE_DETAIL.ERROR:
      return { ...state, isFetching: false, error: payload }
    case actions.FETCH_COURSE_STATUS.REQUEST:
      return {
        ...state,
        statusCourse: { ...state.statusCourse, isFetching: true }
      }
    case actions.FETCH_COURSE_STATUS.SUCCESS:
      return {
        ...state,
        statusCourse: {
          ...state.statusCourse,
          isFetching: false,
          isEnroll: payload.userEnroll,
          isFavorite: payload.favorite
        }
      }
    case actions.FETCH_COURSE_STATUS.ERROR:
      return {
        ...state,
        statusCourse: {
          ...state.statusCourse,
          isFetching: false,
          error: payload
        }
      }
    default:
      return state
  }
}

export default courseReducer
