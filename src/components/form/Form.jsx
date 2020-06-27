import React, { Component } from "react";
import shortID from "shortid";
import Input from "../input/Input";
import config from "../../inputConfig.json";
console.log(config);

console.log(Object.keys(config));

const initialState = {
  [config.wish.name]: "",
  [config.description.name]: "",
};

class Form extends Component {
  state = initialState;

  handleSubmit = (event) => {
    event.preventDefault();

    const wish = {
      ...this.state,
      date: new Date().toDateString(),
      id: shortID(),
    };
    if (this.state.wish.trim()) {
      this.props.getWishes(wish);
    }
    this.setState(initialState);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    console.log("re-render");
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          {...config.wish}
          onChange={this.handleChange}
          value={this.state.wish}
        />
        <Input
          {...config.description}
          onChange={this.handleChange}
          value={this.state.description}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;
