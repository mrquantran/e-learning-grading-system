import ModalConfirm, { defaultButton } from "@/components/Modal/ModalConfirm"
import { useRouter } from "@/hooks/useRouter"
import ManageCourseAction from "@/modules/Course/action/manageCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import { ButtonStyled } from "@/stylesheets/Button/Button.styled"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CourseStatusWrapper, SettingWrapper } from "../Settings.styled"

export default function CourseStatus() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { courseId } = router.query

  const {
    data: { isPublic }
  } = useSelector((state: RootState) => state.create.detail)

  const handleDispatchDelete = () => {
    dispatch(ManageCourseAction.deleteCourse(courseId))
  }

  const handleDispatchPublish = () => {
    dispatch(ManageCourseAction.publishCourse(courseId))
  }

  const handlePublishCourse = () => {
    if (isPublic) {
      const defaultButtonModal = defaultButton({
        text: "Yes",
        confirm: handleDispatchPublish
      })

      ModalConfirm({
        title: "Unpublish your course?",
        content: "Are you sure you want to unpublish this course?",
        button: defaultButtonModal
      })
    } else {
      handleDispatchPublish()
    }
  }

  const handleDeleteCourse = () => {
    const defaultButtonModal = defaultButton({
      text: "Yes",
      confirm: handleDispatchDelete
    })

    ModalConfirm({
      title: "Delete Your Course?",
      content:
        "Are you sure you want to delete this course? This is permanent and cannot be undone.",
      button: defaultButtonModal
    })
  }

  return (
    <SettingWrapper>
      <span>
        <p>Course Status</p>
        <p>This course is not published on the Udemy marketplace.</p>
      </span>
      <CourseStatusWrapper>
        <ButtonStyled
          onClick={handlePublishCourse}
          disabled2
          sizeSm
          style={{ flex: 1 }}
        >
          {isPublic ? "Unpublished" : "Published"}
        </ButtonStyled>
        <p style={{ flex: 4, paddingLeft: "20px" }}>
          New students cannot find your course via search, but existing students
          can still access content.
        </p>
      </CourseStatusWrapper>
      <CourseStatusWrapper>
        <ButtonStyled
          delete
          sizeSm
          type="button"
          style={{ flex: 1 }}
          onClick={handleDeleteCourse}
        >
          Delete
        </ButtonStyled>
        <p style={{ flex: 4, paddingLeft: "20px" }}>
          We promise students lifetime access, so courses cannot be deleted
          after students have enrolled.
        </p>
      </CourseStatusWrapper>
    </SettingWrapper>
  )
}
