import React from 'react';

const Mailbox = ({ unreadMesasges }) => (
  <div className="mailbox">
    <span className="mailbox__text">Messages</span>
    {unreadMesasges.length > 0 && <span className="mailbox__count">{unreadMesasges.length}</span>}
  </div>
);

export default Mailbox;
