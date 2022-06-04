import React from 'react';
import Clock from './clock.jsx';

const App = () => (
  <>
    <Clock timeZone={-5} city={'New York'} />
    <Clock timeZone={0} city={'London'} />
    <Clock timeZone={3} city={'Kiev'} />
  </>
);

export default App;
