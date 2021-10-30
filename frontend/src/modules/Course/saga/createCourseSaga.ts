/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CREATE_LECTURE,
  DELETE_LECTURE,
  UPDATE_COURSE_LECTURE,
  UPDATE_LECTURE,
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

function* createLecture({ payload }: any) {
  const selectionCourse = yield select(getSectionOfCourse)
  const {
    sectionId,
    positionAdd,
    //data create
    data: { title, description }
  } = payload
  try {
    yield put({
      type: actionManageCourse.CREATE_LECTURE.REQUEST
    })

    const bodyData = { title, description }

    const { data } = yield call(
      API.lectureMaterialAPI.createLecture,
      sectionId,
      bodyData
    )

    let newSelection = [...selectionCourse]
    newSelection = newSelection.map(item => {
      const cloneLectureMaterial = [...item.lecturesMaterial]
      cloneLectureMaterial.splice(positionAdd, 0, data)

      if (item.id === sectionId)
        return { ...item, lecturesMaterial: cloneLectureMaterial }
      return item
    })

    yield put({
      type: actionManageCourse.CREATE_LECTURE.SUCCESS,
      payload: newSelection
    })

    const message = "Your lecture has been created successfully"
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

function* deleteLecture({ payload }: any) {
  const selectionCourse = yield select(getSectionOfCourse)
  const {
    //sectionId will deleted
    // id of course lecture create
    lectureId,
    sectionId
  } = payload
  try {
    yield put({ type: actionManageCourse.DELETE_COURSE_LECTURE.REQUEST })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = yield call(API.lectureMaterialAPI.deleteLecture, lectureId)

    let newSection = [...selectionCourse]
    // eslint-disable-next-line array-callback-return
    newSection = newSection.map(item => {
      if (item.id === sectionId) {
        return {
          ...item,
          lecturesMaterial: item.lecturesMaterial.filter(lecture =>
            lecture.id !== lectureId ? true : false
          )
        }
      }
      return item
    })

    yield put({
      type: actionManageCourse.DELETE_LECTURE.SUCCESS,
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

function* updateLecture({ payload }: any) {
  const { sectionId, data: lectureUpdate, lectureId } = payload
  const selectionCourse = yield select(getSectionOfCourse)
  try {
    const { data } = yield call(
      API.lectureMaterialAPI.updateLecture,
      lectureId,
      lectureUpdate
    )

    let newSection = [...selectionCourse]
    // eslint-disable-next-line array-callback-return
    newSection = newSection.map(item => {
      if (item.id === sectionId) {
        return {
          ...item,
          lecturesMaterial: item.lecturesMaterial.map(lecture => {
            if (lecture.id === lectureId)
              return { ...lecture, title: data.title }
            return lecture
          })
        }
      }
      return item
    })

    yield put({
      type: actionManageCourse.UPDATE_LECTURE.SUCCESS,
      payload: newSection
    })

    const message = "Your curriculum has been updated"
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

function* watchCreateLectureMaterial() {
  yield takeLatest(CREATE_LECTURE, createLecture)
}

function* watchDeleteLectureMaterial() {
  yield takeLatest(DELETE_LECTURE, deleteLecture)
}
function* watchUpdateLectureMaterial() {
  yield takeLatest(UPDATE_LECTURE, updateLecture)
}

export default function* createCourseSaga() {
  yield all([
    watchCreateDraftCourse(),
    watchCreateCourseSectionLecture(),
    watchDeleteCourseSectionLecture(),
    watchUpdateLecture(),
    watchUpdateSection(),
    watchCreateLectureMaterial(),
    watchDeleteLectureMaterial(),
    watchUpdateLectureMaterial()
  ])
}
