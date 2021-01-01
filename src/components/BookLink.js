import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/bookLink.css';

const BookLink = (props) => {
  return (
    <Link className='detail-link' to={`/shopping-cart/catalogue/${props.id}`}>
      <img className='book-image' src={props.img} alt='book cover art'></img>
      <p className='link-details'>{props.title}</p>
    </Link>
  )
}

export default BookLink;