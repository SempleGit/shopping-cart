import React from 'react';
import BookLink from './BookLink';
import { audiobooks } from './helpers';
import './stylesheets/audiobookDisplay.css';

const AudiobookDisplay = (props) => {
 
  const {addToCart} = props;

  const displayBooks = () => {
    return audiobooks.map( (audiobook) => (
      <div className="audiobook-container" key={audiobook.id}>
        <p><BookLink {...audiobook} /></p>
        <p>By: {audiobook.author}</p>
        <button onClick={() => addToCart(audiobook)}>Add to cart</button>
      </div>
      )
    )
  }

  return (
    <section className="audiobook-section">
      <h2>Audiobooks</h2>
      <div className="audiobooks">
      {displayBooks()}
        </div>
    </section>
  )
}

export default AudiobookDisplay;