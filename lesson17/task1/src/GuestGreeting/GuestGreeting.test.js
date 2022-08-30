import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import GuestGreeting from './GuestGreeting';

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
    render(<GuestGreeting isLoggedIn={true} />, container);
  });
  const button = document.querySelector('h1');
  expect(button.innerHTML).toBe('Hi stranger. Please login 🚀');
});
