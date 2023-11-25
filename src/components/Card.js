import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

export default function Card({ card }){
  return (
        <div>
          <BootstrapCard>
            <BootstrapCard.Body>
              <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
              <BootstrapCard.Text>{card.description}</BootstrapCard.Text>
            </BootstrapCard.Body>
          </BootstrapCard>
        </div>
      )}
  
  );
};
