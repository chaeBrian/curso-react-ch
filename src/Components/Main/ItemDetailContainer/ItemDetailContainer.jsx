import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { Products } from '../../Mock/Products';

const ItemDetailContainer = () => {
    const detailItem = Products.find((dItem) => dItem.id === 2);
  return (
      <ItemDetail detailItem={detailItem}/>
  )
}

export default ItemDetailContainer