import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Link to='/catalogue' >
        <div className='entrance-container'>
          <p>The world of Hugh Howey</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;