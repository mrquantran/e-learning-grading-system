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
import {
  TypeSection,
  TYPE_INPUT,
  TYPE_LECTURES,
  TYPE_LECTURES2
} from "@/utils/ENUM"
import { useDispatch } from "react-redux"
import { DELETE_COURSE_LECTURE } from "@/modules/Course/action/manageCourseAction"
import { showConfirm } from "@/stylesheets/Modal/Modal.styled"
import AddLectureArrow from "../AddLectureArrow/AddLectureArrow"
import SelectLecture from "../SelectLecture/SelectLecture"

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
  const [editSection, setEditSection] = useState<any>(null)
  const [isFocusEdit, setFocusEdit] = useState<boolean>(false)
  const idSection = Number(id.replace(TypeSection.SECTION, ""))

  const [isFocusLecture, setFocusLecture] = useState<boolean>(false)
  const [inputLecture, setInputLecture] = useState<any>(null)

  const dispatch = useDispatch()

  const handleCloseAddSection = () => {
    setInputSection(null)
    setFocus(false)
  }

  const handleCloseEditSection = () => {
    setEditSection(null)
    setFocusEdit(false)
  }

  const handleClickAddSection = () => {
    setInputSection(
      <InputSection
        sectionId={idSection}
        type={TYPE_INPUT.CREATE}
        handleCloseAddSection={handleCloseAddSection}
        sectionArrow={order}
      />
    )
    setFocus(true)
  }

  const handleClickEditSection = () => {
    setEditSection(
      <InputSection
        sectionId={idSection}
        type={TYPE_INPUT.UPDATE}
        handleCloseAddSection={handleCloseEditSection}
        sectionArrow={order}
      />
    )
    setFocusEdit(true)
  }

  const handleDeleteSection = () => {
    dispatch({ type: DELETE_COURSE_LECTURE, payload: { sectionId: idSection } })
  }

  const modal = {
    title: "Please Confirm",
    description:
      "You are about to remove a curriculum item. Are you sure you want to continue?",
    buttonModalConfirm: {
      okButton: {
        function: handleDeleteSection
      }
    }
  }

  const handleClickAddLecture = () => {
    setInputLecture(
      <SelectLecture
        positionAdd={0}
        sectionId={idSection}
        handleCloseLecture={handleCloseLecture}
      />
    )
    setFocusLecture(true)
  }

  const handleCloseLecture = () => {
    setInputLecture(null)
    setFocusLecture(false)
  }

  const renderHeaderPanel = () => {
    if (!isFocusEdit) {
      return (
        <SectionContent {...draggableHandle} onClick={e => e.stopPropagation()}>
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
                    onClick={handleClickEditSection}
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
              </span>
            </SectionTitle>
          </FlexItemStyled>
          {lecturesMaterial.length === 0 ? (
            <AddLectureArrow
              type={TYPE_LECTURES2.SECTION}
              isFocus={isFocusLecture}
              handleCloseLecture={handleCloseLecture}
              handleClickAddLecture={handleClickAddLecture}
            />
          ) : null}
        </SectionContent>
      )
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <EditArrow
        type={TYPE_LECTURES.CHAPTER}
        isFocus={isFocus}
        handleCloseAddSection={handleCloseAddSection}
        handleClickAddSection={handleClickAddSection}
      />
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
          {editSection}
          <Panel showArrow={!isFocusEdit} header={renderHeaderPanel()} key={id}>
            {inputLecture}
            <LecturesContainer
              id={id}
              idSection={idSection}
              lecture={lecturesMaterial}
            />
          </Panel>
        </Collapse>
      </SectionStyled>
    </div>
  )
}
