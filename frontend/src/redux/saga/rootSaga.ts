import authSaga from "@/modules/authentication/saga/authenticationSaga"
import courseSaga from "@/modules/Course/saga"
import dashboardSaga from "@/modules/Dashboard/saga"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([dashboardSaga(), authSaga(), courseSaga()])
}
