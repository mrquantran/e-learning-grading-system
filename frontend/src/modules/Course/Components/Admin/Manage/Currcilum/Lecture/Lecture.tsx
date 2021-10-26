import React from "react"
import { Collapse, Row } from "antd"
import { HeaderPanelStyled, LectureStyled } from "./Lecture.styled"
import {
  FileTextOutlined,
  PlusOutlined,
  CheckCircleFilled
} from "@ant-design/icons"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { SpanGroup } from "@/stylesheets/Text/Text.styled"

const { Panel } = Collapse

function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function HeaderPanel() {
  return (
    <HeaderPanelStyled>
      <Row justify="space-between" style={{ width: "100%" }}>
        <FlexItemStyled>
          <SpanGroup>
            <CheckCircleFilled style={{ paddingRight: "5px" }} />
            <span>Lecture 1</span>
          </SpanGroup>
          <SpanGroup pl10>
            <FileTextOutlined style={{ paddingRight: "5px" }} />
            <span>Basic to typescript</span>
          </SpanGroup>
        </FlexItemStyled>
        <FlexItemStyled>
          <ButtonStyled udemy>+ Content</ButtonStyled>
        </FlexItemStyled>
      </Row>
    </HeaderPanelStyled>
  )
}

export default function Lecture() {
  return (
    <LectureStyled>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={callback}
        expandIconPosition="right"
      >
        <Panel header={<HeaderPanel />} key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </LectureStyled>
  )
}
