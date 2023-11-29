//This component will hold all components and the icon which adds a column
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import Button from '@mui/material/Button';
import AddCardModal from './modals/AddCardModal';
import { useState } from 'react';
import { addCard } from './actions/Actions';
import { useDispatch } from 'react-redux';

export default function Column({ column }) {
  const dispatch = useDispatch();  
  
  //set the state of the modal popup
  const [isAddCardModalOpen, setAddCardModalOpen] = useState(false);
  
  //handle card addition within the column
  const handleAddCard = (cardTitle) => {
    dispatch(addCard(column.id, cardTitle));
    setAddCardModalOpen(false);
    // console.log(`Adding card: ${cardTitle}`);
  };

  return (
    <div className="column">
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div 
          className='column-details'
          ref={provided.innerRef} {...provided.droppableProps}>
            {column.cards && column.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Button that will trigger the opening of the Add Card modal */}
      <Button onClick={() => setAddCardModalOpen(true)}>Add Card</Button>

      {/* Control opening and closing of modal when card is being added */}
      <AddCardModal
        isOpen={isAddCardModalOpen}
        onClose={() => setAddCardModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
}
