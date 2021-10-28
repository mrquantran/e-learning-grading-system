import { successNotification } from "./../../../utils/notification"
import {
  FETCH_COURSES_DRAFT,
  FETCH_COURSES_ENROLL,
  FETCH_COURSE_STATUS
} from "./../action/courseAction"
import { API } from "@/apis"
import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects"
import { FETCH_COURSE_DETAIL } from "../action/courseAction"
import manageCourseActions, {
  FETCH_COURSE_LECTURE,
  UPDATE_INSTRUCTOR_COURSE
} from "../action/manageCourseAction"
import actionsCourseDetail from "../action/courseAction"
import actionsEnroll from "../action/enrollAction"
import { errorNotification, getError } from "@/utils/notification"
import { ENROLL_COURSE } from "../action/enrollAction"
import { TYPE_LECTURES, TYPE_USER } from "@/utils/ENUM"
import { FETCH_INSTRUCTOR_COURSE_DETAIL } from "../action/manageCourseAction"

const mappingData = list => {
  let section = list
    .filter(item => {
      if (item._class === TYPE_LECTURES.CHAPTER) {
        return true
      }
    })
    .map(item => {
      const newItem = { ...item, lecturesMaterial: [] }
      return newItem
    })

  const lecture = list.filter(item => {
    if (item._class === TYPE_LECTURES.SECTION) {
      return true
    }
  })

  const newItems = [...section]

  section = section?.map(item => {
    lecture.map(lecture => {
      if (lecture.objectIndex === item.objectIndex) {
        newItems[item.objectIndex - 1].lecturesMaterial.push(lecture)
      }
    })
  })

  return newItems
}

function* fetchDetailCourse(id) {
  const { params } = id

  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSE_DETAIL.REQUEST })

    const { data: course } = yield call(API.courseAPI.fetchDetailCourse, params)

    yield put({
      type: actionsCourseDetail.FETCH_COURSE_DETAIL.SUCCESS,
      payload: course
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsCourseDetail.FETCH_COURSE_DETAIL.ERROR,
      payload: error.message
    })
  }
}

function* enrollCourseAsStudent({ payload: courseId }: any) {
  const type = TYPE_USER.student

  try {
    yield put({ type: actionsEnroll.ENROLL_COURSE.REQUEST })

    const { data } = yield call(API.courseAPI.enrollCourse, courseId, type)

    successNotification(data.message)
    yield put({
      type: actionsEnroll.ENROLL_COURSE.SUCCESS,
      payload: data.message
    })

    yield fork(fetchAndUpdateStatus, courseId)
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsEnroll.ENROLL_COURSE.ERROR,
      payload: error.message
    })
  }
}

function* fetchCourseStatus({ payload: courseId }: any) {
  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSE_STATUS.REQUEST })

    const { data } = yield call(API.courseAPI.fetchDetailCourseStatus, courseId)

    yield put({
      type: actionsCourseDetail.FETCH_COURSE_STATUS.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsCourseDetail.FETCH_COURSE_STATUS.ERROR,
      payload: error.message
    })
  }
}

function* fetchCoursesEnroll() {
  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSES_ENROLL.REQUEST })

    const { data } = yield call(API.courseAPI.fetchCoursesEnroll)

    yield put({
      type: actionsCourseDetail.FETCH_COURSES_ENROLL.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsCourseDetail.FETCH_COURSES_ENROLL.ERROR,
      payload: error.message
    })
  }
}

function* fetchDraftCourses() {
  try {
    yield put({ type: actionsCourseDetail.FETCH_COURSES_DRAFT.REQUEST })

    const { data } = yield call(API.courseAPI.fetchDraftCourses)

    yield put({
      type: actionsCourseDetail.FETCH_COURSES_DRAFT.SUCCESS,
      payload: data
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: actionsCourseDetail.FETCH_COURSES_ENROLL.ERROR,
      payload: error.message
    })
  }
}

function* fetchInstructorCourseDetail({ payload: id }: any) {
  try {
    yield put({
      type: manageCourseActions.FETCH_INSTRUCTOR_COURSE_DETAIL.REQUEST
    })

    const { data: course } = yield call(API.courseAPI.fetchDetailCourse, id)

    yield put({
      type: manageCourseActions.FETCH_INSTRUCTOR_COURSE_DETAIL.SUCCESS,
      payload: course
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: manageCourseActions.FETCH_INSTRUCTOR_COURSE_DETAIL.ERROR,
      payload: error.message
    })
  }
}

function* fetchCourseLectures({ payload: id }: any) {
  try {
    yield put({
      type: manageCourseActions.FETCH_COURSE_LECTURE.REQUEST
    })

    const { data: course } = yield call(API.courseAPI.fetchCourseLectures, id)

    const newData = mappingData(course)

    yield put({
      type: manageCourseActions.FETCH_COURSE_LECTURE.SUCCESS,
      payload: newData
    })
  } catch (error: any) {
    errorNotification(getError(error))
    yield put({
      type: manageCourseActions.FETCH_COURSE_LECTURE.ERROR,
      payload: error.message
    })
  }
}
function* updateInstructorCourse({ payload }: any) {
  const { courseId, data } = payload

  try {
    yield put({
      type: manageCourseActions.UPDATE_INSTRUCTOR_COURSE.REQUEST
    })

    const {
      data: { message }
    } = yield call(API.courseAPI.updateCourse, Number(courseId), data)

    successNotification(message)
    yield fork(fetchAndUpdateCourseDetail, courseId)
  } catch {}
}

function* fetchAndUpdateCourseDetail(courseId) {
  yield fork(fetchInstructorCourseDetail, { payload: courseId })
}

function* fetchAndUpdateStatus(courseId) {
  yield fork(fetchCourseStatus, { payload: courseId })
}

function* watchEnrollCourse() {
  yield takeLatest(ENROLL_COURSE, enrollCourseAsStudent)
}

function* watchFetchDetailCourse() {
  yield takeLatest(FETCH_COURSE_DETAIL, fetchDetailCourse)
}

function* watchFetchCourseStatus() {
  yield takeLatest(FETCH_COURSE_STATUS, fetchCourseStatus)
}

function* watchFetchCoursesEnroll() {
  yield takeLatest(FETCH_COURSES_ENROLL, fetchCoursesEnroll)
}

function* watchFetchDraftCourse() {
  yield takeLatest(FETCH_COURSES_DRAFT, fetchDraftCourses)
}

function* watchFetchInstructorCourseDetail() {
  yield takeLatest(FETCH_INSTRUCTOR_COURSE_DETAIL, fetchInstructorCourseDetail)
}

function* watchUpdateInstructorCourse() {
  yield takeLatest(UPDATE_INSTRUCTOR_COURSE, updateInstructorCourse)
}

function* watchFetchCourseLectures() {
  yield takeLatest(FETCH_COURSE_LECTURE, fetchCourseLectures)
}

export default function* courseSaga() {
  yield all([
    watchFetchDetailCourse(),
    watchEnrollCourse(),
    watchFetchCourseStatus(),
    watchFetchCoursesEnroll(),
    watchFetchDraftCourse(),
    watchFetchCourseLectures(),
    watchFetchInstructorCourseDetail(),
    watchUpdateInstructorCourse()
  ])
}
