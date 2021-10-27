import React, { useState } from "react"
import Lecture from "../Lecture/Lecture"
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd"

export const lectureArray = [
  { id: "Lecture1", content: "Hello" },
  { id: "Lecture2", content: "Hello" },
  { id: "Lecture3", content: "Hello" },
  { id: "Lecture4", content: "Hello" }
]

const LectureList = React.memo(function LectureList({ section }: any) {
  return section.map((item, index: number) => {
    return (
      <Draggable
        draggableId={item.id.toString()}
        index={index}
        key={item.id.toString()}
      >
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            index={index}
          >
            <Lecture order={index + 1} />
            {/* {provided.placeholder} */}
          </div>
        )}
      </Draggable>
    )
  })
})

export default function LecturesContainer({ id }) {
  const [state, setState] = useState<any>({ lecture: lectureArray })
  return (
    <Droppable droppableId={id}>
      {provided => (
        <div ref={provided.innerRef}>
          <LectureList section={state.lecture} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
