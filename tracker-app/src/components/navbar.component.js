import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Workout Tracks</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Workouts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Workout Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create New User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
