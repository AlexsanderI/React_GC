import React from 'react';
import Expand from './Expand';

const App = () => (
  <div className="app">
    <Expand title="Some title">
      <div className="expand__content">
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a className.
        </p>
      </div>
    </Expand>
  </div>
);
export default App;
