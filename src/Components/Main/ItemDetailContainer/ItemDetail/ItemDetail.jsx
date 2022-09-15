import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

//Stylesheet
import './itemDetail.css';
import {RiShoppingCart2Line} from 'react-icons/ri'

const ItemDetail = ({item}) => {
  
   const [cantidad, setCantidad] = useState(0);
   const { addItem } = useContext(CartContext);

   const onAdd = (quantity) => {
        setCantidad(quantity);
        addItem( item, quantity)
    };
  return (
    <div className='itemDetail'>
        <img src={item.img} alt={item.title} />
        <div className='itemDetail__div'>
            <span>{item.description}</span>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>{item.color}</p>
            <span>{item.discount}</span>
            {cantidad === 0 
              ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>)
              : (<Link className='toCart' to='/cart'>GO TO <RiShoppingCart2Line /></Link>)}
        </div>
    </div>
  )
}

export default ItemDetail