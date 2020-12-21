import React, { useState } from 'react';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  const [cartItems, setCart] = useState(new Map());
  
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/'><Home cartItems={cartItems} setCart={setCart} /></Route>
        <Route path='/cart'><Cart cartItems={cartItems} setCart={setCart}/></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;