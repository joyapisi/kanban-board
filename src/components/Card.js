import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DraggableCard({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card-container"
        >
          <Card variant="outlined" className="card-body">
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
