import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styling/styles.scss'; // Make sure the file name is correct
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <Provider store={store}>
      <div className="main-board">
        <h1 className="main-heading">
          KanBan App
        </h1>
        <KanbanBoard />
      </div>
    </Provider>
  );
}

export default App;
