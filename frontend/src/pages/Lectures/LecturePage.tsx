import { PageContentStyled } from "@/stylesheets/Page/Page.styled"
import React from "react"
import { Row, Col } from "antd"
import LecturesCollapse from "@/modules/Lectures/Container/LecturesCollpase"
import VideoLecture from "@/modules/Lectures/Components/Video/VideoLecture"
import TabLecture from "@/modules/Lectures/Components/TabLecture/TabLecture"

export default function LecturePage() {
  return (
    <PageContentStyled>
      <div className="box" style={{ height: "100%" }}>
        <div className="box-body">
          <Row style={{ height: "100%" }}>
            <Col span={16}>
              <Row style={{ height: "75%" }}>
                <VideoLecture />
              </Row>
              <Row style={{ height: "25%" }}>
                <TabLecture />
              </Row>
            </Col>
            <Col span={8}>
              <LecturesCollapse></LecturesCollapse>
            </Col>
          </Row>
        </div>
      </div>
    </PageContentStyled>
  )
}
