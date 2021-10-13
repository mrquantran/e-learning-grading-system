const store = "course"

export const FETCH_COURSE_DETAIL = `${store}/FETCH_COURSE_DETAIL`

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

export default class CourseDetailAction {
  static FETCH_COURSE_DETAIL = {
    REQUEST: `${store}/FETCH_COURSE_DETAIL_REQUEST`,
    SUCCESS: `${store}/FETCH_COURSE_DETAIL_SUCCESS`,
    ERROR: `${store}/FETCH_COURSE_DETAIL_ERROR`
  }

  static fetchCoursesData(payload) {
    return createAction(this.FETCH_COURSE_DETAIL.REQUEST, payload)
  }

  static fetchCoursesDataSuccess(payload) {
    return createAction(this.FETCH_COURSE_DETAIL.SUCCESS, payload)
  }

  static fetchCoursesDataError(payload) {
    return createAction(this.FETCH_COURSE_DETAIL.ERROR, payload)
  }
}
