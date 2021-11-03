import authSaga from "@/modules/authentication/saga/authenticationSaga"
import courseSaga from "@/modules/Course/saga"
import createCourseSaga from "@/modules/Course/saga/manageCourseSaga"
import dashboardSaga from "@/modules/Dashboard/saga"
import lectureSaga from "@/modules/Lectures/saga"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([
    dashboardSaga(),
    authSaga(),
    courseSaga(),
    lectureSaga(),
    createCourseSaga()
  ])
}
