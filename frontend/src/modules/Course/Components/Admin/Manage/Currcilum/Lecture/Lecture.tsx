import React, { useState } from "react"
import { Collapse, Row } from "antd"
import { HeaderPanelStyled, LectureStyled } from "./Lecture.styled"
import {
  FileTextOutlined,
  CheckCircleFilled,
  CaretRightOutlined
} from "@ant-design/icons"
import { FlexItemStyled } from "@/stylesheets/Div/Div.styled"
import { ButtonGroup, ButtonStyled } from "@/stylesheets/Button/Button.styled"
import { SpanGroup } from "@/stylesheets/Text/Text.styled"
import SelectLecture from "../SelectLecture/SelectLecture"
import AddLectureArrow from "../AddLectureArrow/AddLectureArrow"
import { TYPE_LECTURE, TYPE_LECTURES2, TYPE_LECTURE_ID } from "@/utils/ENUM"
import { useDispatch } from "react-redux"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { DELETE_LECTURE } from "@/modules/Course/action/manageCourseAction"
import { showConfirm } from "@/stylesheets/Modal/Modal.styled"
import InputLecture from "../InputLecture/InputLecture"
import { FormGroup, InputAntd } from "@/stylesheets/Input/Inputantd.styled"
import { Field, Form, Formik } from "formik"
import { SectionCreateInput } from "../Section/Section.styled"

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

  const [editLecture, setEditLecture] = useState<any>(null)
  const [isFocusEdit, setFocusEdit] = useState<boolean>(false)

  const TYPE_DEFAULT = TYPE_LECTURE_ID.LECTURE

  const {
    title: titleInput,
    formField,
    updateAction
  }: any = TYPE_LECTURE.find(item => {
    return item.id === TYPE_DEFAULT
  })

  const renderField = () => {
    return formField.map(item => {
      return (
        <FormGroup>
          <Field name={item.name} type="text">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta
            }) => (
              <InputAntd
                section
                id={item.name}
                placeholder={item.placeHolder}
                name={item.name}
                {...field}
              />
            )}
          </Field>
        </FormGroup>
      )
    })
  }

  const handleCloseEditSection = () => {
    setEditLecture(null)
    setFocusEdit(false)
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

  const handleClickEditLecture = () => {
    setEditLecture(
      <SectionCreateInput className="ml-5">
        <Formik
          initialValues={{ title: "" }}
          onSubmit={async (values, { resetForm }) => {
            // eslint-disable-next-line no-console
            console.log("values", values)
            dispatch({
              type: updateAction,
              payload: { data: values, sectionId, lectureId: id }
            })
            handleCloseEditSection()
            resetForm()
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <div style={{ flex: 1 }}>
                {renderField()}
                <ButtonGroup>
                  <ButtonStyled
                    onClick={props.handleSubmit}
                    udemy
                    purple
                    type="submit"
                  >
                    Edit {titleInput}
                  </ButtonStyled>
                  <ButtonStyled
                    onClick={handleCloseEditSection}
                    dangerText
                    transparent
                  >
                    Cancel
                  </ButtonStyled>
                </ButtonGroup>
              </div>
            </Form>
          )}
        </Formik>
      </SectionCreateInput>
    )
    setFocusEdit(true)
  }

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
          <FlexItemStyled baseline={isFocusEdit} w100={isFocusEdit}>
            <SpanGroup>
              <CheckCircleFilled style={{ paddingRight: "5px" }} />
              <span style={{ whiteSpace: "nowrap" }}>Lecture {order}</span>
            </SpanGroup>
            {!isFocusEdit ? (
              <>
                <SpanGroup pl10>
                  <FileTextOutlined style={{ paddingRight: "5px" }} />
                  <span>{title}</span>
                </SpanGroup>
                <FlexItemStyled className="editDeleteLectureGroup">
                  <ButtonStyled
                    onClick={handleClickEditLecture}
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
              </>
            ) : (
              <>{editLecture}</>
            )}
          </FlexItemStyled>
          {!isFocusEdit ? (
            <FlexItemStyled>
              <ButtonStyled udemy>+ Content</ButtonStyled>
            </FlexItemStyled>
          ) : null}
        </Row>
      </HeaderPanelStyled>
    )
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
          <Panel
            showArrow={!isFocusEdit}
            header={<HeaderPanel title={title} order={order} />}
            key="1"
          >
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
