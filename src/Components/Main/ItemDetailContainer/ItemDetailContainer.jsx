import React, { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { Products } from '../../Mock/Products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  useEffect(() =>{
    const getProduct = () =>
        new Promise ((res, rej) => {
          const unProducto = Products.find(
            (prod) => prod.id === id)
          setTimeout(() => {
              res(unProducto)
          }, 1000);
        })
        getProduct()
          .then((data) =>{
            setItem(data)
            setIsLoading(false);
          })
          .catch((error) =>{
            console.log(error)
          })

        return(
              setIsLoading(true)
        )
  },[id]);

  return (
      <div>
        {
          isLoading
          ?   <div className='spinner'></div>
          :   <ItemDetail item={item}/>
        }
      </div>
  )
};

export default ItemDetailContainer;


//const id = useParams();
  
//const detailItem = Products.find((dItem) => dItem.id === id);