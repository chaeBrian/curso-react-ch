import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
//Stylesheet
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link className='nav__link--modified' to='/'>f w c</Link>
        <ul className='nav__ul'>
            <li>
              <Link className='nav__link' to='/category/home-shirts'>
                home
                </Link>
              </li>
            <li>
              <Link className='nav__link' to='/category/away-shirts'>
                away
                </Link>
              </li>
            <li>
              <Link className='nav__link' to='/category/goalkeeper-shirts'>
                goalkeeper
                </Link>
              </li>
            <li>
              <Link className='nav__link' to='/cart'>
                <CartWidget />
                </Link>
              </li>
        </ul>
    </nav>
  )
}

export default Navbar;