import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
//Stylesheet
import './navbar.css';

const Navbar = () => {
  return (
    <div className='stylesNavbar'>
        <Link className='stylesNavbar__home' to='/'>WORLD CUP JERSEYS</Link>
        <ul>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/home-jerseys'>
                home jerseys
                </Link>
              </li>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/away-jerseys'>
                away jerseys
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