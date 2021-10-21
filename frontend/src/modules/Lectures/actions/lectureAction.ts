const store = "lectures"

export const FETCH_LECTURE_DETAIL = `${store}/FETCH_LECTURE_DETAIL`

export const noop = () => {}

export default class LectureDetailAction {
  static FETCH_LECTURE_DETAIL = {
    REQUEST: `${store}/FETCH_LECTURE_DETAIL_REQUEST`,
    SUCCESS: `${store}/FETCH_LECTURE_DETAIL_SUCCESS`,
    ERROR: `${store}/FETCH_LECTURE_DETAIL_ERROR`
  }
}
