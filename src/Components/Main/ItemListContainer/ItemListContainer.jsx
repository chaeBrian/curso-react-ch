import React, {useEffect, useState} from 'react';
import ItemList from './ItemList/ItemList'
import ClockApp from '../../Clock/ClockApp.jsx';
import { useParams } from 'react-router-dom';
//import { Products } from '../../Mock/Products';
//Stylesheet
import './itemListContainer.css';
//Firebase
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../../FirebaseConfig/FirebaseConfig';

const ItemListContainer = (props) => {
    
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    const itemCollection = collection( dataBase, 'shirts' );
    const ref = id
        ? query(itemCollection, where('category', '==', id))
        : itemCollection;

    getDocs( ref )
        .then((res) => {
            const shirts = res.docs.map((shirt) => {
                return {
                    id: shirt.id,
                    ...shirt.data()
                };
            });
            setItems(shirts)
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setIsLoading(false);
        })
  }, [id]);


  return (
    <section className='main__section'>
        <div className={props.cName}>
            <h1 className='main__h1--section'>FOOTBALL WORLD CUP</h1>
            <ClockApp />
        </div>
        {
            isLoading
            ?   <div className='loader'></div>
            :   <>
                    <ItemList items={items}/>
                </>
        }
    </section>
  )
};

export default ItemListContainer;

/*

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
*/


//UEFCT FIREBASE

/* setIsLoading(true);
const itemCollection = collection( dataBase, 'jerseys' );
const ref = id
    /*? query(itemCollection, where('category', '==', id))
    : itemCollection;

getDocs( ref )
.then((res) => {
    const shirts = res.docs.map((shirt) => {
        return {
            id: shirt.id,
            ...shirt.data()
        };
    });
    setItems(shirts)
})
.catch((error) =>{
    console.log(error);
})
.finally(() =>{
    setIsLoading(false);
}) */