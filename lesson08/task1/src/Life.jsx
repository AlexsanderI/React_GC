import React from 'react';

class Life extends React.Component {
  // first method of "life cycle" (mounting) - constructor()
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  // componentDidMount() make request a remote endpoint,, this is a good place to instantiate the network request.
  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // этот метод принимает условие если эти условия БУДУТ соблюдаются 'true' тогда происходит новый render тоесть обновление (сробатывают до render())
    console.log(nextProps, nextState);
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    // return nextProps.number % 2 === 0;
    return true;
  }

  // // этот метод выполняется после выполнения условия метода shouldComponentUpdate() и после render()
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  // must be put render() method. This method "render()" mandatory for "life cycle"
  // указать метод render() т.к. он является обязательным методом жизненого цикла
  render() {
    console.log('return React element to build DOM');
    return <div className="message">{this.props.number}</div>;
  }
}

export default Life;
