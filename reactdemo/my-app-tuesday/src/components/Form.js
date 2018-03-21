import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  handleInputChange = (event) => {
    const {name, value} = event.target //name === event.target.name;
    this.setState({
      [name]: value
    });

  }
  handleSubmitForm = (event) => {
    event.preventDefault();
    alert(`Your username is: ${this.state.username} and your password is ${this.state.password}`);
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button className="btn btn-danger"             onClick={this.handleSubmitForm}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
