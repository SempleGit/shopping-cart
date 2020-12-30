import React from 'react';
import BookLink from './BookLink';
import { audiobooks } from './helpers';
import './stylesheets/audiobookDisplay.css';

const AudiobookDisplay = (props) => {
 
  const {addToCart} = props;

  const displayBooks = () => {
    return audiobooks.map( (audiobook) => (
      <div className="audiobook-container" key={audiobook.id}>
        <BookLink {...audiobook} />
        <p>By: {audiobook.author}</p>
        <button onClick={() => addToCart(audiobook)}>Add to cart</button>
      </div>
      )
    )
  }

  return (
    <section className="audiobook-section">
      <div className="audiobooks">
        {displayBooks()}
      </div>
    </section>
  )
}

export default AudiobookDisplay;