import React from 'react';
import { audiobooks } from './helpers';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section className='bookDetails'>
      <h1>Book Details</h1>
    </section>
  )
}

export default BookDetail;