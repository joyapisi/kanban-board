import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

//manage state using reducers
const store = configureStore({
    reducer: {
        cards: cardsListReducer,
      },
//   reducer: rootReducer,
//   middleware: [thunk],
});

//export store and persistoer seperately
export default store;