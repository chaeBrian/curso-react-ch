import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div className='stylesNavbar'>
        <a href='../../index.js'>E-COMMERCE</a>
        <ul>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">productos</a></li>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">contacto</a></li>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">log in</a></li>
            <li><a href='https://www.google.com/'><CartWidget /></a></li>
        </ul>
    </div>
  )
}

export default Navbar;