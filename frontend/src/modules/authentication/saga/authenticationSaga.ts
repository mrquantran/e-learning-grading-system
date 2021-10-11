import { successNotification } from "./../../../utils/notification"
import LoginAction, { LOGIN_USER } from "./../action/login"
import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { errorNotification, getError } from "@/utils/notification"

function setAccessToken(authResult) {
  //   const expiresAt = moment(authResult.expiration).valueOf()
  localStorage.setItem("accessToken", authResult.accessToken)
  //   localStorage.setItem("expires_at", expiresAt)
  localStorage.setItem("refreshToken", authResult.refreshToken)

  sessionStorage.setItem("accessToken", authResult.accessToken)
  sessionStorage.setItem("refreshToken", authResult.refreshToken)

  const loggedIn: string = "true"
  localStorage.setItem("logged-in", loggedIn)
  sessionStorage.setItem("logged-in", loggedIn)
}

function* loginUser(payload) {
  const { user, changeRoute } = payload

  try {
    yield put(LoginAction.requestLogin(user))
    const { data } = yield call(API.Account.loginUser, user)
    if (data) {
      setAccessToken(data)
      yield put(LoginAction.receiveLogin(data.accessToken, data.expiration))
    } else {
      yield put(LoginAction.loginError(""))
    }
    changeRoute()
    successNotification("Login successful")
  } catch (error: any) {
    errorNotification(getError(error))
    yield put(LoginAction.loginError(getError(error)))
  }
}

function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUser)
}

export default function* authSaga() {
  yield all([watchLoginUser()])
}
