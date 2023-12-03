//actions for columns
export const ADD_COLUMN = "ADD_COLUMN";
export const EDIT_COLUMN = "EDIT_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const RENAME_COLUMN = "RENAME_COLUMNN";

//actions for card
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const DELETE_CARD = "DELETE_CARD";

//specify what the COLUMN actions will do 
export const addColumn = (title) => ({
  type: ADD_COLUMN,
  payload: { title },
});

export const editColumn = (myColumnId, newColumn) => ({
    type: EDIT_COLUMN,
    payload: { myColumnId, newColumn },
  });

export const deleteColumn = (myColumnId, task) => ({
    type: DELETE_COLUMN,
    payload: { myColumnId, task },
  });


  export const renameColumn = (ColumnId, newTitle) => ({
    type: RENAME_COLUMN,
    payload: { ColumnId, newTitle },
  });

//specify what the CARD actions will do 

export const addCard = (columnId, task) => ({
  type: ADD_CARD,
  payload: { columnId, task },
});

export const editCard = (columnId, taskId, newTask) => ({
    type: EDIT_CARD,
    payload: { columnId, taskId, newTask },
  });

  export const deleteCard = (columnId, taskID) => ({
    type: DELETE_CARD,
    payload: { columnId, taskID },
  });

// actions.js

export const MOVE_CARD = "MOVE_CARD";

export const moveCard = (
  sourceColumnId,
  destinationColumnId,
  draggableId,
  sourceIndex,
  destinationIndex
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
