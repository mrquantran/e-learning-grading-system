import HeaderManage from "@/components/admin/HeaderManage/HeaderManage"
import LeftMenuManage from "@/components/admin/LeftMenuManage/LeftMenuManage"
import ManageContentContainer from "@/modules/Course/Container/Admin/ManageContentContainer/ManageContentContainer"
import { RootState } from "@/redux/reducer/rootReducer"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { ManageCourseStyled } from "./ManageCourse.styled"

export default function MangeCoursePage() {
  const [selectedKey, setSelectedKey] = useState(null)

  const {
    manageTabs: { course }
  } = useSelector((state: RootState) => state.create)

  const initialProps = {
    id: course[0].childTabs[0].id,
    title: course[0].childTabs[0].title,
    component: course[0].childTabs[0].component
  }

  const findComponent = () => {
    return course.reduce(
      (prev: any, item) =>
        prev || item.childTabs.find(child => child.id === selectedKey),
      null
    )
  }

  return (
    <>
      <HeaderManage
        headerExtra={findComponent() ? findComponent() : initialProps}
      />
      <ManageCourseStyled>
        <LeftMenuManage
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
        <ManageContentContainer
          selectedComponent={findComponent() ? findComponent() : initialProps}
        ></ManageContentContainer>
      </ManageCourseStyled>
    </>
  )
}
