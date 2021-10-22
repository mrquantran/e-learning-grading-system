import CreateCourseCarousel from "@/modules/Course/Components/CreateCourse/CreateCourseCarousel"
import { PageContentStyled } from "@/stylesheets/Page/Page.styled"
import React from "react"

export default function DashboardPageAdmin() {
  return (
    <PageContentStyled>
      <CreateCourseCarousel />
    </PageContentStyled>
  )
}
