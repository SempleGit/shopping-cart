import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Link to='/catalogue' >
        <div className='entrance-container'>
          Enter the world of Hugh Howey
        </div>
      </Link>
    </div>
  )
}

export default Home;