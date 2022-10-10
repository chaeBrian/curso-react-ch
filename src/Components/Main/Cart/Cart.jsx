import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { TbShirtOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import Form from "../../Form/Form";
//Stylesheet
import "./CartCss/Cart.css";

const Cart = () => {
  const [buyId, setBuyId] = useState("");
  const { cart, clear, removeShirt, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  const handleId = (id) => {
    setBuyId(id);
  };

  if (buyId) {
    return (
      <section className="sectionCart__id">
        <h4>Thank you for shopping here.</h4>
        <p>
          Your purchase ID is: <span>{buyId}</span>
          <br />
          check your email for more information.
        </p>
        <Link className="sectionCart__bttn--modified" to="/">
          Back to Store
        </Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="sectionCart--modified">
        <h4>Your Cart is Empty</h4>
        <p>
          Looks like you haven't added <br></br> anything to your cart yet
        </p>
        <Link className="sectionCart__bttn--modified" to="/">
          Shop Now
        </Link>
      </section>
    );
  } else {
    return (
      <section className="sectionCart">
        <div className="sectionCart__div">
          <div className="sectionCart__div--div">
            <span className="sectionCart__span--div">Your Order</span>
            <button onClick={clear} className="sectionCart__button--div">
              <span className="sectionCart__text--button">Remove All</span>
              <span className="sectionCart__icon--button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.188l-8.315-8.209
                                8.2-8.282-3.697-3.697-8.212
                                8.318-8.31-8.203-3.666 3.666
                                8.321 8.24-8.206 8.313 3.666
                                3.666 8.237-8.318 8.285 8.203z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="sectionCart__div--modified">
            {cart.map((prod) => (
              <div key={prod.id} className="sectionCart__itemCtr">
                <picture>
                  <img src={prod.img} alt={prod.title} />
                </picture>
                <div className="sectionCart__itemDeetsCtr">
                  <h3>{prod.title}</h3>
                  <span className="sectionCart__span--itemDeetsCtr">{prod.deets}</span>
                  <div className="sectionCart__itemDeets">
                    <span>$ {prod.price},00</span>
                    <span>x</span>
                    <span>0{prod.quantity}</span>
                  </div>
                  <button onClick={() => removeShirt(prod.id)}>
                    <TbShirtOff />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sectionCart__div">
          <h3>Payment Details</h3>
          <Form cart={cart} total={total} clear={clear} handleId={handleId} />
          <span>
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$&nbsp;
            {totalPrice()},00
          </span>
        </div>
      </section>
    );
  }
};

export default Cart;
