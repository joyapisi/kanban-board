import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <BootstrapCard>
            <BootstrapCard.Body>
              <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
              <BootstrapCard.Text>{card.description}</BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
