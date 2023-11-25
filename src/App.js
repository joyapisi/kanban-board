import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styling/styles.scss"; // Make sure the file name is correct
import KanbanBoard from './components/KanbanBoard';
import Column from './components/Column';
import Card from './components/Card';
import CardInputForm from './components/CardInputForm';

function App() {
  return (
    <Provider store={store}>
      <div className="kanban-board">
        <h1 className="main-heading">
          KanBan App
        </h1>
        <KanbanBoard>
          <Column>
            <Card>
              <CardInputForm />
            </Card>
          </Column>
        </KanbanBoard>
      </div>
    </Provider>
  );
}

export default App;
