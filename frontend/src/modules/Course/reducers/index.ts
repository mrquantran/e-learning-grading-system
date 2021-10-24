import { LOGOUT_USER } from "@/modules/authentication/action/logout"
import actions from "../action/courseAction"

const initialState = {
  course: {},
  instructorCourse: {
    data: [],
    isFetching: false
  },
  statusCourse: {
    isFetching: false,
    isEnroll: null,
    isFavorite: null
  },
  myCourse: {
    data: [],
    isFetching: false
  }
}

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_USER:
      return { ...state, statusCourse: initialState.statusCourse }
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
    case actions.FETCH_COURSES_ENROLL.REQUEST:
      return {
        ...state,
        myCourse: {
          ...state.myCourse,
          isFetching: true
        }
      }
    case actions.FETCH_COURSES_ENROLL.SUCCESS:
      return {
        ...state,
        myCourse: {
          ...state.myCourse,
          isFetching: false,
          data: payload
        }
      }
    case actions.FETCH_COURSES_ENROLL.ERROR:
      return {
        ...state,
        myCourse: {
          ...state.myCourse,
          isFetching: false,
          error: payload
        }
      }

    case actions.FETCH_COURSES_DRAFT.REQUEST:
      return {
        ...state,
        instructorCourse: {
          ...state.instructorCourse,
          isFetching: true
        }
      }
    case actions.FETCH_COURSES_DRAFT.SUCCESS:
      return {
        ...state,
        instructorCourse: {
          ...state.instructorCourse,
          data: payload,
          isFetching: false
        }
      }
    case actions.FETCH_COURSES_DRAFT.ERROR:
      return {
        ...state,
        instructorCourse: {
          ...state.instructorCourse,
          isFetching: false,
          error: payload
        }
      }
    default:
      return state
  }
}

export default courseReducer
