import React from "react"
import { Layout } from "antd"
import { FooterStyled } from "./Footer.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { useDispatch } from "react-redux"
import { useRouter } from "@/hooks/useRouter"
import { GO_TO_STEP } from "@/modules/Course/action/createCourseAction"
import { history } from "@/App/App"

const { Footer } = Layout

export default function FooterAdmin() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { step } = router.query

  const goToStep = () => {
    dispatch({ type: GO_TO_STEP, payload: Number(step) + 1 })
    history.push(`/course/create/${Number(step) + 1}`)
  }

  return (
    <FooterStyled>
      <Footer style={{ background: "#fff" }}>
        <ButtonStyled danger onClick={goToStep}>
          Continue
        </ButtonStyled>
      </Footer>
    </FooterStyled>
  )
}
