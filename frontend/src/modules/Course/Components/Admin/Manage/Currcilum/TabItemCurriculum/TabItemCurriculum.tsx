import React from "react"

import { Tabs } from "antd"
import { TabWrapperStyled } from "./TabItemStyled"
import { useDispatch, useSelector } from "react-redux"
import ManageCourseAction from "@/modules/Course/action/manageCourseAction"

const { TabPane } = Tabs

const initialPanes = [
  { title: "Tab 1", content: "Content of Tab 1", key: "1", closable: false }
]

export default function TabItemCurriculum({ onOpen }) {
  const dispatch = useDispatch()

  const onCloseTab = () => {
    dispatch(ManageCourseAction.selectContent(true))
  }

  const onEdit = (targetKey, action) => {
    onCloseTab()
  }

  return (
    <TabWrapperStyled>
      <Tabs
        type="editable-card"
        //   onChange={this.onChange}
        //   activeKey={activeKey}
        onEdit={onEdit}
      >
        {initialPanes.map(pane => (
          <TabPane tab={pane.title} key={pane.key}>
            {onOpen()}
          </TabPane>
        ))}
      </Tabs>
    </TabWrapperStyled>
  )
}
