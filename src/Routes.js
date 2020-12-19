import React from 'react';
import Cart from './components/Cart';
import Home from './components/Home';

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>Shopping Cart</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
