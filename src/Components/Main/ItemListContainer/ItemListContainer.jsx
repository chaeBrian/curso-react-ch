import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from './ItemList/ItemList';
import { Products } from '../../Mock/Products';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  
  const [items, setItems] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    const getProducts = () =>
            new Promise((res, rej) => {
            const filterProd = Products.filter(
                (prod) => prod.category === id);
            setTimeout(() => {
                res(id ? filterProd : Products);
            }, 100);
        });
        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
  }, [id]);

  return (
    <div className='itemListContainer'>
        <div className='itemListContainer__saludo'>{props.saludo}</div>
        <ItemList items={items}/>
    </div>
  )
};

export default ItemListContainer;