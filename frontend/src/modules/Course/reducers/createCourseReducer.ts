import { GO_TO_STEP } from "../action/createCourseAction"
import TitleCourse, {
  validateSchemaTitleCourse
} from "../Components/Step/TitleCourse/TitleCourse"
import TypeCourse, {
  validateSchemaTypeCourse
} from "../Components/Step/TypeCourse/TypeCourse"
import actionsCreateCourse from "../action/createCourseAction"

const initialState = {
  isFetching: false,
  isProcessing: false,
  error: null,
  step: null,
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
    case GO_TO_STEP:
      return { ...state, step: payload }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.REQUEST:
      return { ...state, isProcessing: true }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.SUCCESS:
      return { ...state, isProcessing: false, step: 1 }
    case actionsCreateCourse.CREATE_DRAFT_COURSE.ERROR:
      return { ...state, isProcessing: false, error: payload }
    default:
      return state
  }
}

export default createCourseReducer
