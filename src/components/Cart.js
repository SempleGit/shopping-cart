import React from 'react';
import BookLink from './BookLink';
import './stylesheets/cart.css';

const Cart = (props) => {
  
  const adjustQuantity = (itemToAdjust, adjuster) => {
    props.setCart((items) => {
      const shoppingCart = new Map(items);
      const updatedAmount = +shoppingCart.get(itemToAdjust)+adjuster;
      if (updatedAmount > 0)  {
        shoppingCart.set(itemToAdjust, updatedAmount);
       } else {
         shoppingCart.delete(itemToAdjust);
       }
       return shoppingCart;
    });
  }

  const deleteItem = (itemToDelete) => {
    props.setCart((items) => {
      const shoppingCart = new Map(items);
      if (shoppingCart.has(itemToDelete))  {
         shoppingCart.delete(itemToDelete);
       }
       return shoppingCart;
    });
  }

  const handleChange = (e, item) => {
    props.setCart((items) => {
      const shoppingCart = new Map(items);
      if (e.target.value > 0 || e.target.value === "")  {
         shoppingCart.set(item, e.target.value === "" ? e.target.value : +e.target.value);
       } else {
        deleteItem(item);
       }
       return shoppingCart;
    });
    checkCartInput(e);
  }

  const emptyCart = () => {
    props.setCart((items) => {
      const shoppingCart = new Map(items);
      shoppingCart.clear();
      return shoppingCart;
    });
  }

  // Want to delete if less than 1, but want to be able to clear the box and leave an empty string.
  const checkCartInput = e => {
    if(e.target.value === "") {
      e.target.setCustomValidity("Please input a number or remove.")
      e.target.reportValidity()
    } else {
      e.target.setCustomValidity('');
    }
  }

  const cartDisplay = () => {
    const shoppingCart = new Map(props.cartItems);
    const items = Array.from(shoppingCart.keys());
    const display = items.map((item, index) => (
      <div className='cart-item' key={index}>
        <BookLink {...item} />
        <div className='cart-details'>
          <p>Quantity: 
            <button className='adjust-button' onClick={() => adjustQuantity(item, 1)}>+</button>
            <input type='number' onChange={e => handleChange(e, item)} value={shoppingCart.get(item)}></input>
            <button className='adjust-button' onClick={() => adjustQuantity(item, -1)}>-</button>
            <button onClick={() => deleteItem(item)}>Remove</button>
            </p>
        </div>
      </div>
    ));
    return display;
  }

  return (
    <div className='main-container'>
      <h1 className='section-title'>Cart</h1>
      <div className='cart-container'>
        {cartDisplay()}
      </div>
      {props.cartItems.size ? <button className='empty-cart-btn' onClick={emptyCart}>Empty Cart</button> : <p className='empty-cart'>Your shopping cart is empty.</p>}
    </div>
  )
}

export default Cart;