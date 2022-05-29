{
  /* <div class='greeting'>Hello, React!</div>; */
}

const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

const greetingElem = React.createElement(
  // берем библиотеку React и вызываем метод createElement
  'div',
  { className: 'greeting' }, // настраиваем div даем класс greeting
  'Hello, React!' // перечесляем childs elemtnt
);

ReactDOM.render(greetingElem, rootElement); // библиотека ReactDOM принимает два аршумента
