import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
      order: "1",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks mah nigga",
      order: "2",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.order}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe nigga</button>
      </div>
    );
  }
}

export default Message;
