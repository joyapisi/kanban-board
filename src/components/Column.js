//This component will hold all components and the icon which adds a column
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

export default function Column({column}){
    return(
        <div className="column">
        <h3>{column.title}</h3>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="card-container"
            >
              {column.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div> 
   )
}
