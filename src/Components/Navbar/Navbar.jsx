import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
//Stylesheet
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
        <NavLink className='nav__link--modified' to='/'>f w c</NavLink>
        <ul className='nav__ul'>
            <li>
              <NavLink className='nav__link' to='/category/home-shirts'>
                home
                </NavLink>
              </li>
            <li>
              <NavLink className='nav__link' to='/category/away-shirts'>
                away
                </NavLink>
              </li>
            <li>
              <NavLink className='nav__link' to='/category/goalkeeper-shirts'>
                goalkeeper
                </NavLink>
              </li>
            <li>
              <NavLink className='nav__link' to='/cart'>
                <CartWidget />
                </NavLink>
              </li>
        </ul>
    </nav>
  )
}

export default Navbar;