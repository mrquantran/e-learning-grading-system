import { successNotification } from "./../../../utils/notification"
import LoginAction, { LOGIN_USER } from "./../action/login"
import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { errorNotification, getError } from "@/utils/notification"

import jwtDecode from "jwt-decode"

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

function removeAccessToken() {
  localStorage.removeItem("access_token")
  localStorage.removeItem("expires_at")
  localStorage.removeItem("refresh_token")
  sessionStorage.removeItem("access_token")
  sessionStorage.removeItem("refresh_token")
}

export function getAccessToken() {
  const accessToken =
    localStorage.getItem("access_token") ||
    sessionStorage.getItem("access_token")
  return accessToken
}

export function getExpiration() {
  return localStorage.getItem("expires_at")
}

export function getUserEmail() {
  const token = getAccessToken()
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token)
      if (decodedToken && decodedToken.sub) {
        return decodedToken.sub
      }
    } catch (error) {
      removeAccessToken()
      return ""
    }
  }
  return ""
}

export function checkAuthenticate() {
  if (getUserEmail()) {
    return true
  }
  return false
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
