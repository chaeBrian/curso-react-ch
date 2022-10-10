import React from 'react';
import { Link } from 'react-router-dom';
//Stylesheet
import './item.css';

export const Item = ({item}) => {
  return (
    <Link className='main__item' to={`/detail/${item.id}`}>
          <picture>
            <img src={item.img} alt="Football Jersey"/>
          </picture>
          <div className='main__div--div'>
            <span className='main__span--div'>{item.title}</span>
            <span className='main__span--div'>{item.deets}</span>
            <span className='main__span--div'>${item.price},00</span>
          </div>
    </Link>
  )
}

export default Item;