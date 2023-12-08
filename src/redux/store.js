// import the kanban reducer and configure store
import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './KanbanSlice';

// I amm setting up my store here
const store = configureStore({
  reducer: kanbanReducer,
});

export default store;
