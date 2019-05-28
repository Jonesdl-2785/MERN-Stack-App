import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Task = props => (
  <tr>
    <td>{props.task.username}</td>
    <td>{props.task.description}</td>
    <td>{props.task.duration}</td>
    <td>{props.task.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.task._id}>Edit</Link> | <a href="#/delete" onClick={() => { props.deleteTask(props.task._id) }}>Delete</a>
    </td>
  </tr>
)

export default class TaskList extends Component {
  constructor(props) {
    super(props)

    this.deleteTask = this.deleteTask.bind(this)

    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/'  )
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/tasks/'+id  )
      .then(response => {
        console.log(response.data)
      });

      this.setState({
        tasks: this.state.tasks.filter(el => el.id !== id)
      })
  }

  taskList() {
    return this.state.tasks.map(currenttask=>{
      return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>;

    })
  }

  render() {
    return (
      <div>
        <h3>Tasks Log</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              { this.taskList() }
            </tbody>
          </table>
      </div>
    )
  }
}
