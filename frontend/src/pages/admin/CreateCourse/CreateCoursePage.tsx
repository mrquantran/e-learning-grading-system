import { history } from "@/App/App"
import HeaderAdmin from "@/components/admin/Header/HeaderAdmin"
import StepHeader from "@/components/admin/StepHeader/StepHeader"
import FormikStepper from "@/components/Formik/FormikStepper/FormikStepper"
import { useRouter } from "@/hooks/useRouter"
import { GO_TO_STEP } from "@/modules/Course/action/createCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import pathRoute from "@/routes/routePath"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const acceptableParams = [1, 2]

export default function CreateCoursePage() {
  const router = useRouter()
  const { step } = router.query

  const dispatch = useDispatch()

  const {
    tabs: { course: tabs },
    step: stepReducer
  } = useSelector((state: RootState) => state.create)

  useEffect(() => {
    if (!acceptableParams.includes(Number(step))) {
      history.push(pathRoute.instructor)
    }

    if (stepReducer === null) {
      history.push(`${pathRoute.createCourse}/1`)
    }

    dispatch({ type: GO_TO_STEP, payload: step })
  }, [dispatch, step, stepReducer])

  const stepCurrent = Number(step) / acceptableParams.length

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
        onSubmit={(values, { resetForm }) => {
          // eslint-disable-next-line no-console
          console.log("values", values)
          resetForm()
        }}
      >
        {renderContentCreate()}
      </FormikStepper>
    </React.Fragment>
  )
}
