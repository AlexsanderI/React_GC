// make button and check workin with class
// meke click on button tern status 'On/Off'

import React from 'react';

class Toggler extends React.Component {
  constructor(proper) {
    super(proper);
    this.state = {
      statusBtn: false,
    };
  }

  handClick = () => {
    this.setState(state => ({
      statusBtn: !state.statusBtn,
    }));
  };

  render() {
    if (this.state.statusBtn) {
      return (
        <button onClick={this.handClick} className="toggler">
          Off
        </button>
      );
    }
    return (
      <button onClick={this.handClick} className="toggler">
        On
      </button>
    );
  }
}

export default Toggler;
