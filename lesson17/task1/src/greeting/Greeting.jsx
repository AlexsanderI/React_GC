import React from 'react';
import UserGreeting from '../UserGreeting/UserGreeting';
import GuestGreeting from '../GuestGreeting/GuestGreeting';

const Greeting = props => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
