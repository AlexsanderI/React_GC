// 0. create project
// 1. make layout
// 2. divade into components
// 3. static react version
// 4. declare state (what, were) and props
// 5. write logic

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<ConnectionStatus />, rootElement);
