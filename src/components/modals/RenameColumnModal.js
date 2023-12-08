/* eslint-disable */
// RenameColumnModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RenameColumnModal = ({ isOpen, onClose, onRename }) => {
  const [newColumnName, setNewColumnName] = useState('');

  const handleRenameClick = () => {
    if (newColumnName.trim() !== '') {
      onRename(newColumnName);
      setNewColumnName('');
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
          label="New Column Name"
          variant="outlined"
          fullWidth
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleRenameClick}>
            Rename
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RenameColumnModal;
