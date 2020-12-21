import React, { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    document.addEventListener("click", addToCart);
    return () => {
      document.removeEventListener("click", addToCart);
    };
  });

  const addToCart = (e) => {
    if (e.target.id === '' || e.target.id === 'root') return;   
    const itemToAdd = e.target.id;
    props.setCart((items) => {
      const newItems = {...items};
      return newItems[itemToAdd] ? {...newItems, [itemToAdd]: ++newItems[itemToAdd]} : {...newItems, [itemToAdd]: 1}
    });
  }

  return (
    <div>
      <h1>Shopping Home</h1>
      <section>
        <h2>Audiobooks</h2>
        <div className="audiobooks">
          <ul>
            <li className="audiobook" id="a1">book1</li>
            <li className="audiobook" id="a2">book2</li>
            <li className="audiobook" id="a3">book3</li>
            <li className="audiobook" id="a4">book4</li>
            <li className="audiobook" id="a5">book5</li>
          </ul>
        </div>
      </section>
      {/* 1. style items.
          2. add item to cart
          3. remove item from cart*/}
    </div>
  )
}

export default Home;