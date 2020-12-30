import React from 'react';
import AudiobookDisplay from './AudiobookDisplay';
import './stylesheets/catalogue.css';

const Catalogue = (props) => {

  return (
    <div className='main-container'>
      <h1 className='section-title'>Catalogue</h1>
      <AudiobookDisplay {...props} />
    </div>
  )
}

export default Catalogue;