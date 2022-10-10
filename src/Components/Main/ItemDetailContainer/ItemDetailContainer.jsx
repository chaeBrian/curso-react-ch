import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
//import { Products } from "../../Mock/Products";
import { useParams } from "react-router-dom";
//Firebase
import { dataBase } from '../../../FirebaseConfig/FirebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
        setIsLoading(true)
    const itemCollection = collection( dataBase, 'shirts' );
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setItem({
        id: res.id,
        ...res.data()
      });
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() =>{
        setIsLoading(false);
    }) 
  }, [id]);

  return (
    <>
      {isLoading ? <div className="loader"></div> : <ItemDetail item={item} />}
    </>
  );
};

export default ItemDetailContainer;

/* const getProduct = () =>
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
) */

//UEFCT FIREBASE

/* setIsLoading(true)
const itemCollection = collection( dataBase, 'jerseys' );
const ref = doc(itemCollection, id);
getDoc(ref).then((res) => {
  setItem({
    id: res.id,
    ...res.data()
  });
})
.catch((error) =>{
    console.log(error);
})
.finally(() =>{
    setIsLoading(false);
}) */

//const id = useParams();

//const detailItem = Products.find((dItem) => dItem.id === id);
