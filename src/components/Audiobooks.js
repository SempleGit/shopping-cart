import React from 'react';
import BookLink from './BookLink';
import { audiobooks } from './helpers';

const Audiobooks = (props) => {
 
  const {addToCart} = props;

  const displayBooks = () => {
    return audiobooks.map( (audiobook) => (
      <div className="audiobook-container" key={audiobook.id}>
        <ul className="audiobookUl">
          <BookLink {...audiobook} />
          <li className="audiobookTitle">{audiobook.author}</li>
        </ul>
        <button onClick={() => addToCart(audiobook)}>Add</button>
      </div>
      )
    )
  }

  return (
    <section className="audiobooks">
      <h2>Audiobooks</h2>
      {displayBooks()}
    </section>
  )
}

export default Audiobooks;