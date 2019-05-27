import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Username: </label>
            <input type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
         </div>
        <div className="form-group">
          <input type="submit" value="Create New User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
