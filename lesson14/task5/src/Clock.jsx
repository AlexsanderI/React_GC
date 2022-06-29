// make functional component
// make render
// make useState
// make useEfect
// make status interval and clearInterval
// restart hook []

import React, { useState, useEffect } from 'react';

import moment from 'moment';

const Clock = props => {
  const [time, setTime] = useState({
    date: new Date(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        date: new Date(),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };
  return (
    <>
      <div className="clock">
        <div className="clock__location">{props.location}</div>
        <div className="clock__time">
          {moment(getTimeWithOffset(props.offset)).format('hh:mm:ss A')}
        </div>
      </div>
    </>
  );
};

export default Clock;
