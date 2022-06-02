import React, { Component } from 'react';
import './counter.scss';

const counter = 0;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };

    // Bad practis use setIntercal into constructor
    setInterval(() => {
      this.setState({
        // eslint-disable-next-line react/no-direct-mutation-state
        counter: (this.state.counter += 1),
      });

      console.log(counter);
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
