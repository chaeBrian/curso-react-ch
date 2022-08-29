import React from 'react';
import './itemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <main className='itemListContainer'>{props.saludo}</main>
  )
}

export default ItemListContainer