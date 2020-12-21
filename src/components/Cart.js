import React, { useEffect } from 'react';

const Cart = (props) => {

  useEffect(() => {
    document.addEventListener("click", removeFromCart);
    return () => {
      document.removeEventListener("click", removeFromCart);
    };
  });

  const cartDisplay = () => {
    const shoppingCart = {...props.cartItems};
    const items = Object.keys(shoppingCart);
    const display = items.map(item => (
      <li key={item} id={item}>Item: {item} Quantity: {shoppingCart[item]}</li>
    ));
    return display;
  }

  const removeFromCart = (e) => {
    if (e.target.id === '' || e.target.id === 'root') return;   
    const itemToRemove = e.target.id;
    props.setCart((items) => {
      let newItems = {...items};
      if (newItems[itemToRemove] > 1)  {
        newItems = {...newItems, [itemToRemove]: --newItems[itemToRemove] };
       } else {
         delete newItems[itemToRemove];
       }
       return newItems
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