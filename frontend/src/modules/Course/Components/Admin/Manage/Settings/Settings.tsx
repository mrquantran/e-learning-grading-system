import React from "react"
import CourseStatus from "./CourseStatus/CourseStatus"
import EnrollmentSetting from "./EnrollmentSetting/EnrollmentSetting"
import Permission from "./Permission/Permission"

export default function Settings() {
  return (
    <>
      <CourseStatus />
      {/* <EnrollmentSetting /> */}
      <Permission />
    </>
  )
}
