import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
//Stylesheet
import './navbar.css';

const Navbar = () => {
  return (
    <div className='stylesNavbar'>
        <Link className='stylesNavbar__home' to='/'>WORLD CUP SHIRTS</Link>
        <ul>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/home-shirts'>
                home shirts
                </Link>
              </li>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/away-shirts'>
                away shirts
                </Link>
              </li>
            <li>
              <Link className='stylesNavbar__ul-link' to='/category/goalkeeper-shirts'>
                goalkeeper shirts
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