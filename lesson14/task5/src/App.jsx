import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="block">
        <button onClick={this.toggle}>Toggle</button>
        <div className="board">
          {this.state.visible && (
            <>
              <Clock location={'New York'} offset={-5} />
              <Clock location={'London'} offset={0} />
              <Clock location={'Kyiv'} offset={3} />
            </>
          )}
        </div>
      </div>
    );
  }
}
export default App;
// const App = () => (

// );
