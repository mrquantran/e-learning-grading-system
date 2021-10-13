import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { FETCH_COURSE_DETAIL } from "../action/courseAction"
import actions from "../action/courseAction"
import { errorNotification, getError } from "@/utils/notification"

function* fetchDetailCourse(id) {
  const { params } = id

  try {
    yield put({ type: actions.FETCH_COURSE_DETAIL.REQUEST })

    const { data: course } = yield call(API.courseAPI.fetchDetailCourse, params)
    yield put({ type: actions.FETCH_COURSE_DETAIL.SUCCESS, payload: course })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actions.FETCH_COURSE_DETAIL.ERROR,
      payload: error.message
    })
  }
}

function* watchFetchDetailCourse() {
  yield takeLatest(FETCH_COURSE_DETAIL, fetchDetailCourse)
}

export default function* courseSaga() {
  yield all([watchFetchDetailCourse()])
}
