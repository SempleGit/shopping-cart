import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './stylesheets/bookLink.css';

const BookLink = (props) => {
  const { url } = useRouteMatch();
  return (
    <Link className='detail-link' to={`${url}/${props.id}`}>
      <img className='book-image' src={props.img} alt='book cover art'></img>
      <p className='link-details'>{props.title}</p>
    </Link>
  )
}

export default BookLink;