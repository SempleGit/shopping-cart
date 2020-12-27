import React from 'react';
import { Link } from 'react-router-dom';

const BookLink = (props) => {
  return (
    <Link to={`audiobook/${props.id}`}>
      <div>{props.title}</div>
    </Link>
  )
}

export default BookLink;