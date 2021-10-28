import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import React, { useState } from "react"
import {
  SectionContent,
  SectionGroupTitle,
  SectionStyled,
  SectionTitle
} from "./Section.styled"
import { FileTextOutlined, CaretRightOutlined } from "@ant-design/icons"
import LecturesContainer from "../Container/LecturesContainer"
import { Collapse } from "antd"
import EditArrow from "../EditArrow/EditArrow"
import InputSection from "../InputSection/InputSection"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const { Panel } = Collapse

export default function Section({
  id,
  draggableHandle,
  title,
  order,
  lecturesMaterial
}) {
  const [inputSection, setInputSection] = useState<any>(null)

  const [isFocus, setFocus] = useState<boolean>(false)

  const handleClickAddSection = () => {
    setInputSection(
      <InputSection
        handleCloseAddSection={handleCloseAddSection}
        sectionArrow={order}
      />
    )
    setFocus(true)
  }

  const handleCloseAddSection = () => {
    setInputSection(null)
    setFocus(false)
  }

  return (
    <div style={{ position: "relative" }}>
      <EditArrow
        isFocus={isFocus}
        handleCloseAddSection={handleCloseAddSection}
        handleClickAddSection={handleClickAddSection}
      />
      {/* <InputSection /> */}
      {inputSection}
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
                      <FlexItemStyled className="editDeleteGroup">
                        <ButtonStyled
                          style={{ padding: "2px 8px" }}
                          transparent
                        >
                          <ModeEditIcon sx={{ fontSize: 15 }} />
                        </ButtonStyled>
                        <ButtonStyled
                          style={{
                            padding: "2px 0px"
                          }}
                          transparent
                        >
                          <DeleteForeverIcon sx={{ fontSize: 15 }} />
                        </ButtonStyled>
                      </FlexItemStyled>
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
    </div>
  )
}
