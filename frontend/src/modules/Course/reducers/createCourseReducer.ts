import { GO_TO_STEP } from "../action/createCourseAction"
import TitleCourse, {
  validateSchemaTitleCourse
} from "../Components/Admin/Step/TitleCourse/TitleCourse"
import TypeCourse, {
  validateSchemaTypeCourse
} from "../Components/Admin/Step/TypeCourse/TypeCourse"
import actionsCreateCourse from "../action/createCourseAction"
import actionsManageCourse, {
  CHANGE_SELECTED_COMPONENT,
  SELECT_CONTENT
} from "../action/manageCourseAction"
import FilmEdit from "../Components/Admin/Manage/Film&Edit/FilmEdit"
import Curriculum from "../Components/Admin/Manage/Currcilum/Curriculum"
import Captions from "../Components/Admin/Manage/Captions/Captions"
import Pricing from "../Components/Admin/Manage/Pricing/Pricing"
import Promotions from "../Components/Admin/Manage/Promotions/Promotions"
import CourseMessage from "../Components/Admin/Manage/CourseMessage/CourseMessage"
import LandingPageCourse from "@/modules/Course/Components/Admin/Manage/LandingPageCourse/LandingPageCourse"
import Settings from "../Components/Admin/Manage/Settings/Settings"

const initialState = {
  isFetching: false,
  isProcessing: false,
  error: null,
  step: null,
  selectedComponent: null,
  isSelectedTab: false,
  detail: {
    data: {},
    isFetching: false
  },
  curriculum: {
    data: [],
    isFetching: false
  },
  settings: {
    isProcessing: false,
    isFetching: false,
    data: [],
    error: null,
    message: null
  },
  manageTabs: {
    course: [
      {
        id: "createYourContent",
        title: "Create your content",
        childTabs: [
          {
            id: "film&Edit",
            title: "Film & Edit",
            component: FilmEdit
          },
          {
            id: "curriculum",
            title: "Curriculum",
            component: Curriculum
          },
          {
            id: "captions",
            title: "Captions",
            component: Captions
          }
        ]
      },
      {
        id: "publishYourCourses",
        title: "Publish Your Courses",
        childTabs: [
          {
            id: "courseLandingPage",
            title: "Course Landing Page",
            component: LandingPageCourse
          },
          {
            id: "pricing",
            title: "Pricing",
            component: Pricing
          },
          {
            id: "promotions",
            title: "Promotions",
            component: Promotions
          },
          {
            id: "courseMessage",
            title: "Course Message",
            component: CourseMessage
          },
          {
            id: "settings",
            title: "Settings",
            component: Settings
          }
        ]
      }
    ],
    test: []
  },
  tabs: {
    course: [
      {
        step: 1,
        component: TypeCourse,
        title: "Type Course",
        validate: validateSchemaTypeCourse
      },
      {
        step: 2,
        component: TitleCourse,
        title: "Title Course",
        validate: validateSchemaTitleCourse
      }
      // {
      //   step: 3,
      //   component: CategoryCourse,
      //   title: "Category Course"
      // },
      // {
      //   step: 4,
      //   component: Finish,
      //   title: "Finish Course"
      // }
    ]
  }
}

const createCourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CONTENT:
      return {
        ...state,
        isSelectedTab: payload
      }
    case CHANGE_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponent: payload
      }
    case GO_TO_STEP:
      return { ...state, step: payload }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.REQUEST:
      return { ...state, isProcessing: true }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.SUCCESS:
      return { ...state, isProcessing: false, step: 1 }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.ERROR:
      return { ...state, isProcessing: false, error: payload }
    case actionsManageCourse.FETCH_INSTRUCTOR_COURSE_DETAIL.REQUEST:
      return {
        ...state,
        detail: {
          ...state.detail,
          isProcessing: true
        }
      }
    case actionsManageCourse.FETCH_INSTRUCTOR_COURSE_DETAIL.SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          data: payload,
          isProcessing: false
        }
      }
    case actionsManageCourse.FETCH_INSTRUCTOR_COURSE_DETAIL.ERROR:
      return {
        ...state,
        detail: {
          ...state.detail,
          error: payload,
          isProcessing: false
        }
      }
    case actionsManageCourse.FETCH_COURSE_LECTURE.REQUEST:
      return {
        ...state,
        curriculum: {
          ...state.curriculum,
          isFetching: true
        }
      }
    case actionsManageCourse.FETCH_COURSE_LECTURE.ERROR:
      return {
        ...state,
        curriculum: {
          ...state.curriculum,
          error: payload,
          isFetching: false
        }
      }
    case actionsManageCourse.FETCH_COURSE_LECTURE.SUCCESS:
    case actionsCreateCourse.CREATE_COURSE_SECTION_LECTURE.SUCCESS:
    case actionsManageCourse.DELETE_COURSE_LECTURE.SUCCESS:
    case actionsManageCourse.UPDATE_LECTURE_SECTION.SUCCESS:
    case actionsManageCourse.DELETE_LECTURE.SUCCESS:
    case actionsManageCourse.UPDATE_LECTURE.SUCCESS:
    case actionsManageCourse.CREATE_QUIZ.SUCCESS:
    case actionsManageCourse.CREATE_LECTURE.SUCCESS: {
      return {
        ...state,
        curriculum: {
          ...state.curriculum,
          data: payload,
          isFetching: false
        }
      }
    }
    case actionsManageCourse.PUBLISH_COURSE.SUCCESS: {
      return {
        ...state,
        detail: {
          ...state.detail,
          data: {
            ...state.detail.data,
            isPublic: payload
          }
        }
      }
    }
    case actionsManageCourse.GET_USER_ENROLL.SUCCESS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          data: payload
        }
      }
    }
    case actionsManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.REQUEST: {
      return {
        ...state,
        settings: {
          ...state.settings,
          error: null,
          message: null
        }
      }
    }
    case actionsManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.SUCCESS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          message: payload
        }
      }
    }
    case actionsManageCourse.ENROLL_COURSE_AS_INSTRUCTOR.ERROR: {
      return {
        ...state,
        settings: {
          ...state.settings,
          error: payload
        }
      }
    }
    default:
      return state
  }
}

export default createCourseReducer
