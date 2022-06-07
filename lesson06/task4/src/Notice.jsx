import React from 'react';

const Notice = props => {
  if (props.isOnline) {
    return <span className="status__text">Online</span>;
  }
  return <span className="status__text">Offline</span>;
};

export default Notice;
