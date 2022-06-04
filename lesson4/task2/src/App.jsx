import React from 'react';
import Clock from './Clock.jsx';

const App = () => (
  <>
    <Clock offset={-5} location={'New York'} />
    <Clock offset={0} location={'London'} />
    <Clock offset={3} location={'Kyiv'} />
  </>
);

export default App;
