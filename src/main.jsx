import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateTask } from './components/CreateTask.jsx';
import { TaskLists } from './components/TaskLists.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
        <Routes>
          <Route exact path='/' Component={() => <CreateTask />}/>
          <Route exact path='/task-lists' Component={() => <TaskLists />}/>
        </Routes>
    </Router>
  </React.StrictMode>,
)
