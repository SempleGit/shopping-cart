import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/nav.css';

const Nav = () => {
  return (
    <ul className='navbar'>
      <li className='nav-item'>
        <Link to='/' >Home</Link>
      </li>
      <li className='nav-item'>
        <Link to='/cart'>Shopping Cart</Link>
      </li>
    </ul>
  )
}

export default Nav;