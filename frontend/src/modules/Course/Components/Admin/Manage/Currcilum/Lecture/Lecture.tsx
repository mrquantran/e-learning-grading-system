import React, { useState } from "react"
import { Collapse, Row } from "antd"
import { HeaderPanelStyled, LectureStyled } from "./Lecture.styled"
import {
  FileTextOutlined,
  CheckCircleFilled,
  CaretRightOutlined
} from "@ant-design/icons"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { SpanGroup } from "@/stylesheets/Text/Text.styled"
import SelectLecture from "../SelectLecture/SelectLecture"
import AddLectureArrow from "../AddLectureArrow/AddLectureArrow"
import { TYPE_LECTURES2 } from "@/utils/ENUM"
import { useDispatch } from "react-redux"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { DELETE_LECTURE } from "@/modules/Course/action/manageCourseAction"
import { showConfirm } from "@/stylesheets/Modal/Modal.styled"

const { Panel } = Collapse

function callback(key) {
  // console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export default function Lecture({ title, order, sectionId, id }) {
  const [isFocus, setFocus] = useState<boolean>(false)
  const [inputSection, setInputSection] = useState<any>(null)
  const dispatch = useDispatch()

  const handleDeleteLecture = () => {
    dispatch({
      type: DELETE_LECTURE,
      payload: { sectionId: sectionId, lectureId: id }
    })
  }

  const modal = {
    title: "Please Confirm",
    description:
      "You are about to remove a curriculum item. Are you sure you want to continue?",
    buttonModalConfirm: {
      okButton: {
        function: handleDeleteLecture
      }
    }
  }

  function HeaderPanel({ title, order }) {
    return (
      <HeaderPanelStyled onClick={e => e.stopPropagation()}>
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
                onClick={() =>
                  showConfirm(
                    modal.title,
                    modal.description,
                    modal.buttonModalConfirm
                  )
                }
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

  const handleClickAddLecture = () => {
    setInputSection(
      <SelectLecture
        handleCloseLecture={handleCloseLecture}
        sectionId={sectionId}
        // order -2 is index for item will be add
        positionAdd={order}
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
      <LectureStyled>
        <Collapse
          // defaultActiveKey={["1"]}
          className="lecture"
          onChange={callback}
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header={<HeaderPanel title={title} order={order} />} key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </LectureStyled>
      <AddLectureArrow
        type={TYPE_LECTURES2.LECTURE}
        isFocus={isFocus}
        handleCloseLecture={handleCloseLecture}
        handleClickAddLecture={handleClickAddLecture}
      />
      {inputSection}
    </>
  )
}
