import React from "react"
import { StepHeaderStyled } from "../Header/HeaderAdmin.styled"

export default function StepHeader() {
  return (
    <StepHeaderStyled>
      <div
        className="udlite-meter meter--meter--27-bB"
        aria-label="Step 1 of 4"
        data-purpose="meter"
        style={{ transform: "scaleX(0.25)" }}
      />
    </StepHeaderStyled>
  )
}
