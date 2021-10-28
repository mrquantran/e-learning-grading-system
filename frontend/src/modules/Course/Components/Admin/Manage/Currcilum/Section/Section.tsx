import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import React from "react"
import {
  SectionContent,
  SectionGroupTitle,
  SectionStyled,
  SectionTitle
} from "./Section.styled"
import { FileTextOutlined, CaretRightOutlined } from "@ant-design/icons"
import LecturesContainer from "../Container/LecturesContainer"
import { Collapse } from "antd"

const { Panel } = Collapse

export default function Section({
  id,
  draggableHandle,
  title,
  order,
  lecturesMaterial
}) {
  return (
    <SectionStyled key={id}>
      <Collapse
        defaultActiveKey={[id]}
        expandIconPosition="right"
        className="Section"
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel
          header={
            <SectionContent {...draggableHandle}>
              <FlexItemStyled>
                <SectionTitle>
                  <span>
                    Section {order}:{" "}
                    <SectionGroupTitle>
                      <FileTextOutlined />
                      <span>{title}</span>
                    </SectionGroupTitle>
                  </span>
                </SectionTitle>
              </FlexItemStyled>
            </SectionContent>
          }
          key={id}
        >
          <LecturesContainer idSection={id} lecture={lecturesMaterial} />
        </Panel>

        {/* <Lecture /> */}
      </Collapse>
    </SectionStyled>
  )
}
