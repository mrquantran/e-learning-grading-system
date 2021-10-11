export const LOGIN_USER = "authentication/LOGIN_USER"
export const LOGIN_REQUEST = "authentication/LOGIN_REQUEST"
export const LOGIN_SUCCESS = "authentication/LOGIN_SUCCESS"
export const LOGIN_FAILURE = "authentication/LOGIN_FAILURE"

export default class LoginAction {
  static LOGIN_USER = {
    REQUEST: LOGIN_REQUEST,
    SUCCESS: LOGIN_SUCCESS,
    ERROR: LOGIN_FAILURE
  }

  static loginUser(user) {
    return {
      type: LOGIN_USER,
      user: user
    }
  }

  static requestLogin(user) {
    return {
      type: this.LOGIN_USER.REQUEST,
      user
    }
  }

  static receiveLogin(user, expiresAt) {
    return {
      type: this.LOGIN_USER.SUCCESS,
      payload: {
        user,
        expiresAt
      }
    }
  }

  static loginError(error) {
    return {
      type: this.LOGIN_USER.ERROR,
      error
    }
  }
}
