import React, { useContext } from 'react';
import {CartContext} from '../../../Context/CartContext'
import './cart.css';

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);

  return (
    <div className='cartContainer'>
        {
            cart.map((prod) =>(
                <div key={prod.id} className='cartContainer__prods'>
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.quantity}</h3>
                    <h3>{prod.price}</h3>
                    <button onClick={ () => removeItem(prod.id) }>Delete</button>
                </div>
            ))
        }
        <button onClick={clear}>Clear Cart</button>
    </div>
  )
}

export default Cart