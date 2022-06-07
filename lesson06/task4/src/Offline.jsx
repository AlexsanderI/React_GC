import React from 'react';

const Offline = ({ disconnect }) => (
  <button className="status__btn" onClick={disconnect}>
    Reconnect
  </button>
);

export default Offline;
