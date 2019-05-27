import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import taskList from "./components/tasks-list.component";
import Edittask from "./components/edit-task.component";
import Createtask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
        <Route path="/" exact component={taskList} />
        <Route path="/edit/:id" exact component={Edittask} />
        <Route path="/create" exact component={Createtask} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  )
}

export default App;
