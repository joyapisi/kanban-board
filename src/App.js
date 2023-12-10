import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styling/styles.scss';
import KanbanBoard from './components/KanbanBoard';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

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
      <Link 
        className="nav-link" 
        to="/kanban"> 
        Kanban 
      </Link>
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
                <Link
                  className="nav-link"  
                  to="/">
                  <span>Kanban&gt;Dashboard</span>
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
