import React from 'react';
import { Link } from 'react-router-dom';

const BookLink = (props) => {
  return (
    <Link className='detail-link' to={`audiobook/${props.id}`}>
      <img className='book-image' src={props.img} alt='book cover art'></img>
      <p>{props.title}</p>
    </Link>
  )
}

export default BookLink;