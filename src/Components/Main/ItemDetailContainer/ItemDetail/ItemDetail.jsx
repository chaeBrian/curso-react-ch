import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';

//Stylesheet
import './itemDetail.css';
import {TbShirt} from 'react-icons/tb'

const ItemDetail = ({item}) => {
  
   const [cantidad, setCantidad] = useState(0);
   const { addItem, quantitySave } = useContext(CartContext);

   const onAdd = (quantity) => {
        setCantidad(quantity);
        addItem( item, quantity)
    };

    const quantity = quantitySave(item.id);
    
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
              ? (<ItemCount stock={item.stock} initial={quantity} onAdd={onAdd}/>)
              : (<Link className='toCart' to='/cart'><p>GO TO</p><TbShirt className='itemDetail__div-icon' /></Link>)}
        </div>
    </div>
  )
}

export default ItemDetail