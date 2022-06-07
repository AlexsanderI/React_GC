// put on the screen className
// put result of the function into className
// rerender resul og function by this.setState and setIntrval evry 1000msc
// make ech city with offset(timeZone)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
