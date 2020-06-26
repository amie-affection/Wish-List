import React, { Component } from "react";

class Form extends Component {
  state = {
    wish: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("form");
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.elements);
    this.setState({ wish: event.target.value });
  };

  handleChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    console.log("re-render");
    return (
      <form onSubmit={(e) => this.handleSubmit}>
        <input
          placeholder="enter your wish"
          name="wish"
          onChange={this.handleChange}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;
