// make statick page
// hide expand__contetnt
// show expand__contetnt

import React from 'react';

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
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggle}>
            {visible ? '⬆️' : '⬇️'}
            {/* console.log(); */}
          </button>
        </div>
        {this.state.visible ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Expand;
