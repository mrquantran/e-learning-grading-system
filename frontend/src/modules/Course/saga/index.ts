import { successNotification } from "./../../../utils/notification"
import { FETCH_COURSE_STATUS } from "./../action/courseAction"
import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { FETCH_COURSE_DETAIL } from "../action/courseAction"
import actionsCourseDetail from "../action/courseAction"
import actionsEnroll from "../action/enrollAction"
import { errorNotification, getError } from "@/utils/notification"
import { ENROLL_COURSE } from "../action/enrollAction"
import { TYPE_USER } from "@/utils/ENUM"

function* fetchDetailCourse(id) {
  const { params } = id

  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSE_DETAIL.REQUEST })

    const { data: course } = yield call(API.courseAPI.fetchDetailCourse, params)
    yield put({
      type: actionsCourseDetail.FETCH_COURSE_DETAIL.SUCCESS,
      payload: course
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsCourseDetail.FETCH_COURSE_DETAIL.ERROR,
      payload: error.message
    })
  }
}

function* enrollCourseAsStudent({ payload: courseId }: any) {
  const type = TYPE_USER.student

  try {
    yield put({ type: actionsEnroll.ENROLL_COURSE.REQUEST })

    const { data } = yield call(API.courseAPI.enrollCourse, courseId, type)

    successNotification(data.message)
    yield put({
      type: actionsEnroll.ENROLL_COURSE.SUCCESS,
      payload: data.message
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsEnroll.ENROLL_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* fetchCourseStatus({ params: courseId }: any) {
  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSE_STATUS.REQUEST })

    const { data } = yield call(API.courseAPI.fetchDetailCourseStatus, courseId)

    yield put({
      type: actionsCourseDetail.FETCH_COURSE_STATUS.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsEnroll.ENROLL_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* watchEnrollCourse() {
  yield takeLatest(ENROLL_COURSE, enrollCourseAsStudent)
}

function* watchFetchDetailCourse() {
  yield takeLatest(FETCH_COURSE_DETAIL, fetchDetailCourse)
}

function* watchFetchCourseStatus() {
  yield takeLatest(FETCH_COURSE_STATUS, fetchCourseStatus)
}

export default function* courseSaga() {
  yield all([
    watchFetchDetailCourse(),
    watchEnrollCourse(),
    watchFetchCourseStatus()
  ])
}
