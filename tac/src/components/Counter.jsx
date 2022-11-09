import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  addVal() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback val:", this.state.count);
      }
    );
  }
  minVal() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log("Callback val:", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={() => this.addVal()}>Increment</button>
        <button onClick={() => this.minVal()}>decrement</button>
      </div>
    );
  }
}

export default Counter;
