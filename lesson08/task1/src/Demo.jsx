// 0. create project
// 1. make layout
// 2. divade into components
// 3. static react version
// 4. declare state (what, were) and props
// 5. write logic

import React from 'react';
import Life from './Life';

class Demo extends React.Component {
  state = {
    number: Math.round(Math.random() * 1000),
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  update = () => {
    this.setState({
      number: Math.round(Math.random() * 1000),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
          <button className="btn" onClick={this.update}>
            Update
          </button>
        </div>
        {this.state.visible && <Life number={this.state.number} />}
      </div>
    );
  }
}

export default Demo;
