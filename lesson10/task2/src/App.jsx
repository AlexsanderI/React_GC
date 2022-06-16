import React from 'react';
import Profile from './Profile';
import ShopingCart from './ShopingCart';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'Alex',
      lastName: 'Alexander',
    },
  };

  handelChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShopingCart userData={userData} />
          <Profile userData={userData} handelChange={this.handelChange} />
        </main>
      </div>
    );
  }
}

export default App;
