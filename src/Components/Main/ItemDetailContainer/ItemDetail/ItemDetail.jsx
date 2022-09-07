import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({item}) => {
   const onAdd = () => {
        console.log('* Agregado al carrito');
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
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail