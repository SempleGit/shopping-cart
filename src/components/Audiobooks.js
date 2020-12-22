import React from 'react';

const Audiobooks = (props) => {
  const {addToCart} = props;
  
  return (
    <section className="audiobooks">
      <h2>Audiobooks</h2>
      <div >
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
  )
}

export default Audiobooks;