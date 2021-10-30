import React, { useState } from "react"
import { Collapse, Row } from "antd"
import { HeaderPanelStyled, LectureStyled } from "./Lecture.styled"
import { FileTextOutlined, CheckCircleFilled } from "@ant-design/icons"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { SpanGroup } from "@/stylesheets/Text/Text.styled"
import SelectLecture from "../SelectLecture/SelectLecture"
import AddLectureArrow from "../AddLectureArrow/AddLectureArrow"
import { TYPE_LECTURES2 } from "@/utils/ENUM"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const { Panel } = Collapse

function callback(key) {
  // console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function HeaderPanel({ title, order }) {
  return (
    <HeaderPanelStyled>
      <Row justify="space-between" style={{ width: "100%" }}>
        <FlexItemStyled>
          <SpanGroup>
            <CheckCircleFilled style={{ paddingRight: "5px" }} />
            <span>Lecture {order}</span>
          </SpanGroup>
          <SpanGroup pl10>
            <FileTextOutlined style={{ paddingRight: "5px" }} />
            <span>{title}</span>
          </SpanGroup>
          <FlexItemStyled className="editDeleteLectureGroup">
            <ButtonStyled
              // onClick={handleClickEditSection}
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
              // onClick={() =>
              //   showConfirm(
              //     modal.title,
              //     modal.description,
              //     modal.buttonModalConfirm
              //   )
              // }
            >
              <DeleteForeverIcon sx={{ fontSize: 15 }} />
            </ButtonStyled>
          </FlexItemStyled>
        </FlexItemStyled>
        <FlexItemStyled>
          <ButtonStyled udemy>+ Content</ButtonStyled>
        </FlexItemStyled>
      </Row>
    </HeaderPanelStyled>
  )
}

export default function Lecture({ title, order, sectionId }) {
  const [isFocus, setFocus] = useState<boolean>(false)
  const [inputSection, setInputSection] = useState<any>(null)

  const handleClickAddLecture = () => {
    setInputSection(
      <SelectLecture
        handleCloseLecture={handleCloseLecture}
        sectionId={sectionId}
        // order -2 is index for item will be add
        positionAdd={order - 1}
      />
    )
    setFocus(true)
  }

  const handleCloseLecture = () => {
    setInputSection(null)
    setFocus(false)
  }

  return (
    <>
      <AddLectureArrow
        type={TYPE_LECTURES2.LECTURE}
        isFocus={isFocus}
        handleCloseLecture={handleCloseLecture}
        handleClickAddLecture={handleClickAddLecture}
      />
      {inputSection}
      <LectureStyled>
        <Collapse
          // defaultActiveKey={["1"]}
          className="lecture"
          onChange={callback}
          expandIconPosition="right"
        >
          <Panel header={<HeaderPanel title={title} order={order} />} key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </LectureStyled>
    </>
  )
}
