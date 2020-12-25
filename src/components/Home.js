import React from 'react';
import Audiobooks from './Audiobooks';

const Home = (props) => {

  const addToCart = (itemToAdd) => {
    props.setCart((items) => {
      return items.has(itemToAdd) ? items.set(itemToAdd, items.get(itemToAdd)+1): items.set(itemToAdd, 1);
    });
  }

  return (
    <div>
      <h1>Shopping Home</h1>
      <Audiobooks addToCart={addToCart} />
    </div>
  )
}

export default Home;