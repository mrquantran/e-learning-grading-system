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

const getListStyle = isDraggingOver => ({
  padding: 8,
  margin: "10px 0"
})

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  opacity: isDragging ? 0.8 : 1
})

const LectureList = React.memo(function LectureList({
  section,
  sectionId
}: any) {
  return section.map((item, index: number) => {
    return (
      <>
        <Draggable
          draggableId={`lecture${item.id}`}
          index={index}
          key={item.id.toString()}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              key={item.id}
              index={index}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <Lecture
                id={item.id}
                sectionId={sectionId}
                order={index + 1}
                title={item.title}
              />
              {provided.placeholder}
            </div>
          )}
        </Draggable>
      </>
    )
  })
})

export default function LecturesContainer({ lecture, idSection, id }: any) {
  return (
    <>
      <Droppable droppableId={id} type={TypeSection.LECTURE}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {/* <SelectLecture /> */}
            <LectureList section={lecture} sectionId={idSection} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}
