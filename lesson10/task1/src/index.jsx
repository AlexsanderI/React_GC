import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
// import UserProfile from './UserProfile';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App userId="github" />, rootElement);
