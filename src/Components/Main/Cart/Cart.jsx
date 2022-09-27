import React, { useContext, useState } from 'react';
import {CartContext} from '../../../Context/CartContext';
import {TbShirtOff} from 'react-icons/tb'
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
//Stylesheet
import './Cart.css';

const Cart = () => {
    
    const [buyId, setBuyId] = useState('');
    const { cart, clear, removeShirt, totalPrice } = useContext(CartContext);
    const total = totalPrice();

    const handleId = (id) =>{
        setBuyId(id);
    };

    if (buyId) {
        return (
            <div className='-idCart'>
                <h4 className='_idCart__title'>Thank you for shopping here.</h4>
                <p className='_idCart__p'>Your purchase ID is: <span>{buyId}</span><br/>check your email for more information.</p>
                <Link className='_emptyCartCtr__bttn'to='/'>Back to Store</Link>
            </div>
        )
    };

    if (cart.length === 0) {
        return <div className='-emptyCartCtr'>
                    <h4 className='_emptyCartCtr__title'>Your Cart is Empty</h4>
                    <p className='_emptyCartCtr__p'>Looks like you haven't added <br></br> anything to your cart yet</p>
                    <Link className='_emptyCartCtr__bttn' to='/'>Shop Now</Link>
                </div>;
    }else {
        return (

          <div className='-cartCtr'>
              <div className='_cartCtr__leftD'>
                <div className='_cartCtr__leftD-top'>
                    <span>Your Order</span>
                    <button onClick={clear} class="_leftD-top__bttn">
                        <span class="_leftD-top__bttn-text">Remove All</span>
                        <span class="_leftD-top__bttn-icon">
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
                <div className='_cartCtr__leftD-bot'>
                  {
                      cart.map((prod) =>(
                          <div key={prod.id} className='_leftD-bot__itemCtr'>
                                <img src={prod.img} alt={prod.title} />
                                <div className='_leftD-bot__itemCtr-item'>
                                    <h3>{prod.title}</h3>
                                    <p>{prod.description}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {prod.color}
                                    </p>
                                    <div className='-item__deets'>
                                        <span>$ {prod.price}</span>
                                        <span>x</span>
                                        <span>0{prod.quantity}</span>
                                    </div>
                                    <button onClick={ () => removeShirt(prod.id) }>
                                        <TbShirtOff />
                                    </button>
                                </div>
                          </div>
                      ))
                  }
                </div>
              </div>
              <div className='_cartCtr__rightD'>
                <h3>Payment Details</h3>
                <Form cart={cart} total={total} clear={clear} handleId={handleId}/>
                <h5>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;
                    {totalPrice()},00</h5>
              </div>
          </div>

        )
    };
};

export default Cart