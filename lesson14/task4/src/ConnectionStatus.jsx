// make functional component
// make useState (initial status online)
// make status connect and disconnect
// make useEfect
// make function og online and offline status
// clear effect
// restart hook []

import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [connect, setConnect] = useState('online');
  useEffect(() => {
    const isOnline = () => {
      setConnect('online');
    };

    const isOffline = () => {
      setConnect('offline');
    };
    window.addEventListener('offline', isOffline);
    window.addEventListener('online', isOnline);
    return () => {
      window.removeEventListener('offline', isOffline);
      window.removeEventListener('online', isOnline);
    };
  }, []);

  if (connect === 'online') {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
