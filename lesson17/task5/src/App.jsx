import React from 'react';
import Check from './Check';

const App = () => {
  const name = undefined;
  return (
    <div>
      Hello, React!
      <Check name={name} />
    </div>
  );
};

export default App;
