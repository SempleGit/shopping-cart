import React from 'react';
import Audiobooks from '../components/Audiobooks';

const Home = (props) => {

  const addToCart = (itemToAdd) => {
    props.setCart((items) => {
      const newItems = new Map(items);
      return newItems.has(itemToAdd) ? newItems.set(itemToAdd, newItems.get(itemToAdd)+1): newItems.set(itemToAdd, 1);
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