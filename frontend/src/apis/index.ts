import courseAPI from "./courses/courses.api"
import lectureAPI from "./lectures/lectures.api"
import axios, { AxiosRequestConfig } from "axios"
import { isObject, map, flatten } from "underscore"
import { BASE_URL } from "./const"
import Account from "./account/account"
import { getAccessToken } from "@/modules/authentication/saga/authenticationSaga"

// axios.defaults.params = axios.defaults.params || { culture: "en" }
axios.defaults.headers.common["Content-Type"] = "application/json"

axios.interceptors.request.use((_config: AxiosRequestConfig): Promise<any> => {
  //   if (loggedIn() && !checkAuthenticate()) {
  //     return handleLogout()
  //   }

  const config: any = { ..._config }
  const accessToken = getAccessToken() || null

  config.headers.Authorization = `Bearer ${accessToken}`

  const endPoint = BASE_URL

  if (!config.absoluteUrl) {
    config.url = endPoint + config.url
    config.absoluteUrl = true
  }

  return config
})

export function getErrorMessage(error) {
  const { response } = error
  let message = "Error! Please try again later"

  if (response && response.status && response.status === 403) {
    message = "Access Denied. You don't have permission"
  } else if (response && response.data) {
    if (isObject(response.data)) {
      if (response.data.userMessage) {
        message = response.data.userMessage
      } else {
        message = flatten(map(response.data, _message => _message))
      }
    } else {
      message = response.data
    }
  } else if (error.message) {
    message = error.message
  }

  return message
}

export const API = {
  //courses
  lectureAPI,
  courseAPI,
  Account
}
