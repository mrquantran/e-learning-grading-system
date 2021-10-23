import {
  getError,
  successNotification,
  warningNotification
} from "@/utils/notification"
import { errorNotification } from "./../../../utils/notification"
import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { CREATE_DRAFT_COURSE } from "../action/createCourseAction"
import actionCreateCourse from "../action/createCourseAction"
import { API } from "@/apis"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"
import { TYPE_CREATE_COURSE } from "@/utils/ENUM"

function* createDraftCourse({ payload }: any) {
  try {
    yield put({
      type: actionCreateCourse.CREATE_DRAFT_COURSE.REQUEST
    })

    const { title, category, type } = payload

    const bodyData = { name: title }

    if (type === TYPE_CREATE_COURSE.COURSE) {
      const {
        data: { message }
      } = yield call(API.courseAPI.createDraftCourse, bodyData)

      successNotification(message)
    } else {
      const message = "Feature will have soon. Please waiting"
      warningNotification(message)
    }

    history.push(pathRoute.instructor)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionCreateCourse.CREATE_DRAFT_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* watchCreateDraftCourse() {
  yield takeLatest(CREATE_DRAFT_COURSE, createDraftCourse)
}

export default function* createCourseSaga() {
  yield all([watchCreateDraftCourse()])
}
