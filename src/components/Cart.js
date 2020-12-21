import React, { useEffect } from 'react';

const Cart = (props) => {

  useEffect(() => {
    document.addEventListener("click", reduceQuantity);
    return () => {
      document.removeEventListener("click", reduceQuantity);
    };
  });

  const cartDisplay = () => {
    const shoppingCart = new Map(props.cartItems);
    const items = Array.from(shoppingCart.keys());
    const display = items.map(item => (
      <li key={item} id={item}>Item: {item} Quantity: {shoppingCart.get(item)}</li>
    ));
    return display;
  }

  const reduceQuantity = (e) => {
    if (e.target.id === '' || e.target.id === 'root') return;   
    const itemToRemove = e.target.id;
    props.setCart((items) => {
      const shoppingCart = new Map(items);
      if (shoppingCart.get(itemToRemove) > 1)  {
        shoppingCart.set(itemToRemove, shoppingCart.get(itemToRemove)-1);
       } else {
         shoppingCart.delete(itemToRemove);
       }
       return shoppingCart;
    });
  }

  cartDisplay();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartDisplay()}
      </ul>
    </div>
  )
}

export default Cart;