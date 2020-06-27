import React, { Component } from "react";
import Form from "./components/form/Form";
import WishList from "./components/wishList/WishList";

class App extends Component {
  state = {
    wishes: [],
  };

  getWishes = (wish) => {
    console.log(wish);
    this.setState((prev) => ({ wishes: [...prev.wishes, wish] }));
  };

  deleteWish = (id) => {
    this.setState((prev) => ({
      wishes: prev.wishes.filter((wish) => wish.id !== id),
    }));
  };

  render() {
    const { wishes } = this.state;
    return (
      <>
        <Form getWishes={this.getWishes} />
        <WishList wishes={wishes} deleteWish={this.deleteWish} />
      </>
    );
  }
}

export default App;
