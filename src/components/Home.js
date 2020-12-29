import React from 'react';
import AudiobookDisplay from './AudiobookDisplay';

const Home = (props) => {

  return (
    <div className="main-container">
      <h1>Shopping Home</h1>
      <AudiobookDisplay {...props} />
    </div>
  )
}

export default Home;