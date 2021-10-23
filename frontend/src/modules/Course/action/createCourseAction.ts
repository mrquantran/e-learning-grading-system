const store = "course"

export const GO_TO_STEP = `${store}/GO_TO_STEP`
export const CREATE_DRAFT_COURSE = `${store}/CREATE_DRAFT_COURSE`

export default class CreateCourseAction {
  static CREATE_DRAFT_COURSE = {
    REQUEST: `${store}/CREATE_DRAFT_COURSE_REQUEST`,
    SUCCESS: `${store}/CREATE_DRAFT_COURSE_SUCCESS`,
    ERROR: `${store}/CREATE_DRAFT_COURSE_ERROR`
  }
}
