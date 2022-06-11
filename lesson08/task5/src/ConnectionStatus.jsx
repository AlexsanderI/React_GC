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
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  }

  isOnline = () => {
    this.setState({
      online: false,
    });
  };

  isOffline = () => {
    this.setState({
      online: true,
    });
  };

  render() {
    if (this.state.online) {
      return <div className="status">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}
export default ConnectionStatus;
