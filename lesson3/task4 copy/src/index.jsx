import React from 'react';
import ReactDOM from 'react-dom';
// import './comments.scss';
import './index.scss';
import Comment from './Search.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Sahunya',
  avatarUrl: 'https://avatars.githubusercontent.com/u10002',
};

ReactDOM.render(
  <Comment
    user={userInfo}
    text='Good job'
    date={new Date('2022-05-31T00:35:15.235Z')}
  />,
  rootElement
);
