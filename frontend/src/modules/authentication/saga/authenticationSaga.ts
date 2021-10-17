import { successNotification } from "./../../../utils/notification"
import LoginAction, { LOGIN_USER } from "./../action/login"
import { API } from "@/apis"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { errorNotification, getError } from "@/utils/notification"

import jwtDecode from "jwt-decode"
import LogoutAction, { LOGOUT_USER } from "../action/logout"

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
  localStorage.removeItem("accessToken")
  localStorage.removeItem("expires_at")
  localStorage.removeItem("refreshToken")
  sessionStorage.removeItem("accessToken")
  sessionStorage.removeItem("refreshToken")

  const loggedIn: string = "false"
  localStorage.setItem("logged-in", loggedIn)
  sessionStorage.setItem("logged-in", loggedIn)
}

export function getAccessToken() {
  const accessToken =
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  return accessToken
}

export function getExpiration() {
  return localStorage.getItem("expires_at")
}

interface decodedToken {
  data: string
}

export function getUserEmail() {
  const token = getAccessToken()
  if (token) {
    try {
      const decodedToken: decodedToken = jwtDecode(token)
      if (decodedToken && decodedToken.data) {
        return decodedToken.data
      }
    } catch (error) {
      removeAccessToken()
      return ""
    }
  }
  return ""
}

export function getUserInfo() {
  const token = getAccessToken()
  if (token) {
    try {
      const decodedToken: decodedToken = jwtDecode(token)
      if (decodedToken && decodedToken.data) {
        return decodedToken.data
      }
    } catch (error) {
      removeAccessToken()
      return {}
    }
  }
  return {}
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
      const decodedToken: decodedToken = jwtDecode(data.accessToken)
      yield put(LoginAction.receiveLogin(decodedToken.data, data.expiration))
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

function* logoutUser(payload) {
  const { payload: gotoDashboard } = payload
  try {
    removeAccessToken()
    yield put(LogoutAction.receiveLogout())
    gotoDashboard()
  } catch (error) {
    yield put(LogoutAction.logoutError(getError(error)))
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT_USER, logoutUser)
}

export default function* authSaga() {
  yield all([watchLoginUser(), watchLogout()])
}
