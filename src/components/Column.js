//This component will hold all components and the icon which adds a column
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import Button from '@mui/material/Button';
import AddCardModal from './modals/AddCardModal';
import { useState } from 'react';
import { addCard, clearColumn, deleteColumn, renameColumn } from './AllActions';
import { useDispatch } from 'react-redux';
import OptionsMenu from './OptionsMenu'; 

export default function Column({ column }) {
  const dispatch = useDispatch();  
  
  //set the state of the modal popup
  const [isAddCardModalOpen, setAddCardModalOpen] = useState(false);
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  //handle card addition within the column
  const handleAddCard = (cardTitle) => {
    dispatch(addCard(column.id, cardTitle));
    setAddCardModalOpen(false);
  };

  const handleRename = () => {
    setRenameModalOpen(true);
  };

  const handleRenameColumn = () => {
    dispatch(renameColumn(column.id, newColumnName));
    setRenameModalOpen(false);
  };

  const handleClear = () => {
    dispatch(clearColumn(column.id));
  };

  const handleDelete = () => {
    dispatch(deleteColumn(column.id));
  };

  return (
    <div className="column">
       <div className="column-header">
        <h3>{column.title}</h3>
        <OptionsMenu handleRename={handleRename} handleClear={handleClear} handleDelete={handleDelete}/>
      </div>

      {isRenameModalOpen && (
        <div className="rename-modal">
          <input
            type="text"
            placeholder="Enter new column name"
            onChange={(e) => setNewColumnName(e.target.value)}
          />
          <Button onClick={() => handleRenameColumn(newColumnName)}>
            Rename Column
          </Button>
          <Button onClick={() => setRenameModalOpen(false)}>Cancel</Button>
        </div>
      )}

      <Droppable droppableId={column.id} key={column.id}>
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
      <div className='add-card-btn'>
        <Button 
          onClick={() => setAddCardModalOpen(true)}>
            Add Card
        </Button>
      </div>

      {/* Control opening and closing of modal when card is being added */}
      <AddCardModal
        isOpen={isAddCardModalOpen}
        onClose={() => setAddCardModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
}
