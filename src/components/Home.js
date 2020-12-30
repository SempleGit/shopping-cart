import React from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <Link to='/catalogue' >Enter the world of Hugh Howey</Link>
      </div>
    </div>
  )
}

export default Home;