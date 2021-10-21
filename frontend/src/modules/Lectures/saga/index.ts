import { errorNotification, getError } from "@/utils/notification"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { FETCH_LECTURE_DETAIL } from "../actions/lectureAction"

import lectureActions from "../actions/lectureAction"
import { API } from "@/apis"

function* fetchLectureDetail({ payload: courseId }: any) {
  try {
    yield put({ type: lectureActions.FETCH_LECTURE_DETAIL.REQUEST })

    const { data } = yield call(API.lectureAPI.fetchLectureDetail, courseId)

    yield put({
      type: lectureActions.FETCH_LECTURE_DETAIL.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: lectureActions.FETCH_LECTURE_DETAIL.ERROR,
      payload: error.message
    })
  }
}

function* watchFetchDetailLecture() {
  yield takeLatest(FETCH_LECTURE_DETAIL, fetchLectureDetail)
}

export default function* lectureSaga() {
  yield all([watchFetchDetailLecture()])
}
