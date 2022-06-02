import React from 'react';
import Counter from './Counter.jsx';

const App = () => (
  <>
    <Counter start={10} interval={1000 * 120} />
    <Counter start={10} interval={1000 * 60} />
    <Counter start={10} interval={1000} />
  </>
);

export default App;
