import React from "react";

class BuggyCounter extends React.Component {
  // state = {
  //     counter: 0
  // };
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 3) {
      throw new Error("I Crashed!");
    }

    return (
      <div className="buggy">
        <h2>This is a buggy counter to test Error Boundary</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Count</button>
      </div>
    );
  }
}

export default BuggyCounter;
