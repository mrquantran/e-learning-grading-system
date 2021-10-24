import LandingPageCourse from "@/modules/Course/Components/Admin/Manage/LandingPageCourse/LandingPageCourse"
import TitleContent from "@/modules/Course/Components/Admin/Manage/TitleContent/TitleContent"
import React from "react"
import {
  ManageContentContainerStyled,
  ManageWrapperComponentStyled
} from "./ManageContainer.styled"

export default function ManageContentContainer({ selectedComponent }) {
  return (
    <ManageContentContainerStyled>
      <div>
        <TitleContent title={selectedComponent.title} />
      </div>
      <ManageWrapperComponentStyled>
        <selectedComponent.component />
      </ManageWrapperComponentStyled>
    </ManageContentContainerStyled>
  )
}