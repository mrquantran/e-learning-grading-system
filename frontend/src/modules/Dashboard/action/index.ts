export const store = "dashboard"

const noop = () => {}

const createAction = (
  type,
  payload = {},
  meta = {},
  onSuccess = noop,
  onFail = noop
) => {
  return {
    type,
    payload,
    meta,
    onSuccess,
    onFail
  }
}

export default class DashboardAction {
  static FETCH_COURSES_DATA = {
    REQUEST: `${store}/FETCH_COURSES_DATA_REQUEST`,
    SUCCESS: `${store}/FETCH_COURSES_DATA_SUCCESS`,
    ERROR: `${store}/FETCH_COURSES_DATA_ERROR`
  }

  static fetchCoursesData(payload) {
    return createAction(this.FETCH_COURSES_DATA.REQUEST, payload)
  }

  static fetchCoursesDataSuccess(payload) {
    return createAction(this.FETCH_COURSES_DATA.SUCCESS, payload)
  }

  static fetchCoursesDataError(payload) {
    return createAction(this.FETCH_COURSES_DATA.ERROR, payload)
  }
}
