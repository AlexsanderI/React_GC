// make class ConnectionStatus
// make render for check
// make state online
// if online extend online status else offline sttus by rendor
// make metods online and ofline status
// use this metods in components

import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    online: true,
  };

  componentDidMount() {
    window.addEventListener('offline', this.isOffline);
    window.addEventListener('online', this.isOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.isOffline);
    window.removeEventListener('online', this.isOnline);
  }

  isOnline = () => {
    this.setState({
      online: true,
    });
  };

  isOffline = () => {
    this.setState({
      online: false,
    });
  };

  render() {
    if (this.state.online) {
      return <div className="status">online</div>;
    }
    return <div className="status status_offline">offline</div>;
  }
}
export default ConnectionStatus;
