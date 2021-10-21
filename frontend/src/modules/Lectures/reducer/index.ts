import lectureActions from "../actions/lectureAction"

const initialState = {
  isFetching: false,
  data: []
}

const lectureReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case lectureActions.FETCH_LECTURE_DETAIL.REQUEST: {
      return { ...state, isFetching: true }
    }
    case lectureActions.FETCH_LECTURE_DETAIL.SUCCESS: {
      return { ...state, isFetching: false, data: payload }
    }
    case lectureActions.FETCH_LECTURE_DETAIL.ERROR: {
      return { ...state, isFetching: false, error: payload }
    }
    default:
      return state
  }
}

export default lectureReducer
