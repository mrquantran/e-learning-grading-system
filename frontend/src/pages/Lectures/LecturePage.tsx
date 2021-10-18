import Lectures from "@/modules/Lectures/Container/Lectures"
import { PageContentStyled } from "@/stylesheets/Page/Page.styled"
import React from "react"
import { Row, Col } from "antd"

export default function LecturePage() {
  return (
    <PageContentStyled>
      <Row>
        <Col span={16}>
          <Row></Row>
          <Row></Row>
        </Col>
        <Col span={8}>
          <Lectures></Lectures>
        </Col>
      </Row>
    </PageContentStyled>
  )
}
