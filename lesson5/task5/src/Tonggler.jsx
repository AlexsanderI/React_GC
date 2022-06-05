// make button and check workin with class
// meke click on button tern text 'On/Off'

import React from 'react';

class Tonggler extends React.Component {
  constructor(proper) {
    super(proper);
    this.state = {
      counter: 'Off',
    };
  }

  reset = () => {
    this.setState({
      counter: 'On',
    });
  };

  render() {
    return (
      <button onClick={this.reset} className="toggler">
        {this.state.counter}
      </button>
    );
  }
}

export default Tonggler;
