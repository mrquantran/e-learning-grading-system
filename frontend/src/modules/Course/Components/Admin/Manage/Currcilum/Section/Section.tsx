import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import React from "react"
import {
  SectionContent,
  SectionGroupTitle,
  SectionStyled,
  SectionTitle
} from "./Section.styled"
import { FileTextOutlined } from "@ant-design/icons"
import LecturesContainer from "../Container/LecturesContainer"

export default function Section({
  id,
  draggableHandle,
  title,
  order,
  lecturesMaterial
}) {
  return (
    <SectionStyled>
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
      {/* <Lecture /> */}
      <LecturesContainer idSection={id} lecture={lecturesMaterial} />
    </SectionStyled>
  )
}
