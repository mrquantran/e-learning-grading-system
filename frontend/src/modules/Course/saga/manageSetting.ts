import { all, call, put, select, takeLatest } from "@redux-saga/core/effects"
import {
  DELETE_COURSE,
  ENROLL_COURSE_AS_INSTRUCTOR,
  GET_USER_ENROLL,
  PUBLISH_COURSE
} from "../action/manageCourseAction"
import actionManageCourse from "../action/manageCourseAction"
import {
  errorNotification,
  getError,
  successNotification
} from "@/utils/notification"
import { API } from "@/apis"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"
import { getDetailManage } from "."

function* deleteCourse({ payload: id }: any) {
  try {
    yield put({
      type: actionManageCourse.DELETE_COURSE.REQUEST
    })

    const {
      data: { message }
    } = yield call(API.courseAPI.deleteCourse, id)

    yield put({
      type: actionManageCourse.DELETE_COURSE.SUCCESS
    })

    successNotification(message)
    history.push(pathRoute.instructor)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.DELETE_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* publishCourse({ payload: id }: any) {
  const { isPublic } = yield select(getDetailManage)
  try {
    yield put({
      type: actionManageCourse.PUBLISH_COURSE.REQUEST
    })

    const {
      data: { message }
    } = yield call(API.courseAPI.publishCourse, id)

    yield put({
      type: actionManageCourse.PUBLISH_COURSE.SUCCESS,
      payload: !isPublic
    })

    successNotification(message)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.DELETE_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* userEnroll({ payload }: any) {
  const { courseId, type } = payload
  try {
    yield put({
      type: actionManageCourse.GET_USER_ENROLL.REQUEST
    })

    const { data } = yield call(API.userAPI.userEnroll, courseId, type)

    yield put({
      type: actionManageCourse.GET_USER_ENROLL.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.GET_USER_ENROLL.ERROR,
      payload: error.message
    })
  }
}

function* enrollUserAsInstructor({ payload }: any) {
  const { courseId, data: dataForm } = payload
  try {
    yield put({
      type: actionManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.REQUEST
    })

    const {
      data: { message }
    } = yield call(API.userAPI.enrollUserAsInstructor, courseId, dataForm)

    yield put({
      type: actionManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.SUCCESS,
      payload: message
    })
  } catch (error: any) {
    yield put({
      type: actionManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.ERROR,
      payload: error.response.data.message
    })
  }
}

function* watchDeleteCourse() {
  yield takeLatest(DELETE_COURSE, deleteCourse)
}

function* watchPublishCourse() {
  yield takeLatest(PUBLISH_COURSE, publishCourse)
}

function* watchUserEnroll() {
  yield takeLatest(GET_USER_ENROLL, userEnroll)
}

function* watchEnrollUserAsInstructor() {
  yield takeLatest(ENROLL_COURSE_AS_INSTRUCTOR, enrollUserAsInstructor)
}

export default function* settingSaga() {
  yield all([
    watchDeleteCourse(),
    watchPublishCourse(),
    watchUserEnroll(),
    watchEnrollUserAsInstructor()
  ])
}
