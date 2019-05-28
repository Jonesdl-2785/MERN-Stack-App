import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Navbar from "./components/navbar.component";
import TaskList from "./components/tasks-list.component";
import EditTask from "./components/edit-task.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
        <Route path="/" exact component={TaskList} />
        <Route path="/edit/:id" exact component={EditTask} />
        <Route path="/create" exact component={CreateTask} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  )
}

export default App;
