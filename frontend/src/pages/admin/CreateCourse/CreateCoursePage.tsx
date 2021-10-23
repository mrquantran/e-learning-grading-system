import { history } from "@/App/App"
import FooterAdmin from "@/components/admin/Footer/FooterAdmin"
import HeaderAdmin from "@/components/admin/Header/HeaderAdmin"
import StepHeader from "@/components/admin/StepHeader/StepHeader"
import FormikStepper from "@/components/Formik/FormikStepper/FormikStepper"
import { useRouter } from "@/hooks/useRouter"
import { GO_TO_STEP } from "@/modules/Course/action/createCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import pathRoute from "@/routes/routePath"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ContentCreateCourseStyled } from "./CreateCourse.styled"

const acceptableParams = [1, 2, 3, 4]

const sleep = time => new Promise(acc => setTimeout(acc, time))

export default function CreateCoursePage() {
  const router = useRouter()
  const { step } = router.query

  const dispatch = useDispatch()

  useEffect(() => {
    if (!acceptableParams.includes(Number(step))) {
      history.push(pathRoute.instructor)
    }

    dispatch({ type: GO_TO_STEP, payload: step })
  }, [dispatch, step])

  const stepCurrent = Number(step) / acceptableParams.length

  const {
    tabs: { course: tabs },
    step: stepCurrently
  } = useSelector((state: RootState) => state.create)

  const renderContentCreate = () => {
    return tabs.map(child => <child.component />)
  }

  return (
    <React.Fragment>
      <HeaderAdmin />
      <StepHeader stepCurrent={stepCurrent} />
      <FormikStepper
        initialValues={{
          type: "",
          title: "",
          category: ""
        }}
        onSubmit={values => {
          console.log("values", values)
        }}
      >
        {/* {renderContentCreate()} */}
      </FormikStepper>
    </React.Fragment>
  )
}
