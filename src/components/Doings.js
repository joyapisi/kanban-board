// actions for columns
export const ADD_COLUMN = 'ADD_COLUMN';
export const CLEAR_COLUMN = 'CLEAR_COLUMN';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const RENAME_COLUMN = 'RENAME_COLUMN';

// actions for card
export const ADD_CARD = 'ADD_CARD';

// specify what the COLUMN actions will do
export const addColumn = (title) => ({
  type: ADD_COLUMN,
  payload: { title },
});

export const clearColumn = (ColumnId) => ({
  type: CLEAR_COLUMN,
  payload: { ColumnId },
});

export const deleteColumn = (myColumnId) => ({
  type: DELETE_COLUMN,
  payload: { myColumnId },
});

export const renameColumn = (ColumnId, newTitle) => ({
  type: RENAME_COLUMN,
  payload: { ColumnId, newTitle },
});

// specify what the CARD actions will do

export const addCard = (columnId, task) => ({
  type: ADD_CARD,
  payload: { columnId, task },
});

// actions.js

export const MOVE_CARD = 'MOVE_CARD';

export const moveCard = (
  sourceColumnId,
  destinationColumnId,
  draggableId,
  sourceIndex,
  destinationIndex,
) => ({
  type: MOVE_CARD,
  payload: {
    sourceColumnId,
    destinationColumnId,
    draggableId,
    sourceIndex,
    destinationIndex,
  },
});
