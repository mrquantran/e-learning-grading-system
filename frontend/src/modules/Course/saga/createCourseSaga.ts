/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UPDATE_COURSE_LECTURE,
  UPDATE_LECTURE_SECTION
} from "./../action/manageCourseAction"
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
import actionManageCourse from "../action/manageCourseAction"
import { API } from "@/apis"
import { history } from "@/App/App"
import pathRoute from "@/routes/routePath"
import { TypeSection, TYPE_CREATE_COURSE } from "@/utils/ENUM"
import { fetchCourseLectures } from "."
import { RootState } from "@/redux/reducer/rootReducer"
import { DELETE_COURSE_LECTURE } from "../action/manageCourseAction"

const getSectionOfCourse = (state: RootState) => state.create.curriculum.data
const getSectionId = id => Number(id.replace(TypeSection.SECTION, ""))

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
    data: { title, description }
  } = payload
  try {
    yield put({
      type: actionCreateCourse.CREATE_COURSE_SECTION_LECTURE.REQUEST
    })

    const bodyData = { title, description }

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

function* deleteSectionLecture({ payload }: any) {
  const selectionCourse = yield select(getSectionOfCourse)
  const {
    //sectionId will deleted
    // id of course lecture create
    sectionId
  } = payload
  try {
    yield put({ type: actionManageCourse.DELETE_COURSE_LECTURE.REQUEST })

    const ONLY_ONE_ITEM = 1

    if (selectionCourse.length === ONLY_ONE_ITEM) {
      const message =
        "Your first lecture is outside of a section. Create a section to hold this lecture."
      errorNotification(message)

      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = yield call(API.lectureAPI.deleteSectionLecture, sectionId)

    let newSection = [...selectionCourse]
    // eslint-disable-next-line array-callback-return
    newSection = newSection.filter(item => {
      if (item.id !== sectionId) return true
    })

    yield put({
      type: actionManageCourse.DELETE_COURSE_LECTURE.SUCCESS,
      payload: newSection
    })

    const message = "Your section has been deleted"
    successNotification(message)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.DELETE_COURSE_LECTURE.ERROR,
      payload: error.message
    })
  }
}

function* updateCourseLecture({ payload }: any) {
  // const selectionCourse = yield select(getSectionOfCourse)
  const {
    // id of course lecture create
    courseId,
    data
  } = payload
  try {
    const {
      data: { message }
    } = yield call(API.lectureAPI.updateCourseLecture, courseId, data)

    // yield put({
    //   type: actionManageCourse.UPDATE_COURSE_LECTURE.SUCCESS,
    //   payload: data
    // })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.DELETE_COURSE_LECTURE.ERROR,
      payload: error.message
    })
  }
}

function* updateSection({ payload }: any) {
  const selectionCourse = yield select(getSectionOfCourse)
  const { courseId, sectionId, data } = payload
  try {
    const newSelectionCourse = selectionCourse.map(item => {
      if (item.id === sectionId) {
        return { ...item, title: data.title, description: data.description }
      }
      return item
    })

    const {
      data: { message }
    } = yield call(
      API.lectureAPI.updateCourseLecture,
      courseId,
      newSelectionCourse
    )

    yield put({
      type: actionManageCourse.UPDATE_LECTURE_SECTION.SUCCESS,
      payload: newSelectionCourse
    })

    successNotification(message)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionManageCourse.UPDATE_LECTURE_SECTION.ERROR,
      payload: error.message
    })
  }
}

function* watchDeleteCourseSectionLecture() {
  yield takeLatest(DELETE_COURSE_LECTURE, deleteSectionLecture)
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

function* watchUpdateLecture() {
  yield takeLatest(UPDATE_COURSE_LECTURE, updateCourseLecture)
}

function* watchUpdateSection() {
  yield takeLatest(UPDATE_LECTURE_SECTION, updateSection)
}

export default function* createCourseSaga() {
  yield all([
    watchCreateDraftCourse(),
    watchCreateCourseSectionLecture(),
    watchDeleteCourseSectionLecture(),
    watchUpdateLecture(),
    watchUpdateSection()
  ])
}
