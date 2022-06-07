import React from 'react';

const Mailbox = ({ unreadMessasges }) => (
  <div className="mailbox">
    <span className="mailbox__text">Messages</span>
    {unreadMessasges.length > 0 && <span className="mailbox__count">{unreadMessasges.length}</span>}
  </div>
);

export default Mailbox;
