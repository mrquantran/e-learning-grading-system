import React, { useEffect, useState } from "react"
import Section from "./Section/Section"
import { CurriculumContainer, CurriculumTitle } from "./Curriculum.styled"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { TypeSection } from "@/utils/ENUM"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "@/hooks/useRouter"
import {
  FETCH_COURSE_LECTURE,
  UPDATE_COURSE_LECTURE
} from "@/modules/Course/action/manageCourseAction"
import { RootState } from "@/redux/reducer/rootReducer"
import { dataCurriculum } from "./dataExample"

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const SectionList = function SectionList({ section }: any) {
  return section?.map((item, index: number) => {
    return (
      <Draggable draggableId={item.id.toString()} index={index} key={item.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            index={index}
            // style={{ position: "relative" }}
          >
            <Section
              id={`Section${item.id.toString()}`}
              draggableHandle={...provided.dragHandleProps}
              title={item.title}
              order={index + 1}
              lecturesMaterial={item.lecturesMaterial}
            />
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  })
}

export default function Curriculum() {
  const dispatch = useDispatch()

  const router = useRouter()
  const { courseId } = router.query

  const { data } = useSelector((state: RootState) => state.create.curriculum)

  const [state, setState] = useState<any>({ section: dataCurriculum })

  // useEffect(() => {
  //   setState({ section: data })
  // }, [data, courseId])

  // useEffect(() => {
  //   dispatch({ type: FETCH_COURSE_LECTURE, payload: courseId })

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, courseId])

  // useEffect(() => {
  //   if (data.length !== 0) {
  //     dispatch({
  //       type: UPDATE_COURSE_LECTURE,
  //       payload: { courseId, data: state.section }
  //     })
  //   }
  // }, [state.section])

  function onDragEnd(result) {
    const { source, destination } = result

    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    /**
     * droppableId with Section{ID}
     * we should move to number id just like in database
     * get sourceIndex = index start drag
     * get destIndex = index end drop
     */
    const sourceParentId = Number(
      result.source.droppableId.replace(TypeSection.SECTION, "")
    )
    const destParentId = Number(
      result.destination.droppableId.replace(TypeSection.SECTION, "")
    )

    const sourceIndex = result.source.index
    const destIndex = result.destination.index

    // 1. in case we drag order section
    if (result.type === TypeSection.SECTION) {
      const section = reorder(
        state.section,
        result.source.index,
        result.destination.index
      )
      setState({ section })
    }
    // 2. incase we drag lecture
    else if (result.type === TypeSection.LECTURE) {
      const itemSubItemMap = state.section.reduce((acc, item) => {
        acc[item.id] = item.lecturesMaterial
        return acc
      }, {})

      const sourceSubItems = itemSubItemMap[sourceParentId]
      const destSubItems = itemSubItemMap[destParentId]

      let newItems = [...state.section]

      // 2.1 incase we drag lecture in this section
      if (sourceParentId === destParentId) {
        const reorderedSubItems = reorder(
          sourceSubItems,
          sourceIndex,
          destIndex
        )
        newItems = newItems.map(item => {
          if (item.id === sourceParentId) {
            item.lecturesMaterial = reorderedSubItems
          }
          return item
        })
        setState({
          section: newItems
        })
      }
      // 2.2 incase we drag lecture to other section
      else {
        let newSourceSubItems = [...sourceSubItems]
        const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1)

        let newDestSubItems = [...destSubItems]
        newDestSubItems.splice(destIndex, 0, draggedItem)
        newItems = newItems.map(item => {
          if (item.id === sourceParentId) {
            newSourceSubItems = newSourceSubItems.map(lecture => {
              return { ...lecture, lectureId: item.id }
            })
            item.lecturesMaterial = newSourceSubItems
          } else if (item.id === destParentId) {
            newDestSubItems = newDestSubItems.map(lecture => {
              return { ...lecture, lectureId: item.id }
            })
            item.lecturesMaterial = newDestSubItems
            item.lecturesMaterial.lectureId = item.id
          }
          return item
        })
        setState({
          section: newItems
        })
      }
    }

    // if (!result.destination) {
    //   return
    // }
    // if (result.destination.index === result.source.index) {
    //   return
    // }
    // const section = reorder(
    //   state.section,
    //   result.source.index,
    //   result.destination.index
    // )
    // setState({ section })
  }

  return (
    <CurriculumContainer>
      <CurriculumTitle>
        <div className="pb20">
          Start putting together your course by creating sections, lectures and
          practice (quizzes, coding exercises and assignments).
        </div>
        <p data-purpose="free-course-message">
          If you’re intending to offer your course for free, the total length of
          video content must be less than 2 hours.
        </p>
      </CurriculumTitle>
      <div>
        <ul style={{ padding: 0 }}>
          {/*Drag Drop container Section*/}
          <DragDropContext
            onDragEnd={onDragEnd}
            onDragUpdate={e => {
              // console.log(e)
            }}
          >
            <Droppable
              droppableId={TypeSection.SECTION}
              type={TypeSection.SECTION}
            >
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <SectionList section={state.section} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </ul>
      </div>
    </CurriculumContainer>
  )
}
