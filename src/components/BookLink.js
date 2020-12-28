import React from 'react';
import { Link } from 'react-router-dom';

const BookLink = (props) => {
  return (
    <Link className='detail-link' to={`audiobook/${props.id}`}>
      {props.title}
    </Link>
  )
}

export default BookLink;