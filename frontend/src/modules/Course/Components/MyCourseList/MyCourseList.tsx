import React from "react"
import { Row, Col } from "antd"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/reducer/rootReducer"
import { Link } from "react-router-dom"

interface Course {
  id: number
  name: string
  courseDetails: string
}

export default function MyCourseList() {
  const { data: coursesList } = useSelector(
    (state: RootState) => state.course.myCourse
  )

  const renderListCourse = () => {
    return coursesList.map((course: Course, index: number) => {
      return (
        <Col span={6} style={{ padding: "0px 8px" }}>
          <Link to={`/course/c${course.id}`}>
            <div className="box pull-up">
              <div className="box-header with-border">
                <h4 className="box-title">{course.name}</h4>
                <div className="box-controls pull-right">
                  <div className="progress progress-xs w-100 mb-0 mt-10">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div
                className="box-body"
                style={{ minHeight: "150px", color: "#172b4c" }}
              >
                <p>{course.courseDetails}</p>
              </div>
            </div>
          </Link>
        </Col>
      )
    })
  }

  return <Row>{renderListCourse()}</Row>
}
