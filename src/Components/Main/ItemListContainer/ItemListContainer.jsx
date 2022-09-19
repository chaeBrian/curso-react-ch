import React, {useEffect, useState} from 'react';
import ItemList from './ItemList/ItemList';
import { Products } from '../../Mock/Products';
import { useParams } from 'react-router-dom';
//Stylesheet
import './itemListContainer.css';

const ItemListContainer = (props) => {
  
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const {id} = useParams()

  useEffect(() => {
    const getProducts = () =>
            new Promise((res, rej) => {
            const filterProd = Products.filter(
                (prod) => prod.category === id);
            setTimeout(() => {
                res(id ? filterProd : Products);
            }, 1000);
        });
        getProducts()
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
        
        return(
            setIsLoading(true)
        )
  }, [id]);

  return (
    <div className='itemListContainer'>
        {
            isLoading
            ?   <div className='spinner'></div>
            :   <>
                    <div className='itemListContainer__saludo'>{props.saludo}</div>
                    <ItemList items={items}/>
                </>
        }
    </div>
  )
};

export default ItemListContainer;