import React from "react"
import { Layout } from "antd"
import { FooterStyled } from "./Footer.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "@/hooks/useRouter"
import { GO_TO_STEP } from "@/modules/Course/action/createCourseAction"
import { history } from "@/App/App"
import { RootState } from "@/redux/reducer/rootReducer"

const { Footer } = Layout

export default function FooterAdmin() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { step } = router.query

  const goToStep = () => {
    dispatch({ type: GO_TO_STEP, payload: Number(step) + 1 })
    history.push(`/course/create/${Number(step) + 1}`)
  }

  const goToPrevious = () => {
    dispatch({ type: GO_TO_STEP, payload: Number(step) - 1 })
    history.push(`/course/create/${Number(step) - 1}`)
  }

  const goToHome = () => {
    history.push(`/instructor/course`)
  }

  const {
    tabs: { course },
    step: stepCurrently
  } = useSelector((state: RootState) => state.create)

  const renderPreviousButton = () => {
    if (Number(stepCurrently) !== 1) {
      return (
        <ButtonStyled primary onClick={goToPrevious}>
          Previous
        </ButtonStyled>
      )
    }
  }

  const renderNextButton = () => {
    if (Number(stepCurrently) !== course.length)
      return (
        <ButtonStyled danger onClick={goToStep}>
          Continue
        </ButtonStyled>
      )
    else
      return (
        <ButtonStyled danger onClick={goToHome}>
          Create Course
        </ButtonStyled>
      )
  }

  return (
    <FooterStyled>
      <Footer
        style={{
          background: "#fff"
        }}
      >
        <div className="footer-button">
          {renderPreviousButton()}
          <div style={{ flex: "1 1 0%" }} />
          {renderNextButton()}
        </div>
      </Footer>
    </FooterStyled>
  )
}
