import React from 'react';
import './item.css';

export const Item = ({item}) => {
  return (
    <div className='item'>
        <img src={item.img} alt="Football Jersey"/>
        <div>
            <p>{item.title}</p>
            <span>${item.price}</span>
        </div>
        <span className='item__span'>{item.description}</span>
        <span className='item__span'>{item.category}</span>
        <span className='item__span'>Stock: {item.stock}</span>
    </div>
  )
}

export default Item;