import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
  return (
    <Link className='item' to={`/detail/${item.id}`}>
          <img src={item.img} alt="Football Jersey"/>
          <div>
              <p>{item.title}</p>
              <span>${item.price}</span>
          </div>
          <span className='item__span'>{item.description}</span>
          <span className='item__span'>{item.category}</span>
          <span className='item__span'>Stock: {item.stock}</span>
    </Link>
  )
}

export default Item;