import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='stylesNavbar'>
        <span>E-COMMERCE</span>
        <ul>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">productos</a></li>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">contacto</a></li>
            <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">log in</a></li>
        </ul>
    </div>
  )
}

export default Navbar;