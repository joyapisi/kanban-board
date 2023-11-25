import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addColumn, moveCard } from "../redux/actions";
import "../styling/styles.scss"

export default function kanbanBoard(){
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(moveCard(source.droppableId, destination.droppableId, draggableId, source.index, destination.index));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        {columns.length < 5 && (
          <Button variant="success" onClick={() => dispatch(addColumn("New Column"))}>
            Add Column
          </Button>
        )}
      </div>
    </DragDropContext>
  );
};

