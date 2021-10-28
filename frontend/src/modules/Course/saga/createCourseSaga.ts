import {
  getError,
  successNotification,
  warningNotification
} from "@/utils/notification"
import { errorNotification } from "./../../../utils/notification"
import {
  all,
  call,
  fork,
  put,
  select,
  takeLatest
} from "@redux-saga/core/effects"
import {
  CREATE_COURSE_SECTION_LECTURE,
  CREATE_DRAFT_COURSE
} from "../action/createCourseAction"
import actionCreateCourse from "../action/createCourseAction"
import { API } from "@/apis"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"
import { TypeSection, TYPE_CREATE_COURSE } from "@/utils/ENUM"
import { fetchCourseLectures } from "."
import { RootState } from "@/redux/reducer/rootReducer"

const getSectionOfCourse = (state: RootState) => state.create.curriculum.data

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

function* createSectionLecture({ payload }: any) {
  const selectionCourse = yield select(getSectionOfCourse)
  const {
    // arrow of section to create
    sectionArrow,
    // id of course lecture create
    courseId,
    //data create
    data: { title }
  } = payload
  try {
    yield put({
      type: actionCreateCourse.CREATE_COURSE_SECTION_LECTURE.REQUEST
    })

    const bodyData = { title }

    const { data } = yield call(
      API.lectureAPI.createSectionLecture,
      courseId,
      bodyData
    )

    const sectionData = { ...data, lecturesMaterial: [] }

    const newSection = [...selectionCourse]

    newSection.splice(sectionArrow - 1, 0, sectionData)

    yield put({
      type: actionCreateCourse.CREATE_COURSE_SECTION_LECTURE.SUCCESS,
      payload: newSection
    })

    const message = "Your section has been created successfully"

    successNotification(message)
    // yield fetchAndUpdateLectureCourse(courseId)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionCreateCourse.CREATE_DRAFT_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* fetchAndUpdateLectureCourse(courseId) {
  yield fork(fetchCourseLectures, { payload: courseId })
}

function* watchCreateDraftCourse() {
  yield takeLatest(CREATE_DRAFT_COURSE, createDraftCourse)
}

function* watchCreateCourseSectionLecture() {
  yield takeLatest(CREATE_COURSE_SECTION_LECTURE, createSectionLecture)
}

export default function* createCourseSaga() {
  yield all([watchCreateDraftCourse(), watchCreateCourseSectionLecture()])
}
