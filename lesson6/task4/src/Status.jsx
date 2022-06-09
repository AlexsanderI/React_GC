import React from 'react';
import Online from './Online';
import Offline from './Offline';
import Notice from './Notice';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
      isOfline: false,
    };
  }

  handOnline = () => {
    this.setState({
      isOnline: false,
    });
  };

  handOffline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    let button;
    if (this.state.isOnline) {
      button = <Online connect={this.handOnline} />;
    } else {
      button = <Offline disconnect={this.handOffline} />;
    }
    return (
      <div className="status">
        <Notice isOnline={this.state.isOnline} />
        {button}
      </div>
    );
  }
}

export default Status;
