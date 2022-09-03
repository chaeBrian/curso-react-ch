import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({detailItem}) => {
   const onAdd = () => {
        console.log('* Agregado al carrito');
    };
  return (
    <div className='itemDetail'>
        <img src={detailItem.img} alt="" />
        <div className='itemDetail__div'>
            <span>{detailItem.category}</span>
            <h3>{detailItem.title}</h3>
            <p>${detailItem.price}</p>
            <p>{detailItem.color}</p>
            <span>{detailItem.discount}</span>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail