import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Home</h1>
      <Link to='/catalogue' >View Catalogue</Link>
    </div>
  )
}

export default Home;