import React from "react"
import {
  DashboardComponentsStyled
  // DashboardRowStyled,
  // DashboardTwoColumnsItem
} from "../stylesheets/Dashboard.style"

import Carousel from "./Carousel/Carousel"

export default function Dashboard() {
  return (
    <DashboardComponentsStyled>
      <Carousel />
    </DashboardComponentsStyled>
  )
}
