import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='stylesNavbar'>
        <Link className='stylesNavbar__home' to='/'>E-COMMERCE</Link>
        <ul>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/home-jerseys'>
                Home Jerseys
                </Link>
              </li>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/away-jerseys'>
                Away Jerseys
                </Link>
              </li>
            <li>
              <Link className='stylesNavbar__ul-link' to='/cart'>
                <CartWidget />
                </Link>
              </li>
        </ul>
    </div>
  )
}

export default Navbar;