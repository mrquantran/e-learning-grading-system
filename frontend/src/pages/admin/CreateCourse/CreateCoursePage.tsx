/* eslint-disable react/jsx-pascal-case */
import { history } from "@/App/App"
import HeaderAdmin from "@/components/admin/Header/HeaderAdmin"
import StepHeader from "@/components/admin/StepHeader/StepHeader"
import FormikStepper from "@/components/Formik/FormikStepper/FormikStepper"
import { useRouter } from "@/hooks/useRouter"
import {
  CREATE_DRAFT_COURSE,
  GO_TO_STEP
} from "@/modules/Course/action/createCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import pathRoute from "@/routes/routePath"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const acceptableParams = [1, 2]

const sleep = time => new Promise(acc => setTimeout(acc, time))

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
    // eslint-disable-next-line react/jsx-pascal-case
    return tabs.map(Child => (
      <Child.component validationSchema={Child.validate} />
    ))
  }

  return (
    <React.Fragment>
      <HeaderAdmin />
      <StepHeader stepCurrent={stepCurrent} />
      <FormikStepper
        initialValues={{
          type: null,
          title: "",
          category: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          await sleep(1000)
          // eslint-disable-next-line no-console
          console.log("values", values)
          dispatch({ type: CREATE_DRAFT_COURSE, payload: values })
          resetForm()
        }}
      >
        {renderContentCreate()}
      </FormikStepper>
    </React.Fragment>
  )
}
