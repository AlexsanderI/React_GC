import React from 'react';
import Clock from './Clock.jsx';

const App = () => (
  <>
    <Clock timeZone={-5} city={'New York'} />

    <Clock timeZone={2} city={'Kyiv'} />
    <Clock timeZone={0} city={'London'} />
  </>
);

export default App;
