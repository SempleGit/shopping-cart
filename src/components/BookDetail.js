import React from 'react';
import { audiobooks } from './helpers';
import { useParams } from 'react-router-dom';
import './stylesheets/bookDetail.css';

const BookDetail = (props) => {
  const { id } = useParams();
  const getBook = (bookId) => {
    const bookDetail = audiobooks.find( ({id}) => id === bookId)
    return (
      <div className='audiobook'>
          <img src={bookDetail.img} alt={`${bookDetail.title} cover art.`} />
          <h3>{bookDetail.title}</h3>
          <p>By: {bookDetail.author}</p>
          <h4>Publisher's Summary</h4>
          <p className='summary'>{bookDetail.summary}</p>
        <button onClick={() => props.addToCart(bookDetail)}>Add to cart</button>
      </div>
    )
  }

  return (
    <section className='book-details'>
      <h1>Book Details</h1>
      <p>{getBook(id)}</p>
    </section>
  )
}

export default BookDetail;