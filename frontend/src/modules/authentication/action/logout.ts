export const LOGOUT_USER = "authentication/LOGOUT_USER"
export const LOGOUT_REQUEST = "authentication/LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "authentication/LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "authentication/LOGOUT_FAILURE"

export default class LogoutAction {
  static LOGOUT_USER = {
    REQUEST: LOGOUT_REQUEST,
    SUCCESS: LOGOUT_SUCCESS,
    ERROR: LOGOUT_FAILURE
  }

  static logoutUser(gotoDashboard) {
    return {
      type: LOGOUT_USER,
      gotoDashboard
    }
  }

  static requestLogout(user) {
    return {
      type: this.LOGOUT_USER.REQUEST,
      user
    }
  }

  static receiveLogout() {
    return {
      type: this.LOGOUT_USER.SUCCESS
    }
  }

  static logoutError(error) {
    return {
      type: this.LOGOUT_USER.ERROR,
      error
    }
  }
}
