/* eslint-disable import/no-anonymous-default-export */
import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"

import actions from "../action/index"

function* fetchCoursesData() {
  try {
    const { data: courses } = yield call(API.fetchCourses)

    yield put({ type: actions.FETCH_COURSES_DATA.SUCCESS, payload: courses })
  } catch (error) {}
}

function* watchFetchCoursesData() {
  yield takeLatest(actions.FETCH_COURSES_DATA.REQUEST, fetchCoursesData)
}

export default function* dashboardSaga() {
  yield all([watchFetchCoursesData()])
}
