export const LOGOUT = "app/LOGOUT"
export const CLOSE_SIDE_NAV = "app/CLOSE_SIDE_NAV"
export const OPEN_MODAL_CONFIRM = "app/OPEN_MODAL_CONFIRM"
export const CLOSE_MODAL_CONFIRM = "app/CLOSE_MODAL_CONFIRM"

export const openConfirmModal = (title, content, button, options) => {
  return {
    type: OPEN_MODAL_CONFIRM,
    payload: { action: { title, content, button, options } }
  }
}
