import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "nice",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.changeMessage}>CLICK ME!!</button>
      </div>
    );
  }
}

export default EventBind;
