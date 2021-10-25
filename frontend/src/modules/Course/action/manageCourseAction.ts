const store = "course"

export const GO_TO_STEP = `${store}/GO_TO_STEP`
export const FETCH_INSTRUCTOR_COURSE_DETAIL = `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL`

export default class ManageCourseAction {
  static FETCH_INSTRUCTOR_COURSE_DETAIL = {
    REQUEST: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_REQUEST`,
    SUCCESS: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_SUCCESS`,
    ERROR: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_ERROR`
  }
}
