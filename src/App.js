import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styling/styles.scss';
import KanbanBoard from './components/KanbanBoard';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';

function Heading() {
  return (
    <h1 className="main-heading">
      KanBan App
    </h1>
  );
}

function Dashboard() {
  return (
    <div className="main-board">
      <Heading />
      <Link to="/kanban"> Kanban </Link>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/kanban" element={
            <div className="main-board">
              <Heading />
              <div className='nav'>
                Kanban&gt; 
                <Link to="/">
                  <span>Dashboard</span>
                </Link>
              </div>
              <KanbanBoard />
            </div>
          } />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
