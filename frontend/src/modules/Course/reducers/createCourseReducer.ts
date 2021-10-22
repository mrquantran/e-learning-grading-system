import { GO_TO_STEP } from "../action/createCourseAction"
import CategoryCourse from "../Components/Step/CategoryCourse/CategoryCourse"
import Finish from "../Components/Step/Finish/Finish"
import TitleCourse from "../Components/Step/TitleCourse/TitleCourse"
import TypeCourse from "../Components/Step/TypeCourse/TypeCourse"

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
        title: "Type Course"
      },
      {
        step: 2,
        component: TitleCourse,
        title: "Title Course"
      },
      {
        step: 3,
        component: CategoryCourse,
        title: "Category Course"
      },
      {
        step: 4,
        component: Finish,
        title: "Finish Course"
      }
    ]
  }
}

const createCourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GO_TO_STEP:
      return { ...state, step: payload }
    default:
      return state
  }
}

export default createCourseReducer
