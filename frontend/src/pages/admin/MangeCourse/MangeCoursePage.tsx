import HeaderManage from "@/components/admin/HeaderManage/HeaderManage"
import LeftMenuManage from "@/components/admin/LeftMenuManage/LeftMenuManage"
import ManageCourseAction, {
  CHANGE_SELECTED_COMPONENT
} from "@/modules/Course/action/manageCourseAction"
import ManageContentContainer from "@/modules/Course/Container/Admin/ManageContentContainer/ManageContentContainer"
import { RootState } from "@/redux/reducer/rootReducer"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ManageCourseStyled } from "./ManageCourse.styled"

export default function MangeCoursePage() {
  // const [selectedKey, setSelectedKey] = useState(null)
  const { selectedComponent } = useSelector((state: RootState) => state.create)

  const dispatch = useDispatch()

  const handleChangeSelectedComponent = key => {
    dispatch(ManageCourseAction.changeSelectedComponent(key))
  }

  const {
    manageTabs: { course }
  } = useSelector((state: RootState) => state.create)

  const initialProps = {
    id: course[1].childTabs[0].id,
    title: course[1].childTabs[0].title,
    component: course[1].childTabs[0].component
  }

  const findComponent = () => {
    return course.reduce(
      (prev: any, item) =>
        prev || item.childTabs.find(child => child.id === selectedComponent),
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
          selectedKey={selectedComponent}
          setSelectedKey={handleChangeSelectedComponent}
        />
        <ManageContentContainer
          selectedComponent={findComponent() ? findComponent() : initialProps}
        ></ManageContentContainer>
      </ManageCourseStyled>
    </>
  )
}
