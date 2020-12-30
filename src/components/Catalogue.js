import React from 'react';
import BookDisplay from './BookDisplay';
import './stylesheets/catalogue.css';

const Catalogue = (props) => {

  return (
    <div className='main-container'>
      <h1 className='section-title'>Catalogue</h1>
      <BookDisplay {...props} />
    </div>
  )
}

export default Catalogue;