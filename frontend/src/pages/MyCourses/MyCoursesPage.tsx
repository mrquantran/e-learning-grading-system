import React from "react"
import { Tabs } from "antd"
import { MyCoursesPageStyled } from "./MyCoursesPageStyled.styled"
import MyCourses from "@/modules/Course/Container/MyCourses/MyCourses"
import MyFavorite from "@/modules/Course/Container/MyFavorite/MyFavorite"
import MyTeachCourses from "@/modules/Course/Container/MyTeachCourses/MyTeachCourses"

import { history } from "@/App/App"
import { useRouter } from "@/hooks/useRouter"

const { TabPane } = Tabs

const coursePagePathName = {
  myCourse: "/my-courses/learning",
  myFavorite: "/my-courses/favorite",
  myTeachCourse: "/my-courses/teaching"
}

export default function MyCoursesPage() {
  const router = useRouter()

  return (
    <MyCoursesPageStyled>
      <Tabs
        centered
        activeKey={router.pathname}
        onChange={key => {
          history.push(key)
        }}
      >
        <TabPane tab="Tab 1" key={coursePagePathName.myCourse}>
          <MyCourses />
        </TabPane>
        <TabPane tab="Tab 2" key={coursePagePathName.myFavorite}>
          <MyFavorite />
        </TabPane>
        <TabPane tab="Tab 3" key={coursePagePathName.myTeachCourse}>
          <MyTeachCourses />
        </TabPane>
      </Tabs>
    </MyCoursesPageStyled>
  )
}
