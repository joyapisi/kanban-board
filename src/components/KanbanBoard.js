import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { Button } from "react-bootstrap";
import { addColumn, moveCard } from "../redux/actions";

export default function kanbanBoard(){
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

