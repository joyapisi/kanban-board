// I will import the constants for actions here
import {
    ADD_COLUMN,
    ADD_CARD,
    DELETE_COLUMN,
    DELETE_CARD,
    EDIT_COLUMN,
    EDIT_CARD,
  } from "../components/actions";

//set up initial state of column  as an empty array
  const initialState = {
    columns: [],
  };

//use redux reducer to set up and define state
  const kanbanReducer = (state = initialState, action) => {
    switch (action.type) {
      // I will handle all the actions here
      default:
        return state;
    }
  };
  
  export default kanbanReducer;