import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UserGreeting from './UserGreeting';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it('render with login', () => {
  act(() => {
    render(<UserGreeting isLoggedIn={true} />, container);
  });
  const button = document.querySelector('h1');
  expect(button.innerHTML).toBe('Hello, user 😎');
});
