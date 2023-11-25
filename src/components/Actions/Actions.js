//actions for columns
export const ADD_COLUMN = "ADD_COLUMN";
export const EDIT_COLUMN = "EDIT_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
//actions for cards
export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";

//specify what the COLUMN actions will do 
export const addColumn = () => ({
  type: ADD_COLUMN,
  payload: ,
});

export const editColumn = () => ({
    type: EDIT_COLUMN,
    payload: ,
  });

export const deleteColumn = () => ({
    type: DELETE_COLUMN,
    payload: ,
  });

//specify what the CARD actions will do 

export const addCard = (columnId, task) => ({
  type: ADD_CARD,
  payload: { columnId, task },
});

export const editCard = (columnId, task) => ({
    type: EDIT_CARD,
    payload: { columnId, task },
  });

  export const deleteCard = (columnId, task) => ({
    type: DELETE_CARD,
    payload: { columnId, task },
  });

