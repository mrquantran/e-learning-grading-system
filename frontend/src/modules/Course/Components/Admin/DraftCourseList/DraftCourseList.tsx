import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { Row, Col } from "antd"
import React from "react"
import {
  CourseCardImageStyled,
  CourseDraftItemStyled,
  CourseProgressStyled
} from "./DraftCourseList.styled"

export default function DraftCourseList() {
  return (
    <>
      <Row>
        <Col span={12}>
          <CourseDraftItemStyled flex>
            <div className="box pull-up">
              <div className="box-body">
                <FlexItemStyled>
                  <CourseCardImageStyled>
                    <img
                      alt=""
                      width="118"
                      height="118"
                      src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
                    ></img>
                  </CourseCardImageStyled>
                  <div className="d-flex align-items-center">
                    {/* <div className="icon bg-primary-light rounded-circle w-60 h-60 text-center l-h-80">
                <span className="font-size-30 icon-Bulb1">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </span>
              </div> */}
                    <div className="ml-15">
                      <h5 className="mb-0">UX Design</h5>
                      <p className="text-fade font-size-12 mb-0">You Watched</p>
                    </div>
                  </div>
                </FlexItemStyled>

                <CourseProgressStyled>
                  <p className="text-fade font-size-12 mb-0">
                    Finish your course
                  </p>

                  <div className="courses--course-progress--C_Gvp udlite-meter-wrapper meter--meter-wrapper--R6ZCR">
                    <div
                      className="udlite-meter meter--meter--27-bB"
                      aria-label="0% complete"
                      data-purpose="meter"
                      style={{ transform: "scaleX(0.65)" }}
                    />
                  </div>
                </CourseProgressStyled>
              </div>
            </div>
          </CourseDraftItemStyled>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <CourseDraftItemStyled flex>
            <div className="box pull-up">
              <div className="box-body">
                <FlexItemStyled>
                  <CourseCardImageStyled>
                    <img
                      alt=""
                      width="118"
                      height="118"
                      src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
                    ></img>
                  </CourseCardImageStyled>
                  <div className="d-flex align-items-center">
                    {/* <div className="icon bg-primary-light rounded-circle w-60 h-60 text-center l-h-80">
                <span className="font-size-30 icon-Bulb1">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </span>
              </div> */}
                    <div className="ml-15">
                      <h5 className="mb-0">UX Design</h5>
                      <p className="text-fade font-size-12 mb-0">You Watched</p>
                    </div>
                  </div>
                </FlexItemStyled>

                <CourseProgressStyled>
                  <p className="text-fade font-size-12 mb-0">
                    Finish your course
                  </p>

                  <div className="courses--course-progress--C_Gvp udlite-meter-wrapper meter--meter-wrapper--R6ZCR">
                    <div
                      className="udlite-meter meter--meter--27-bB"
                      aria-label="0% complete"
                      data-purpose="meter"
                      style={{ transform: "scaleX(0.25)" }}
                    />
                  </div>
                </CourseProgressStyled>
              </div>
            </div>
          </CourseDraftItemStyled>
        </Col>
      </Row>
    </>
  )
}
