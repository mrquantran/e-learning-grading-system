import React, { useState } from "react"
import Section from "./Section/Section"
import { CurriculumContainer, CurriculumTitle } from "./Curriculum.styled"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { dataCurriculum } from "./dataExample"

const sectionArray = dataCurriculum

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const SectionList = function SectionList({ section }: any) {
  console.log(section)
  return section.map((item, index: number) => {
    return (
      <Draggable draggableId={item.id.toString()} index={index} key={item.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            index={index}
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
  const [state, setState] = useState<any>({ section: sectionArray })
  const [dropIndex, setDropIndex] = useState<number>(-1)

  console.log("state", state)

  function onDragEnd(result) {
    // Make sure we have a valid destination
    if (result.destination === undefined || result.destination === null)
      return null

    // Make sure we're actually moving the item
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.destination.index === result.source.index
    )
      return null

    if (!result.destination) {
      return
    }

    if (result.type === "curriculumSection") {
      const section = reorder(
        state.section,
        result.source.index,
        result.destination.index
      )
      setState({ section })
    } else {
      const parentId = Number(result.source.droppableId.replace("Section", ""))
      const itemSubItemMap = state.section.reduce((acc, item) => {
        acc[item.id] = item.lecturesMaterial
        return acc
      }, {})
      const subItemsForCorrespondingParent = itemSubItemMap[parentId]
      // debugger

      const reorderedSubItems = reorder(
        subItemsForCorrespondingParent,
        result.source.index,
        result.destination.index
      )

      let newItems = [...state.section]
      newItems = newItems.map(item => {
        if (item.id === parentId) {
          item.lecturesMaterial = reorderedSubItems
        }
        return item
      })

      setState({
        section: newItems
      })
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
              console.log(e)
            }}
          >
            <Droppable droppableId="curriculumSection" type="curriculumSection">
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
