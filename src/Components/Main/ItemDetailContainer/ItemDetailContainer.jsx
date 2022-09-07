import React from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { Products } from '../../Mock/Products';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([]);

  const {id} = useParams();

  useEffect(() =>{
    const getProduct = () =>
        new Promise ((res, rej) => {
          const unProducto = Products.find(
            (prod) => prod.id === id)
          setTimeout(() => {
              res(unProducto)
          }, 100);
        })
        getProduct()
          .then((data) =>{
            setItem(data)
          })
          .catch((error) =>{
            console.log(error)
          })
  },[id]);

  return (
      <ItemDetail item={item}/>
  )
};

export default ItemDetailContainer;


//const id = useParams();
  
//const detailItem = Products.find((dItem) => dItem.id === id);