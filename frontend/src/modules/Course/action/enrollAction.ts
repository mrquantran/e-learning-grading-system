const store = "course"

export const ENROLL_COURSE = `${store}/ENROLL_COURSE`

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

export default class EnrollCourseAction {
  static ENROLL_COURSE = {
    REQUEST: `${store}/ENROLL_COURSE_REQUEST`,
    SUCCESS: `${store}/ENROLL_COURSE_SUCCESS`,
    ERROR: `${store}/ENROLL_COURSE_ERROR`
  }

  static enrollCourse(payload) {
    return createAction(this.ENROLL_COURSE.REQUEST, payload)
  }

  static enrollCourseSuccess(payload) {
    return createAction(this.ENROLL_COURSE.SUCCESS, payload)
  }

  static enrollCourseError(payload) {
    return createAction(this.ENROLL_COURSE.ERROR, payload)
  }
}
