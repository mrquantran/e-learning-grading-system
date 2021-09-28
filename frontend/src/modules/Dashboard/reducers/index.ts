import actions from "../action/index"

const initialState = {
  courses: {
    data: [],
    isFetching: false
  }
}

const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_COURSES_DATA.REQUEST:
      return {
        ...state,
        courses: {
          isFetching: true,
          data: payload
        }
      }
    default:
      return state
  }
}

export default dashboardReducer
