import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddCardModal = ({ isOpen, onClose, onAddCard }) => {
  const [cardTitle, setCardTitle] = useState('');

  const handleAddCard = () => {
    if (cardTitle.trim() !== '') {
        onAddCard(cardName);
        setCardName('');
        onClose();
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          label="Card Name"
          variant="outlined"
          fullWidth
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddCard}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCardModal;
