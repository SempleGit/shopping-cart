import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Link to='/catalogue' >
        <div className='entrance-container'>
          <p className='entrance-detail'>The writings</p>
          <p className='entrance-detail'>of</p> 
          <p className='entrance-detail'>Hugh Howey</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;