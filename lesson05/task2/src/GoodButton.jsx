import React from 'react';

class GoodButton extends React.Component {
  // можем писать Component в имрорте надо указать import React, {Component} from 'react';
  handleClick(e) {
    console.log(e.target.textContent);
    console.log(e);
    alert(e.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
