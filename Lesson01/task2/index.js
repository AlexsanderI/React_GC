const rootElement = document.querySelector('#root');

// const renderGreeting = (elem) => {
//   const containerElem = document.createElement('div');
//   containerElem.classList.add('greeting');

//   const titleElem = document.createElement('h1');
//   titleElem.classList.add('greeting__title');
//   titleElem.textContent = 'Hello, world!';

//   const textElem = document.createElement('p');
//   textElem.classList.add('greeting__text');
//   textElem.textContent = "I'm learning React";

//   containerElem.append(titleElem, textElem);

//   elem.append(containerElem);
// };

// renderGreeting(rootElement);

// eslint-disable-next-line no-undef
const element = React.createElement(
  'div',
  { className: 'greeting' },
  // / создаем child element 'greeting__title' для кдасса 'greating'
  // eslint-disable-next-line no-undef
  React.createElement('div', { className: 'greeting__title' }, 'Hello, world!'),
  // / создаем child element 'greeting__text' для кдасса 'greating'
  // eslint-disable-next-line no-undef
  React.createElement('div', { className: 'greeting__text' }, "I'm learning React"),
);

// eslint-disable-next-line no-undef
ReactDOM.render(element, rootElement);
