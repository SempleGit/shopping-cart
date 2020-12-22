import React from 'react';

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
      <section>
        <h2>Audiobooks</h2>
        <div className="audiobooks">
          <ul>
            <li className="audiobook" id="a1">book1
              <button onClick={() => addToCart("a1")}>Add</button>
            </li>
            <li className="audiobook" id="a2">book2
              <button onClick={() => addToCart("a2")}>Add</button>
            </li>
            <li className="audiobook" id="a3">book3
              <button onClick={() => addToCart("a3")}>Add</button>
            </li>
            <li className="audiobook" id="a4">book4
              <button onClick={() => addToCart("a4")}>Add</button>
            </li>
            <li className="audiobook" id="a5">book5
              <button onClick={() => addToCart("a5")}>Add</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home;