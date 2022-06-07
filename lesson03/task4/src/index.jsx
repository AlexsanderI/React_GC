// 1 make object User = names and date of berth
// 2 make function freeting. put properties name and date in function
// 3. into function subtract date jf berth from Today

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  // console.log('hello');
  firstName: 'Sahunya',
  lastName: 'Yelkin',
  birthDate: new Date('2022-04-06T12:45:11.819Z'),
};

ReactDOM.render(
  <Greeting
    firstName={userInfo.firstName}
    lastName={userInfo.lastName}
    birthDate={userInfo.birthDate}
  />,
  rootElement,
);
