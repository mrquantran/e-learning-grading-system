import React from "react"
import Lecture from "../Lecture/Lecture"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { TypeSection } from "@/utils/ENUM"

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
        draggableId={`lecture${item.id.toString()}`}
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
            <Lecture order={index + 1} title={item.title} />
            {/* {provided.placeholder} */}
          </div>
        )}
      </Draggable>
    )
  })
})

export default function LecturesContainer({ lecture, idSection }: any) {
  return (
    <Droppable droppableId={idSection} type={TypeSection.LECTURE}>
      {provided => (
        <div ref={provided.innerRef}>
          <LectureList section={lecture} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
