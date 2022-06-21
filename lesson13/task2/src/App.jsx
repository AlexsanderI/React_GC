import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <Products />
        </Route>
        <Route>
          <Contacts />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
