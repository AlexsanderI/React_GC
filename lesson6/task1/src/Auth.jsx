import React from 'react';
import Greeting from './Greeting';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    //   мщжно использовать тернарный оператор
    const button = this.state.isLoggedIn ? (
      <button className="btn logout" onClick={this.handleLogout}>
        Logout
      </button> // усли это да (this.state.isLoggedIn) использовать эту <= кнопку
    ) : (
      <button className="btn login" onClick={this.handleLogin}>
        Login
      </button> // усли это нет (this.state.isLoggedIn) использовать эту <= кнопку
    );

    // либо использовать if вместо тернарного оператора
    // let button;

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handleLogin}>Login</button>;
    // }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
