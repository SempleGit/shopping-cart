import React from 'react';
import Audiobooks from './Audiobooks';

const Home = (props) => {

  return (
    <div>
      <h1>Shopping Home</h1>
      <Audiobooks {...props} />
    </div>
  )
}

export default Home;