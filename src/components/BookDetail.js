import React from 'react';
import { audiobooks } from './helpers';
import { useParams } from 'react-router-dom';

const BookDetail = (props) => {
  const { id } = useParams();
  const getBook = (bookId) => {
    const bookDetail = audiobooks.find( ({id}) => id === bookId)
    return (
      <div className='book-details'>
        <ul> 
          <li><img src={bookDetail.img} alt={`${bookDetail.title} cover art.`} /></li>
          <li>{bookDetail.title}</li>
          <li>{bookDetail.author}</li>
        </ul>
        <button onClick={() => props.addToCart(bookDetail)}>Add to cart</button>
      </div>
    )
  }

  return (
    <section className='bookDetails'>
      <h1>Book Details</h1>
      <p>{getBook(id)}</p>
    </section>
  )
}

export default BookDetail;