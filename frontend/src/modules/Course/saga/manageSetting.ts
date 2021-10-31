import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { DELETE_COURSE } from "../action/manageCourseAction"
import actionManageCourse from "../action/manageCourseAction"
import {
  errorNotification,
  getError,
  successNotification
} from "@/utils/notification"
import { API } from "@/apis"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"

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

function* watchDeleteCourse() {
  yield takeLatest(DELETE_COURSE, deleteCourse)
}

export default function* settingSaga() {
  yield all([watchDeleteCourse()])
}
