import LeftMenuManage from "@/components/admin/LeftMenuManage/LeftMenuManage"
import ManageContentContainer from "@/modules/Course/Container/Admin/ManageContentContainer/ManageContentContainer"
import React from "react"
import { ManageCourseStyled } from "./ManageCourse.styled"

export default function MangeCoursePage() {
  return (
    <ManageCourseStyled>
      <LeftMenuManage />
      <ManageContentContainer></ManageContentContainer>
    </ManageCourseStyled>
  )
}
