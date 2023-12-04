import React, { useState } from 'react';
import IconButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function OptionsMenu({ onRename, onClear, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="options-menu"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleClose(); onRename(); }}>Rename</MenuItem>
        <MenuItem onClick={() => { handleClose(); onClear(); }}>Clear</MenuItem>
        <MenuItem onClick={() => { handleClose(); onDelete(); }}>Delete</MenuItem>
      </Menu>
    </div>
  );
}