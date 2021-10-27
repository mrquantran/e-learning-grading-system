import React, { useState } from "react"
import Section from "./Section/Section"
import { CurriculumContainer, CurriculumTitle } from "./Curriculum.styled"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const sectionArray = [
  { id: "id-section1", content: "Introduction" }
  // { id: "id-section2", content: "Basic" }
  // { id: "id-section3", content: "Intermediate" },
  // { id: "id-section4", content: "Advanced" }
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const SectionList = React.memo(function SectionList({ section }: any) {
  return section.map((item, index: number) => {
    console.log(section)
    console.log(item)
    debugger
    return (
      <Draggable draggableId={item.id} index={index} key={item.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            index={index}
          >
            <Section
              draggableHandle={...provided.dragHandleProps}
              title={item.content}
              order={index + 1}
            />
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  })
})

export default function Curriculum() {
  const [state, setState] = useState<any>({ section: sectionArray })
  const [dropIndex, setDropIndex] = useState<number>(-1)

  function onDragEnd(result) {
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
          <DragDropContext
            onDragEnd={onDragEnd}
            onDragUpdate={e => {
              console.log(e)
            }}
          >
            <Droppable droppableId="curriculumSection" type="section">
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
