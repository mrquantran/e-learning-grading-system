const store = "course"

export const GO_TO_STEP = `${store}/GO_TO_STEP`
export const CHANGE_SELECTED_COMPONENT = `${store}/CHANGE_SELECTED_COMPONENT`

export const FETCH_INSTRUCTOR_COURSE_DETAIL = `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL`
export const UPDATE_INSTRUCTOR_COURSE = `${store}/UPDATE_INSTRUCTOR_COURSE`
export const FETCH_COURSE_LECTURE = `${store}/FETCH_COURSE_LECTURE`
export const DELETE_COURSE_LECTURE = `${store}/DELETE_COURSE_LECTURE`
export const UPDATE_COURSE_LECTURE = `${store}/UPDATE_COURSE_LECTURE`
export const UPDATE_LECTURE_SECTION = `${store}/UPDATE_LECTURE_SECTION`

export const GET_USER_ENROLL = `${store}/GET_USER_ENROLL`

export const CREATE_LECTURE = `${store}/CREATE_LECTURE`
export const DELETE_LECTURE = `${store}/DELETE_LECTURE`
export const UPDATE_LECTURE = `${store}/UPDATE_LECTURE`

export const DELETE_COURSE = `${store}/DELETE_COURSE`

export const PUBLISH_COURSE = `${store}/PUBLISH_COURSE`

export const ENROLL_COURSE_AS_INSTRUCTOR = `${store}/ENROLL_COURSE_AS_INSTRUCTOR`

export default class ManageCourseAction {
  static changeSelectedComponent = key => ({
    type: CHANGE_SELECTED_COMPONENT,
    payload: key
  })

  static deleteCourse = id => ({
    type: DELETE_COURSE,
    payload: id
  })

  static publishCourse = courseId => ({
    type: PUBLISH_COURSE,
    payload: courseId
  })

  static getTeacherInCourse = (courseId, type) => ({
    type: GET_USER_ENROLL,
    payload: { courseId, type }
  })

  static enrollCourseAsInstructor = (courseId, data) => ({
    type: ENROLL_COURSE_AS_INSTRUCTOR,
    payload: { courseId, data }
  })

  static ENROLL_COURSE_AS_INSTRUCTOR = {
    REQUEST: `${store}/ENROLL_COURSE_AS_INSTRUCTOR_REQUEST`,
    SUCCESS: `${store}/ENROLL_COURSE_AS_INSTRUCTOR_SUCCESS`,
    ERROR: `${store}/ENROLL_COURSE_AS_INSTRUCTOR_ERROR`
  }

  static PUBLISH_COURSE = {
    REQUEST: `${store}/PUBLISH_COURSE_REQUEST`,
    SUCCESS: `${store}/PUBLISH_COURSE_SUCCESS`,
    ERROR: `${store}/PUBLISH_COURSE_ERROR`
  }

  static GET_USER_ENROLL = {
    REQUEST: `${store}/GET_USER_ENROLL_REQUEST`,
    SUCCESS: `${store}/GET_USER_ENROLL_SUCCESS`,
    ERROR: `${store}/GET_USER_ENROLL_ERROR`
  }

  static DELETE_COURSE = {
    REQUEST: `${store}/DELETE_COURSE_REQUEST`,
    SUCCESS: `${store}/DELETE_COURSE_SUCCESS`,
    ERROR: `${store}/DELETE_COURSE_ERROR`
  }

  static FETCH_INSTRUCTOR_COURSE_DETAIL = {
    REQUEST: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_REQUEST`,
    SUCCESS: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_SUCCESS`,
    ERROR: `${store}/FETCH_INSTRUCTOR_COURSE_DETAIL_ERROR`
  }

  static UPDATE_INSTRUCTOR_COURSE = {
    REQUEST: `${store}/UPDATE_INSTRUCTOR_COURSE_REQUEST`,
    SUCCESS: `${store}/UPDATE_INSTRUCTOR_COURSE_SUCCESS`,
    ERROR: `${store}/UPDATE_INSTRUCTOR_COURSE_ERROR`
  }

  static FETCH_COURSE_LECTURE = {
    REQUEST: `${store}/FETCH_COURSE_LECTURE_REQUEST`,
    SUCCESS: `${store}/FETCH_COURSE_LECTURE_SUCCESS`,
    ERROR: `${store}/FETCH_COURSE_LECTURE_ERROR`
  }

  static DELETE_COURSE_LECTURE = {
    REQUEST: `${store}/DELETE_COURSE_LECTURE_REQUEST`,
    SUCCESS: `${store}/DELETE_COURSE_LECTURE_SUCCESS`,
    ERROR: `${store}/DELETE_COURSE_LECTURE_ERROR`
  }

  static UPDATE_COURSE_LECTURE = {
    REQUEST: `${store}/UPDATE_COURSE_LECTURE_REQUEST`,
    SUCCESS: `${store}/UPDATE_COURSE_LECTURE_SUCCESS`,
    ERROR: `${store}/UPDATE_COURSE_LECTURE_ERROR`
  }

  static UPDATE_LECTURE_SECTION = {
    REQUEST: `${store}/UPDATE_LECTURE_SECTION_REQUEST`,
    SUCCESS: `${store}/UPDATE_LECTURE_SECTION_SUCCESS`,
    ERROR: `${store}/UPDATE_LECTURE_SECTION_ERROR`
  }

  static CREATE_LECTURE = {
    REQUEST: `${store}/CREATE_LECTURE_REQUEST`,
    SUCCESS: `${store}/CREATE_LECTURE_SUCCESS`,
    ERROR: `${store}/CREATE_LECTURE_ERROR`
  }

  static DELETE_LECTURE = {
    REQUEST: `${store}/DELETE_LECTURE_REQUEST`,
    SUCCESS: `${store}/DELETE_LECTURE_SUCCESS`,
    ERROR: `${store}/DELETE_LECTURE_ERROR`
  }

  static UPDATE_LECTURE = {
    REQUEST: `${store}/UPDATE_LECTURE_REQUEST`,
    SUCCESS: `${store}/UPDATE_LECTURE_SUCCESS`,
    ERROR: `${store}/UPDATE_LECTURE_ERROR`
  }
}
