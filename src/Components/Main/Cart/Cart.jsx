import React, { useContext } from 'react';
import {CartContext} from '../../../Context/CartContext';
import {TbShirtOff} from 'react-icons/tb'
import { Link } from 'react-router-dom';
//Stylesheet
import './cart.css';

const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return <div className='emptyCart'>
                    <p>Your Cart is Empty</p>
                    <span>Looks like you haven't added <br></br> anything to your cart yet</span>
                    <Link className='emptyCart__link' to='/'>Shop Now</Link>
                </div>;
    }else {
        return (

          <div className='cartContainer'>
              <div className='cartContainer__child'>
                <div className='cartContainer__child-top'>
                    <p>Your Order</p>
                    <button onClick={clear} class="cartContainer__child-bttn">
                        <span class="text">Remove All</span>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path 
                                d="M24 20.188l-8.315-8.209
                                8.2-8.282-3.697-3.697-8.212
                                8.318-8.31-8.203-3.666 3.666
                                8.321 8.24-8.206 8.313 3.666
                                    3.666 8.237-8.318 8.285 8.203z">
                            </path></svg>
                        </span>
                    </button>
                </div>
                <div className='cartContainer__childContainer'>
                  {
                      cart.map((prod) =>(
                          <div key={prod.id} className='cartContainer__child-prods'>
                              <img src={prod.img} alt={prod.title} />
                              <div className='cartContainer__child-prods-container'>
                                <h3>{prod.title}</h3>
                                <p>{prod.description}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {prod.color}
                                </p>
                                <div className='cartContainer__child-prods-container_qty'>
                                  <span>$ {prod.price}</span>
                                  <span>x</span>
                                  <span>0{prod.quantity}</span>
                                </div>
                                <button onClick={ () => removeItem(prod.id) }>
                                    <TbShirtOff />
                                </button>
                              </div>
                          </div>
                      ))
                  }
                </div>
              </div>
              <div className='cartContainer__totalPrice'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <p>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;
                    {totalPrice()},00</p>
              </div>
          </div>

        )
    };
};

export default Cart