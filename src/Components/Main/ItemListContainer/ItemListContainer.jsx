import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from './ItemList/ItemList';
import { Products } from '../../Mock/Products';

const ItemListContainer = (props) => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {

      const getProducts = new Promise((res) => {
          setTimeout(() => {
              res(Products);
          }, 2000);
      });

      getProducts
          .then((data) => {
              setItems(data);
          });
  },
  []); 

  return (
    <div className='itemListContainer'>
        <div className='itemListContainer__saludo'>{props.saludo}</div>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer