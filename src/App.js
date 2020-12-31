import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Cart from './components/Cart';
import BookDetail from './components/BookDetail';
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

function App() {
  const { url } = useRouteMatch;
  const [cartItems, setCart] = useState(new Map());

  
  const addToCart = (itemToAdd) => {
    setCart((items) => {
      return items.has(itemToAdd) ? items.set(itemToAdd, items.get(itemToAdd)+1): items.set(itemToAdd, 1);
    });
  }

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path = {`${url}/`}><Home /></Route>
        <Route exact path={`${url}/catalogue`}><Catalogue cartItems={cartItems} addToCart={addToCart} /></Route>
        <Route path={`${url}/cart`}><Cart cartItems={cartItems} setCart={setCart} /></Route>
        <Route path={`${url}/catalogue/:id`}><BookDetail addToCart={addToCart} /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;