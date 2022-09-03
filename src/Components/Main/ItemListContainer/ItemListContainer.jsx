import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from './ItemList/ItemList';
import { Products } from '../../Mock/Products';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

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
    <main className='itemListContainer'>
        <div className='itemListContainer__saludo'>{props.saludo}</div>
        <ItemList items={items}/>
        <ItemDetailContainer />
    </main>
  )
}

export default ItemListContainer