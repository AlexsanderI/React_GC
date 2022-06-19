// make statick page
// hide expand__contetnt
// show expand__contetnt

import React from 'react';
import App from './App';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">Some title</span>
            <button className="expand__toggle-btn" onClick={this.toggle}>
              {visible ? '⬆️' : '⬇️'}
            </button>
          </div>
          {this.state.visible && <App></App>}
        </div>
      </div>
    );
  }
}

export default Expand;
