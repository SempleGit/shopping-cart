import React from 'react';
import BookLink from './BookLink';
import { books } from './helpers';
import './stylesheets/bookDisplay.css';

const BookDisplay = (props) => {
 
  const {addToCart} = props;

  const displayBooks = () => {
    return books.map( (book) => (
      <div className="book-container" key={book.id}>
        <BookLink {...book} />
        <p>By: {book.author}</p>
        <button onClick={() => addToCart(book)}>Add to cart</button>
      </div>
      )
    )
  }

  return (
    <section className="book-section">
      <div className="books">
        {displayBooks()}
      </div>
    </section>
  )
}

export default BookDisplay;