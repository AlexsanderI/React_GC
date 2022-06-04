import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = (color, e) => {
    console.log(e);
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          onClick={this.setBodyColor.bind(this, RED)}
          className="colors__button"
        />
        <button
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
          className="colors__button"
        />
        <button
          style={{ backgroundColor: BLUE }}
          onClick={e => this.setBodyColor(BLUE, e)}
          className="colors__button"
        />
      </div>
    );
  }
}

export default Colors;
