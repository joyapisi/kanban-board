import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addColumn, moveCard } from "./actions/Actions.js";
import "../styling/styles.scss"

export default function KanbanBoard(){
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(moveCard(
      source.droppableId,
      destination.droppableId,
      draggableId,
      source.index,
      destination.index
      ));
  };

  return (
    // Using react beautiful dnd for drag n drop
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {/* Iterate through my array of columns */}
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        {/* My user should only see 5 columns then add button disappears */}
        {columns.length < 5 && (
          // Using bootstrap button here and onClick for what happens when mouse clicked by user
          <Button variant="success" onClick={() => dispatch(addColumn("New Column"))}>
            +
          </Button>
        )}
      </div>
    </DragDropContext>
  );
};

