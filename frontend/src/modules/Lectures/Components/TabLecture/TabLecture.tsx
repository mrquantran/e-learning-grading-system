import React from "react"

import { Tabs } from "antd"
import { TabLectureStyled } from "./TabLecture.styled"

const { TabPane } = Tabs

function callback(key) {
  // eslint-disable-next-line no-console
  console.log(key)
}

export default function TabLecture() {
  return (
    <TabLectureStyled>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Overview" key="1">
          Overview
        </TabPane>
        <TabPane tab="Progress" key="2">
          Score & Progress
        </TabPane>
        <TabPane tab="Announcements" key="3">
          Announcements
        </TabPane>
      </Tabs>
    </TabLectureStyled>
  )
}
