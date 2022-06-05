// make button with color
// make text mouseover/mouseout
import React from 'react';

class ColorPicker extends React.Component {
  constructor(proper) {
    super(proper);
    this.state = {
      text: '',
    };
    this.colorCoral = this.colorCoral.bind(this);
  }

  colorCoral() {
    this.setState({
      text: 'Coral',
    });
  }

  colorAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };

  colorBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };

  reset = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div className="picker">
        <div className="picker__title">{this.state.text}</div>
        <button
          className="picker__button picker__button_coral"
          onMouseOver={this.colorCoral}
          onMouseOut={this.reset}
        ></button>
        <button
          className="picker__button picker__button_aqua"
          onMouseOver={this.colorAqua}
          onMouseOut={this.reset}
        ></button>
        <button
          className="picker__button picker__button_bisque"
          onMouseOver={this.colorBisque}
          onMouseOut={this.reset}
        ></button>
      </div>
    );
  }
}
// const ColorPicker = () => (
//   <div className="picker">
//     <div className="picker__title">Yi</div>
//     {/* <div className="clock__location">{this.props.location}</div> */}
//     <button className="picker__button picker__button_coral">Off</button>
//   </div>
// );

export default ColorPicker;
